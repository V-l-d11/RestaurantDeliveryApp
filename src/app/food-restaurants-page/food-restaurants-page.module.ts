import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodRestaurantSearchPageComponent } from './core/pages/food-restaurant-search-page/food-restaurant-search-page.component';
import { FoodSingleRestaurantPageComponent } from './core/pages/food-single-restaurant-page/food-single-restaurant-page.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FoodRestaurantSearchPageComponent,
    FoodSingleRestaurantPageComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [FoodRestaurantSearchPageComponent],
})
export class FoodRestaurantsPageModule {}
