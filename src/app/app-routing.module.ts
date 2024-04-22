import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'foodapp/main', pathMatch: 'full' },
  {
    path: 'foodapp',
    loadChildren: () =>
      import('./home-food-page/home-food-page.module').then(
        (m) => m.HomeFoodPageModule
      ),
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'FoodDeliverSearch',
    loadChildren: () =>
      import('./food-search-page/food-search-page.module').then(
        (m) => m.FoodSearchPageModule
      ),
  },
  {
    path: 'RestaurantSearch',
    loadChildren: () =>
      import('./food-restaurants-page/food-restaurants-page.module').then(
        (m) => m.FoodRestaurantsPageModule
      ),
  },
  {
    path: '**',
    redirectTo: '/foodapp',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
