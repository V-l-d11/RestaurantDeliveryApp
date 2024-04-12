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

@NgModule({
  declarations: [
    HomeFoodPageComponent,
    MainImageSectionFoodComponent,
    CouruselSliderFoodComponent,
    FoodCardRestaurantsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    SlickCarouselModule,
    MatCardModule,
    MatIconModule,
  ],
  exports: [HomeFoodPageComponent],
})
export class HomeFoodPageModule {}
