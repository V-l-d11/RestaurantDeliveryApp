import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiFoodHeaderComponent } from './ui-food-header/ui-food-header.component';
import { UiFoodH1Component } from './ui-food-h1/ui-food-h1.component';
import { UiFoodLargeH1Component } from './ui-food-large-h1/ui-food-large-h1.component';
import { UiFoodBtnActionComponent } from './ui-food-btn-action/ui-food-btn-action.component';
import { UiFoodPromoCardLargeComponent } from './ui-food-promo-card-large/ui-food-promo-card-large.component';

@NgModule({
  declarations: [
    UiFoodHeaderComponent,
    UiFoodH1Component,
    UiFoodLargeH1Component,
    UiFoodBtnActionComponent,
    UiFoodPromoCardLargeComponent,
  ],
  imports: [CommonModule],
  exports: [UiFoodHeaderComponent, UiFoodH1Component, UiFoodLargeH1Component],
})
export class SharedModule {}
