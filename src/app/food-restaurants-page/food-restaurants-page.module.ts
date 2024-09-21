import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodRestaurantSearchPageComponent } from './core/pages/food-restaurant-search-page/food-restaurant-search-page.component';
import { FoodSingleRestaurantPageComponent } from './core/pages/food-single-restaurant-page/food-single-restaurant-page.component';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import {
  RESTAURANT_CUSTOMER_FEATURE_NAME,
  RestaurantCustomerReducer,
} from './core/store+/reducers/restaurant-reducer';
import { EffectsModule } from '@ngrx/effects';
import { RestaurantCustomerEffects } from './core/store+/effects/restaurant-effects';
import { SharedModule } from '../shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantFilterSectionComponent } from './core/components/restaurant-filter-section/restaurant-filter-section.component';
import { FoodDetailsDialogModalComponent } from './core/components/food-details-dialog-modal/food-details-dialog-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BascetEffects } from '../users-pages/core/store+/effects/user-bascet-effects';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenIntercaptor } from '../interceptors/token-interceptor';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { CustomerRestaurantSearchListComponent } from './core/components/customer-restaurant-search-list/customer-restaurant-search-list.component';
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: FoodRestaurantSearchPageComponent,
  },
  {
    path: 'restaurant/:id',
    component: FoodSingleRestaurantPageComponent,
  },
  {
    path: 'userDashboard',
    loadChildren: () =>
      import('./../../app/users-pages/users-pages.module').then(
        (m) => m.UsersPagesModule
      ),
  },
];

@NgModule({
  declarations: [
    FoodRestaurantSearchPageComponent,
    FoodSingleRestaurantPageComponent,
    RestaurantFilterSectionComponent,
    FoodDetailsDialogModalComponent,
    CustomerRestaurantSearchListComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatIconModule,
    MatSlideToggleModule,
    MatTooltipModule,
    MatButtonModule,
    RouterModule.forChild(routes),
    FormsModule,
    SharedModule,
    StoreModule.forFeature(
      RESTAURANT_CUSTOMER_FEATURE_NAME,
      RestaurantCustomerReducer
    ),
    EffectsModule.forFeature([RestaurantCustomerEffects, BascetEffects]),
  ],
  exports: [FoodRestaurantSearchPageComponent],
})
export class FoodRestaurantsPageModule {}
