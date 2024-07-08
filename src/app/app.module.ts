import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';
import { HomeFoodPageModule } from './home-food-page/home-food-page.module';
import { Store, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { initAuth } from './auth/core/store/actions/food-auth-actions';
import { AuthReducer } from './auth/core/store/reducers/food-auth-reducer';
import { MatDialogModule } from '@angular/material/dialog';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenIntercaptor } from './interceptors/token-interceptor';
import { FoodSearchPageModule } from './food-search-page/food-search-page.module';
import { SearchReducer } from './food-search-page/core/store+/reducer/food-search-reducer';
import { FoodRestaurantsPageModule } from './food-restaurants-page/food-restaurants-page.module';
import { RestaurantCustomerReducer } from './food-restaurants-page/core/store+/reducers/restaurant-reducer';
import { BascetReducer } from './users-pages/core/store+/reducers/user-bascet-reducer';
import { OdersReducerUser } from './users-pages/core/store+/reducers/oder-users-reducer';
import { UserProfilesReducer } from './users-pages/core/store+/reducers/user-profile-reducer';
import { OwnerDashboardReducer } from './owner-pages/store+/reducers/owner-dashboard-reducer';
import { OwnerRestaurantReducer } from './owner-pages/store+/reducers/owner-restaurant-reducer';
import { OwnerOdersReducer } from './owner-pages/store+/reducers/owner-oders-reducer';
import { OwnerPagesModule } from './owner-pages/owner-pages.module';
import { UsersPagesModule } from './users-pages/users-pages.module';
import { OwnerProfilesReducer } from './owner-pages/store+/reducers/owner-profiles-reducer';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OwnerCategoriesFoodReduce } from './owner-pages/store+/reducers/owner-categories-food';
import { OwnerIngridientsReducer } from './owner-pages/store+/reducers/owner-ingridients-reducer';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    SharedModule,
    HomeFoodPageModule,
    MatDialogModule,
    OwnerPagesModule,
    BrowserAnimationsModule,
    UsersPagesModule,
    FoodSearchPageModule,
    FoodRestaurantsPageModule,
    StoreModule.forRoot({
      auth: AuthReducer,
      search: SearchReducer,
      CustomerRestaurant: RestaurantCustomerReducer,
      bascet: BascetReducer,
      oders: OdersReducerUser,
      profiles: UserProfilesReducer,
      ownerDashboard: OwnerDashboardReducer,
      ownerRestaurant: OwnerRestaurantReducer,
      ownerOders: OwnerOdersReducer,
      ownerProfiles: OwnerProfilesReducer,
      ownerCategoriesFood: OwnerCategoriesFoodReduce,
      ownerIngridients: OwnerIngridientsReducer,
    }),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: false }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: TokenIntercaptor,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(store$: Store) {
    //    store$.dispatch(initAuth());
  }
}
