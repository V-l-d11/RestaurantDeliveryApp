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
import { MatTableModule } from '@angular/material/table';
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
import { OwnerRestaurantEffects } from './store+/effects/owner-restaurant-effects';
import { OwnerRestaurantService } from './services/api-owner-restaurant-service/owner-restaurant.service';
import { OwnerDialogAskingComponent } from './core/components/owner-dialog-asking/owner-dialog-asking.component';
import { OwnerDialogServiceService } from './services/owner-dialog-service/owner-dialog-service.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { OwnerManuItemTableComponent } from './core/components/owner-manu-item-table/owner-manu-item-table.component';
import { OwnerCategoriesTableComponent } from './core/components/owner-categories-table/owner-categories-table.component';
import {
  OwnerCategoriesFoodReduce,
  OWNER_CATEGORIES_FOOD_NAME,
} from './store+/reducers/owner-categories-food';
import { CategoryFoodService } from './services/api-owner-category-food-service/category-food.service';
import { OwnerCategoryFoodEffects } from './store+/effects/owner-category-food-effects';
import { OwnerDialogCrateCategoryFoodComponent } from './core/components/owner-dialog-crate-category-food/owner-dialog-crate-category-food.component';
import { OwnerIngridientsPageComponent } from './core/pages/owner-ingridients-page/owner-ingridients-page.component';
import {
  OWNER_IGRIDIENTS_FEATURE_NAME,
  OwnerIngridientsReducer,
} from './store+/reducers/owner-ingridients-reducer';
import { OwnerIngridientsEffects } from './store+/effects/owner-ingridients-effects';
import { OwnerSingleIngridCategoryComponent } from './core/components/owner-single-ingrid-category/owner-single-ingrid-category.component';
import { OwnerIngridietnsCategoryListComponent } from './core/components/owner-ingridietns-category-list/owner-ingridietns-category-list.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatChipsModule } from '@angular/material/chips';
import { OwnerDialogAddIngridCategoryComponent } from './core/components/owner-dialog-add-ingrid-category/owner-dialog-add-ingrid-category.component';
import { OwnerDialogAddIngridientItemComponent } from './core/components/owner-dialog-add-ingridient-item/owner-dialog-add-ingridient-item.component';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import {
  OWNER_MENU_FOOD_NAME,
  OwnerMenuFoodReducer,
} from './store+/reducers/owner-food-reducer';
import { OwnerMenuFoodEffects } from './store+/effects/owner-menu-food-effects';
import { OwnerMenuFiltersFoodSectionComponent } from './core/components/owner-menu-filters-food-section/owner-menu-filters-food-section.component';
import { OwnerMenuFilterCardComponent } from './core/components/owner-menu-filter-card/owner-menu-filter-card.component';
import { OwnerAddMenuItemFoodComponent } from './core/pages/owner-add-menu-item-food/owner-add-menu-item-food.component';
import { MatButtonModule } from '@angular/material/button';

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
      {
        path: 'ingridients',
        component: OwnerIngridientsPageComponent,
      },
      { path: 'oders', component: OwnerOdersComponent },
      { path: 'menu', component: OwnerMenuComponent },
      { path: 'foodCategory', component: OwnerFoodCategoryComponent },
      { path: 'events', component: OwnerEventsComponent },
      { path: 'details', component: OwnerDetailsComponent },
      {
        path: 'addItem',
        component: OwnerAddMenuItemFoodComponent,
      },
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
    OwnerDialogAskingComponent,
    OwnerManuItemTableComponent,
    OwnerCategoriesTableComponent,
    OwnerDialogCrateCategoryFoodComponent,
    OwnerIngridientsPageComponent,
    OwnerSingleIngridCategoryComponent,
    OwnerIngridietnsCategoryListComponent,
    OwnerDialogAddIngridCategoryComponent,
    OwnerDialogAddIngridientItemComponent,
    OwnerMenuFiltersFoodSectionComponent,
    OwnerMenuFilterCardComponent,
    OwnerAddMenuItemFoodComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatTableModule,
    MatSelectModule,
    MatSnackBarModule,
    MatChipsModule,
    MatRadioModule,
    MatButtonModule,
    MatExpansionModule,
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
    StoreModule.forFeature(
      OWNER_CATEGORIES_FOOD_NAME,
      OwnerCategoriesFoodReduce
    ),
    StoreModule.forFeature(
      OWNER_IGRIDIENTS_FEATURE_NAME,
      OwnerIngridientsReducer
    ),
    StoreModule.forFeature(OWNER_MENU_FOOD_NAME, OwnerMenuFoodReducer),
    EffectsModule.forFeature([
      OwnerDashboardEffects,
      OwnerRestaurantEffects,
      OwnerDialogServiceService,
      OwnerCategoryFoodEffects,
      OwnerIngridientsEffects,
      OwnerMenuFoodEffects,
    ]),
  ],
  providers: [
    OwnerDashboardService,
    OwnerFoodService,
    OwnerOdersService,
    OwnerRestaurantService,
    CategoryFoodService,
  ],
})
export class OwnerPagesModule {}
