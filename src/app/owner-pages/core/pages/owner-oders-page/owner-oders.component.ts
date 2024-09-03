import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { filter, switchMap, Observable, take } from 'rxjs';
import { OrderStatusSummaryResponse } from 'src/app/models/api/responses/admin/owner-oders-status-summary-response';
import { OwnerOderBase } from 'src/app/models/baseModals/owerOderBase';
import { PageableResponse } from 'src/app/models/baseModals/pagaeble';
import {
  getOdersByCustomer,
  getOdersCreateAt,
  getOdersRangeDate,
  getOdersStatusSummary,
  getOwnerHistoryOders,
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
export class OwnerOdersPageComponent implements OnInit {
  queryRangeDateEnd: string = '';
  queryRangeDateStart: string = '';
  queryCustomerName!: string;
  queryFilterDate!: string;
  navLinks: string[] = ['All', 'Pending', 'Completed', 'Failed'];
  resturantId$!: Observable<number>;
  odersList$!: Observable<PageableResponse<OwnerOderBase>>;
  ordersLoaded = false;
  oderStatuses$!: Observable<OrderStatusSummaryResponse | ''>;

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
          this.store$.dispatch(getOwnerHistoryOders({ restaurantId }));
          this.store$.dispatch(getOdersStatusSummary({ restaurantId }));
          return this.store$.select(getOders);
        }),
        filter((orders) => orders.content.length > 0),
        take(1)
      )
      .subscribe((orders) => {
        console.log(orders, 'Orders');
        this.oderStatuses$ = this.store$.select(selectOdersStatusSummary);
        this.odersList$ = this.store$.select(getOders);
        this.ordersLoaded = true;
      });
  }

  onInputCustomerChange(): void {
    if (this.queryCustomerName.length >= 5) {
      this.store$.dispatch(
        getOdersByCustomer({ fullName: this.queryCustomerName })
      );
    }
  }

  onInputCreateAtChange() {
    if (this.queryFilterDate.length >= 5) {
      this.store$.dispatch(
        getOdersCreateAt({ createAt: this.queryFilterDate })
      );
    }
  }

  onInputRangeDateChange() {
    const datePattern = /^\d{4}-\d{2}-\d{2}$/;

    const isStartDateValid = datePattern.test(this.queryRangeDateStart);
    const isEndDateValid = datePattern.test(this.queryRangeDateEnd);

    if (isStartDateValid && isEndDateValid) {
      this.store$.dispatch(
        getOdersRangeDate({
          startDate: this.queryRangeDateStart,
          endDate: this.queryRangeDateEnd,
        })
      );
    } else {
      console.warn(
        'Invalid date format. Please enter the date in YYYY-MM-DD format.'
      );
    }
  }

  onDateCreateAtFiltered(date: string) {}

  onDateRangeCreateAt(startDate: string, endDate: string) {}
}
