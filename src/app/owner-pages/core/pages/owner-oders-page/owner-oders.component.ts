import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { filter, switchMap, Observable, take } from 'rxjs';
import { OwnerOderBase } from 'src/app/models/baseModals/owerOderBase';
import { PageableResponse } from 'src/app/models/baseModals/pagaeble';
import {
  getOdersByCustomer,
  getOwnerHistoryOders,
} from 'src/app/owner-pages/store+/actions/actions-owner-oders';
import { findRestaurant } from 'src/app/owner-pages/store+/actions/actions-owner-retsuarant';
import { getRestaurantId } from 'src/app/owner-pages/store+/selectors/owner-dashboard-selectors';
import { getOders } from 'src/app/owner-pages/store+/selectors/owner-oders-selectors';

@Component({
  selector: 'app-owner-oders',
  templateUrl: './owner-oders.component.html',
  styleUrls: ['./owner-oders.component.scss'],
})
export class OwnerOdersPageComponent implements OnInit {
  queryCustomerName!: string;
  navLinks: string[] = ['All', 'Pending', 'Completed', 'Failed'];
  resturantId$!: Observable<number>;
  odersList$!: Observable<PageableResponse<OwnerOderBase>>;
  ordersLoaded = false;

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
          return this.store$.select(getOders);
        }),
        filter((orders) => orders.content.length > 0),
        take(1)
      )
      .subscribe((orders) => {
        console.log(orders, 'Orders');
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

  onDateCreateAtFiltered(date: string) {}

  onDateRangeCreateAt(startDate: string, endDate: string) {}
}
