import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiFoodHeaderComponent } from './ui-food-header/ui-food-header.component';
import { UiFoodH1Component } from './ui-food-h1/ui-food-h1.component';
import { UiFoodLargeH1Component } from './ui-food-large-h1/ui-food-large-h1.component';
import { UiFoodBtnActionComponent } from './ui-food-btn-action/ui-food-btn-action.component';
import { UiFoodPromoCardLargeComponent } from './ui-food-promo-card-large/ui-food-promo-card-large.component';
import { UiCardFoodComponent } from './ui-card-food/ui-card-food.component';
import { UiRestaurantCardComponent } from './ui-restaurant-card/ui-restaurant-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [
    UiFoodHeaderComponent,
    UiFoodH1Component,
    UiFoodLargeH1Component,
    UiFoodBtnActionComponent,
    UiFoodPromoCardLargeComponent,
    UiCardFoodComponent,
    UiRestaurantCardComponent,
  ],
  imports: [CommonModule, MatCardModule, MatIconModule],
  exports: [
    UiFoodHeaderComponent,
    UiFoodH1Component,
    UiFoodLargeH1Component,
    UiCardFoodComponent,
    UiRestaurantCardComponent,
  ],
})
export class SharedModule {}
