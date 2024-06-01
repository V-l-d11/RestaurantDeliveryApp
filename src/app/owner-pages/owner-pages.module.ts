import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { OwnerDashboardPageComponent } from './core/pages/owner-dashboard-page/owner-dashboard-page.component';
import { OwnerOdersComponent } from './core/pages/owner-oders/owner-oders.component';
import { OwnerMenuComponent } from './core/pages/owner-menu/owner-menu.component';
import { OwnerFoodCategoryComponent } from './core/pages/owner-food-category/owner-food-category.component';
import { OwnerEventsComponent } from './core/pages/ower-events/ower-events.component';
import { OwnerDetailsComponent } from './core/pages/ower-details/ower-details.component';
import { OwnerContainerComponent } from './core/pages/owner-container/owner-container.component';
import { OwnerDashboardService } from './services/api-owner-dashboard-service/owner-dashboard.service';
import { OwnerFoodService } from './services/api-owner-food-service/owner-food.service';
import { OwnerOdersService } from './services/api-owner-oders-service/owner-oders.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import {
  OWNER_DASHBOARD_FEATURE_NAME,
  OwnerDashboardReducer,
} from './store+/reducers/owner-dashboard-reducer';
import { OwnerSideNavMenuComponent } from './core/components/owner-side-nav-menu/owner-side-nav-menu.component';
import {
  OWNER_RESTAURANT_FEATURE_NAME,
  OwnerRestaurantReducer,
} from './store+/reducers/owner-restaurant-reducer';
import {
  OWNER_ODERS_FEATURE_NAME,
  OwnerOdersReducer,
} from './store+/reducers/owner-oders-reducer';

const routes: Routes = [
  {
    path: '',
    component: OwnerContainerComponent,
    children: [
      { path: 'dashboard', component: OwnerDashboardPageComponent },
      { path: 'oders', component: OwnerOdersComponent },
      { path: 'menu', component: OwnerMenuComponent },
      { path: 'foodCategory', component: OwnerFoodCategoryComponent },
      { path: 'events', component: OwnerEventsComponent },
      { path: 'details', component: OwnerDetailsComponent },
    ],
  },
];

@NgModule({
  declarations: [
    OwnerContainerComponent,
    OwnerDashboardPageComponent,
    OwnerOdersComponent,
    OwnerMenuComponent,
    OwnerFoodCategoryComponent,
    OwnerEventsComponent,
    OwnerDetailsComponent,
    OwnerSideNavMenuComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(OWNER_DASHBOARD_FEATURE_NAME, OwnerDashboardReducer),
    StoreModule.forFeature(
      OWNER_RESTAURANT_FEATURE_NAME,
      OwnerRestaurantReducer
    ),
    StoreModule.forFeature(OWNER_ODERS_FEATURE_NAME, OwnerOdersReducer),
  ],
  providers: [OwnerDashboardService, OwnerFoodService, OwnerOdersService],
})
export class OwnerPagesModule {}
