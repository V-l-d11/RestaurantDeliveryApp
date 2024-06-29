import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { OwnerRestaurantInfo } from 'src/app/models/storeModels/selectorsModels/owner-restaurant-info';
import { findRestaurant } from 'src/app/owner-pages/store+/actions/actions-owner-retsuarant';
import { getRestaurantInfo } from 'src/app/owner-pages/store+/selectors/owner-dashboard-selectors';

@Component({
  selector: 'app-owner-dashboard-page',
  templateUrl: './owner-dashboard-page.component.html',
  styleUrls: ['./owner-dashboard-page.component.scss'],
})
export class OwnerDashboardPageComponent implements OnInit {
  restaurantInfo$!: Observable<OwnerRestaurantInfo | null>;

  constructor(private store$: Store) {
    this.store$.dispatch(findRestaurant());
  }

  ngOnInit(): void {
    this.restaurantInfo$ = this.store$.select(getRestaurantInfo);
  }
}
