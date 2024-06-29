import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { OwnerRestaurantInfo } from 'src/app/models/storeModels/selectorsModels/owner-restaurant-info';

@Component({
  selector: 'app-owner-dashboard-card-restaurant',
  templateUrl: './owner-dashboard-card-restaurant.component.html',
  styleUrls: ['./owner-dashboard-card-restaurant.component.scss'],
})
export class OwnerDashboardCardRestaurantComponent implements OnInit {
  @Input()
  restInfo!: Observable<OwnerRestaurantInfo | null>;

  constructor() {}

  editRestaurantInfo() {}

  ngOnInit(): void {
    console.log(this.restInfo, 'Rest Info in OnINit');
    this.restInfo.subscribe((el) => console.log(el, 'element'));
  }
}
