import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { OwnerRestaurantInfo } from 'src/app/models/storeModels/selectorsModels/owner-restaurant-info';
import { OwnerDialogServiceService } from 'src/app/owner-pages/services/owner-dialog-service/owner-dialog-service.service';
import { updateRestaurantStatus } from 'src/app/owner-pages/store+/actions/actions-owner-retsuarant';

@Component({
  selector: 'app-owner-dashboard-card-restaurant',
  templateUrl: './owner-dashboard-card-restaurant.component.html',
  styleUrls: ['./owner-dashboard-card-restaurant.component.scss'],
})
export class OwnerDashboardCardRestaurantComponent implements OnInit {
  @Input()
  restInfo!: Observable<OwnerRestaurantInfo | null>;
  restaurantId!: number;

  constructor(
    private route: Router,
    private store$: Store,
    private dialogService: OwnerDialogServiceService
  ) {}

  editRestaurantInfo() {
    this.route.navigate(['/foodapp/owner/editRestaurnatInfo']);
  }

  updateRestaurantStatus() {
    this.store$.dispatch(
      updateRestaurantStatus({ restaurantId: this.restaurantId })
    );
    this.dialogService.openSnackBar('Status Sucessfuli changed!');
  }

  ngOnInit(): void {
    console.log(this.restInfo, 'Rest Info in OnINit');
    this.restInfo.subscribe((el) => {
      this.restaurantId = el!.id;
    });
  }
}
