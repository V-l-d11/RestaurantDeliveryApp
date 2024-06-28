import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { findRestaurant } from 'src/app/owner-pages/store+/actions/actions-owner-retsuarant';

@Component({
  selector: 'app-owner-dashboard-page',
  templateUrl: './owner-dashboard-page.component.html',
  styleUrls: ['./owner-dashboard-page.component.scss'],
})
export class OwnerDashboardPageComponent {
  constructor(private store$: Store) {
    this.store$.dispatch(findRestaurant());
  }
}
