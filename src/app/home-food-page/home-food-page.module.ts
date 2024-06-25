import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeFoodPageComponent } from './pages/home-food-page/home-food-page.component';
import { SharedModule } from '../shared/shared.module';
import { MainImageSectionFoodComponent } from './components/main-image-section-food/main-image-section-food.component';
import { CouruselSliderFoodComponent } from './components/courusel-slider-food/courusel-slider-food.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { FoodCardRestaurantsComponent } from './components/food-card-restaurants/food-card-restaurants.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FoodRestaurantsCardsSectionComponent } from './components/food-restaurants-cards-section/food-restaurants-cards-section.component';
import { FoodPromoSectionComponent } from './components/food-promo-section/food-promo-section.component';
import { AuthModule } from '../auth/auth.module';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../core/auth.guards';
import { AdminAuthGuard } from '../core/auth-owner.guards';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeFoodPageComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'FoodDeliverSearch',
  },
  {
    path: 'FoodDeliverSearch',
    loadChildren: () =>
      import('./../food-search-page/food-search-page.module').then(
        (m) => m.FoodSearchPageModule
      ),
  },
  {
    path: 'RestaurantSearch',
    loadChildren: () =>
      import('./../food-restaurants-page/food-restaurants-page.module').then(
        (m) => m.FoodRestaurantsPageModule
      ),
  },
  {
    path: 'userDashboard',
    loadChildren: () =>
      import('./../../app/users-pages/users-pages.module').then(
        (m) => m.UsersPagesModule
      ),
    canActivate: [AuthGuard],
  },
  // {
  //   path: 'OwnerDashboard',
  //   loadChildren: () =>
  //     import('./../food-admin-pages/food-admin-pages.module').then(
  //       (m) => m.FoodAdminPagesModule
  //     ),
  //   canActivate: [AdminAuthGuard],
  // },
  {
    path: 'owner',
    loadChildren: () =>
      import('./../../app/owner-pages/owner-pages.module').then(
        (m) => m.OwnerPagesModule
      ),
  },
];

@NgModule({
  declarations: [
    HomeFoodPageComponent,
    MainImageSectionFoodComponent,
    CouruselSliderFoodComponent,
    FoodCardRestaurantsComponent,
    FoodRestaurantsCardsSectionComponent,
    FoodPromoSectionComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    AuthModule,
    SlickCarouselModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
  ],
  exports: [HomeFoodPageComponent],
})
export class HomeFoodPageModule {}
