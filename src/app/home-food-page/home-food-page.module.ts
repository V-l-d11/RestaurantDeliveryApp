import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeFoodPageComponent } from './pages/home-food-page/home-food-page.component';
import { SharedModule } from '../shared/shared.module';
import { MainImageSectionFoodComponent } from './components/main-image-section-food/main-image-section-food.component';

@NgModule({
  declarations: [HomeFoodPageComponent, MainImageSectionFoodComponent],
  imports: [CommonModule, SharedModule],
  exports: [HomeFoodPageComponent],
})
export class HomeFoodPageModule {}
