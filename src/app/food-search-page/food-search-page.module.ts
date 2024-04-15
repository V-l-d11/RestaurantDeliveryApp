import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodSearchPageComponent } from './core/pages/food-search-page/food-search-page.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [FoodSearchPageComponent],
  imports: [CommonModule, SharedModule],
  exports: [FoodSearchPageComponent],
})
export class FoodSearchPageModule {}
