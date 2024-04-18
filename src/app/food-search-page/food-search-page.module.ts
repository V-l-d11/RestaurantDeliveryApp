import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodSearchPageComponent } from './core/pages/food-search-page/food-search-page.component';
import { SharedModule } from '../shared/shared.module';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { FoodCaruselPopelarCuisinComponent } from './core/components/food-carusel-popelar-cuisin/food-carusel-popelar-cuisin.component';

@NgModule({
  declarations: [FoodSearchPageComponent, FoodCaruselPopelarCuisinComponent],
  imports: [CommonModule, SharedModule, SlickCarouselModule],
  exports: [FoodSearchPageComponent],
})
export class FoodSearchPageModule {}
