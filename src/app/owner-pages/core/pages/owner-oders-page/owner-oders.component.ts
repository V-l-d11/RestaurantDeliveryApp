import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import {
  filter,
  switchMap,
  debounceTime,
  distinctUntilChanged,
  takeUntil,
  map,
} from 'rxjs/operators';
import { OrderStatusSummaryResponse } from 'src/app/models/api/responses/admin/owner-oders-status-summary-response';
import { updateOderStatusData } from 'src/app/models/baseModals/oderDataStatus';
import { OwnerOderBase } from 'src/app/models/baseModals/owerOderBase';
import { PageableResponse } from 'src/app/models/baseModals/pagaeble';
import {
  getOdersByCustomer,
  getOdersCreateAt,
  getOdersFilterByTotalPrice,
  getOdersRangeDate,
  getOdersStatusSummary,
  getOwnerHistoryOders,
  updateOwnerOderStatus,
} from 'src/app/owner-pages/store+/actions/actions-owner-oders';
import { findRestaurant } from 'src/app/owner-pages/store+/actions/actions-owner-retsuarant';
import { getRestaurantId } from 'src/app/owner-pages/store+/selectors/owner-dashboard-selectors';
import {
  getOders,
  selectOdersStatusSummary,
} from 'src/app/owner-pages/store+/selectors/owner-oders-selectors';

@Component({
  selector: 'app-owner-oders',
  templateUrl: './owner-oders.component.html',
  styleUrls: ['./owner-oders.component.scss'],
})
export class OwnerOdersPageComponent implements OnInit, OnDestroy {
  queryDateRange: string = '';
  queryCustomerName!: string;
  queryFilterDate!: string;
  queryFilterTotalPrice!: string;
  restaurantId!: number;
  navLinks: string[] = ['All', 'Pending', 'Completed', 'Failed'];
  resturantId$!: Observable<number>;
  odersList$!: Observable<PageableResponse<OwnerOderBase>>;
  ordersLoaded = false;
  oderStatuses$!: Observable<OrderStatusSummaryResponse | ''>;
  formattedStatuses: string[] = [];
  private dateRangeSubject = new Subject<string>();
  private destroy$ = new Subject<void>();

  constructor(private store$: Store, private router: Router) {
    this.store$.dispatch(findRestaurant());
  }

  loadOdersHistory(restaurantId: number, oderStatus?: string) {
    this.store$.dispatch(getOwnerHistoryOders({ restaurantId, oderStatus }));
  }

  ngOnInit(): void {
    this.resturantId$ = this.store$
      .select(getRestaurantId)
      .pipe(filter((id) => !!id));
    this.resturantId$
      .pipe(
        switchMap((restaurantId) => {
          this.restaurantId = restaurantId;
          this.store$.dispatch(getOwnerHistoryOders({ restaurantId }));
          this.store$.dispatch(getOdersStatusSummary({ restaurantId }));
          return this.store$.select(getOders);
        }),
        filter((orders) => orders.content.length > 0)
      )
      .subscribe((orders) => {
        this.oderStatuses$ = this.store$.select(selectOdersStatusSummary);
        this.odersList$ = this.store$.select(getOders);
        this.ordersLoaded = true;

        this.oderStatuses$.subscribe((statusSummary) => {
          this.formatStatuses(statusSummary as OrderStatusSummaryResponse);
        });
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  formatStatuses(statusSummary: OrderStatusSummaryResponse) {
    const defaultStatuses: OrderStatusSummaryResponse = {
      PENDING: 0,
      COMPLETED: 0,
      CANCELLED: 0,
    };
    const updatedStatuses = { ...defaultStatuses, ...statusSummary };
    this.formattedStatuses = Object.entries(updatedStatuses).map(
      ([status, count]) => `${status}(${count})`
    );
  }

  onStatusSelected(selectedStatus: string): void {
    selectedStatus = selectedStatus.toUpperCase();
    if (selectedStatus === 'ALL') {
      this.store$.dispatch(
        getOwnerHistoryOders({ restaurantId: this.restaurantId })
      );
    } else {
      this.store$.dispatch(
        getOwnerHistoryOders({
          restaurantId: this.restaurantId,
          oderStatus: selectedStatus,
        })
      );
    }
  }

  onInputCustomerChange(): void {
    if (!this.queryCustomerName) {
      this.loadOdersHistory(this.restaurantId);
    } else if (this.queryCustomerName.length >= 5) {
      this.store$.dispatch(
        getOdersByCustomer({ fullName: this.queryCustomerName })
      );
    }
  }

  onInputCreateAtChange() {
    if (!this.queryFilterDate) {
      this.loadOdersHistory(this.restaurantId);
    } else if (this.queryFilterDate.length >= 5) {
      this.store$.dispatch(
        getOdersCreateAt({ createAt: this.queryFilterDate })
      );
    }
  }

  onInputFilterByTotalPrice() {
    if (!this.queryFilterTotalPrice) {
      this.loadOdersHistory(this.restaurantId);
    } else if (this.queryFilterTotalPrice.length >= 2) {
      let obj = {
        restaurantId: this.restaurantId,
        price: Number(this.queryFilterTotalPrice),
      };
      this.store$.dispatch(getOdersFilterByTotalPrice({ obj }));
    }
  }

  updateOderStatus(data: updateOderStatusData) {
    const oderId = data.oderId;
    const oderStatus = data.oderStatus;
    this.store$.dispatch(updateOwnerOderStatus({ oderId, oderStatus }));
  }

  deleteOder() {}
}
