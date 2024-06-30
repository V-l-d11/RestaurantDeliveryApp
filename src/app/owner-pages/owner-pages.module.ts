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
import {
  OWNER_PROFILES_FEATURE_NAME,
  OwnerProfilesReducer,
} from './store+/reducers/owner-profiles-reducer';
import { EffectsModule } from '@ngrx/effects';
import { OwnerDashboardEffects } from './store+/effects/owner-dashboard-efects';
import { OwnerDashboardCardRestaurantComponent } from './core/components/owner-dashboard-card-restaurant/owner-dashboard-card-restaurant.component';
import { DateTransformPipe } from './pipes/date-transform.pipe';
import { MatIconModule } from '@angular/material/icon';
import { OwnerDashboardAddressRestaurantCardComponent } from './core/components/owner-dashboard-address-restaurant-card/owner-dashboard-address-restaurant-card.component';
import { OwnerDashboardContactRetaurantCardComponent } from './core/components/owner-dashboard-contact-retaurant-card/owner-dashboard-contact-retaurant-card.component';
import { OwnerUpdateDashboardInfoComponent } from './core/pages/owner-update-dashboard-info/owner-update-dashboard-info.component';
const routes: Routes = [
  {
    path: '',
    component: OwnerContainerComponent,
    children: [
      { path: 'dashboardOwner', component: OwnerDashboardPageComponent },
      {
        path: 'editRestaurnatInfo',
        component: OwnerUpdateDashboardInfoComponent,
      },
      { path: 'oders', component: OwnerOdersComponent },
      { path: 'menu', component: OwnerMenuComponent },
      { path: 'foodCategory', component: OwnerFoodCategoryComponent },
      { path: 'events', component: OwnerEventsComponent },
      { path: 'details', component: OwnerDetailsComponent },
      { path: '', pathMatch: 'full', redirectTo: 'dashboardOwner' },
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
    OwnerDashboardCardRestaurantComponent,
    DateTransformPipe,
    OwnerDashboardAddressRestaurantCardComponent,
    OwnerDashboardContactRetaurantCardComponent,
    OwnerUpdateDashboardInfoComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(OWNER_DASHBOARD_FEATURE_NAME, OwnerDashboardReducer),
    StoreModule.forFeature(
      OWNER_RESTAURANT_FEATURE_NAME,
      OwnerRestaurantReducer
    ),
    StoreModule.forFeature(OWNER_ODERS_FEATURE_NAME, OwnerOdersReducer),
    StoreModule.forFeature(OWNER_PROFILES_FEATURE_NAME, OwnerProfilesReducer),
    EffectsModule.forFeature([OwnerDashboardEffects]),
  ],

  providers: [OwnerDashboardService, OwnerFoodService, OwnerOdersService],
})
export class OwnerPagesModule {}
