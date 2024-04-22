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

const routes: Routes = [{ path: 'main', component: HomeFoodPageComponent }];

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
