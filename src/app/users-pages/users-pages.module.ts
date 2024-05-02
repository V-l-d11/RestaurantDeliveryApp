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

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: DashboardPageComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'bascet' },
      { path: 'favorites', component: FavoritesUsersComponent },
      { path: 'addresses', component: AddressesUsersComponent },
      { path: 'oders', component: MyOdersUsersComponent },
      { path: 'discounts', component: DiscountsUsersComponent },
      { path: 'bascet', component: BasketUserComponent },
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
  ],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class UsersPagesModule {}
