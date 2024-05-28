import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPageComponent } from './core/pages/dashboard-page/dashboard-page.component';
import { RouterModule, Routes } from '@angular/router';
import { UsersSideBarComponent } from './core/components/users-side-bar/users-side-bar.component';
import { FavoritesUsersComponent } from './core/pages/favorites-users/favorites-users.component';
import { AddressesUsersComponent } from './core/pages/addresses-users/addresses-users.component';
import { MyOdersUsersComponent } from './core/pages/my-oders-users/my-oders-users.component';
import { DiscountsUsersComponent } from './core/pages/discounts-users/discounts-users.component';
import { BasketUserComponent } from './core/pages/basket-user/basket-user.component';
import { StoreModule } from '@ngrx/store';
import {
  BascetReducer,
  USER_BASCET_FEATURE_NAME,
} from './core/store+/reducers/user-bascet-reducer';
import { EffectsModule } from '@ngrx/effects';
import { BascetEffects } from './core/store+/effects/user-bascet-effects';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenIntercaptor } from '../interceptors/token-interceptor';
import { CardItemBascetComponent } from './core/components/card-item-bascet/card-item-bascet.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  OdersReducerUser,
  USER_ODERS_FEATURE_NAME,
} from './core/store+/reducers/oder-users-reducer';
import { OdersUserEffects } from './core/store+/effects/user-oders-effects';
import { UsersCardHistoryOdersComponent } from './core/components/users-card-history-oders/users-card-history-oders.component';
import { UserOderCreateDialogModalComponent } from './core/components/user-oder-create-dialog-modal/user-oder-create-dialog-modal.component';
import {
  USER_PROFILE_FEATURE_NAME,
  UserProfilesReducer,
} from './core/store+/reducers/user-profile-reducer';
import { UserProfilesEffects } from './core/store+/effects/user-profiles-effects';
import { UserFavoritesRestaurantComponent } from './core/components/user-favorites-restaurant/user-favorites-restaurant.component';
import { UserAddressesListComponent } from './core/components/user-addresses-list/user-addresses-list.component';
import { LogoutModalComponent } from './core/components/logout-modal/logout-modal.component';
import { FoodAuthEffects } from '../auth/core/store/effects/food-auth.effects';

const routes: Routes = [
  {
    path: '',
    component: DashboardPageComponent,
    children: [
      { path: 'favorites', component: FavoritesUsersComponent },
      { path: 'addresses', component: AddressesUsersComponent },
      { path: 'oders', component: MyOdersUsersComponent },
      { path: 'discounts', component: DiscountsUsersComponent },
      { path: 'bascet', component: BasketUserComponent },
      { path: '', pathMatch: 'full', redirectTo: 'bascet' },
    ],
  },
];

@NgModule({
  declarations: [
    DashboardPageComponent,
    UsersSideBarComponent,
    FavoritesUsersComponent,
    AddressesUsersComponent,
    DiscountsUsersComponent,
    MyOdersUsersComponent,
    BasketUserComponent,
    CardItemBascetComponent,
    UsersCardHistoryOdersComponent,
    UserOderCreateDialogModalComponent,
    UserFavoritesRestaurantComponent,
    UserAddressesListComponent,
    LogoutModalComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(USER_BASCET_FEATURE_NAME, BascetReducer),
    StoreModule.forFeature(USER_ODERS_FEATURE_NAME, OdersReducerUser),
    StoreModule.forFeature(USER_PROFILE_FEATURE_NAME, UserProfilesReducer),
    EffectsModule.forFeature([
      BascetEffects,
      OdersUserEffects,
      UserProfilesEffects,
      FoodAuthEffects,
    ]),
  ],
})
export class UsersPagesModule {}
