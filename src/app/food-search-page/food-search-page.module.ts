import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodSearchPageComponent } from './core/pages/food-search-page/food-search-page.component';
import { SharedModule } from '../shared/shared.module';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { FoodCaruselPopelarCuisinComponent } from './core/components/food-carusel-popelar-cuisin/food-carusel-popelar-cuisin.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import {
  FOOD_SEARCH_FEATURE_NAME,
  SearchReducer,
} from './core/store+/reducer/food-search-reducer';
import { EffectsModule } from '@ngrx/effects';
import { FoodSearchEffects } from './core/store+/effects/food-search-effects';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: FoodSearchPageComponent,
  },
];

@NgModule({
  declarations: [FoodSearchPageComponent, FoodCaruselPopelarCuisinComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    SlickCarouselModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forFeature(FOOD_SEARCH_FEATURE_NAME, SearchReducer),
    EffectsModule.forFeature([FoodSearchEffects]),
  ],

  exports: [FoodSearchPageComponent],
})
export class FoodSearchPageModule {}
