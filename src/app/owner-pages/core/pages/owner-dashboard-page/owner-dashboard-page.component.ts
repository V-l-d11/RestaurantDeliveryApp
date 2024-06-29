import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AddressBase } from 'src/app/models/baseModals/address';
import { ContactInformation } from 'src/app/models/baseModals/contactInformation';
import { OwnerRestaurantInfo } from 'src/app/models/storeModels/selectorsModels/owner-restaurant-info';
import { findRestaurant } from 'src/app/owner-pages/store+/actions/actions-owner-retsuarant';
import {
  getAddressRestaurant,
  getContactInfoRestaurant,
  getRestaurantInfo,
} from 'src/app/owner-pages/store+/selectors/owner-dashboard-selectors';

@Component({
  selector: 'app-owner-dashboard-page',
  templateUrl: './owner-dashboard-page.component.html',
  styleUrls: ['./owner-dashboard-page.component.scss'],
})
export class OwnerDashboardPageComponent implements OnInit {
  restaurantInfo$!: Observable<OwnerRestaurantInfo | null>;
  restaurantAddress$!: Observable<AddressBase | null>;
  restaurantContactinfo$!: Observable<ContactInformation | null>;

  constructor(private store$: Store) {
    this.store$.dispatch(findRestaurant());
  }

  ngOnInit(): void {
    this.restaurantInfo$ = this.store$.select(getRestaurantInfo);
    this.restaurantAddress$ = this.store$.select(getAddressRestaurant);
    this.restaurantContactinfo$ = this.store$.select(getContactInfoRestaurant);
  }
}
