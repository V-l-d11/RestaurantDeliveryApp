import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiFoodHeaderComponent } from './ui-food-header/ui-food-header.component';

@NgModule({
  declarations: [UiFoodHeaderComponent],
  imports: [CommonModule],
  exports: [UiFoodHeaderComponent],
})
export class SharedModule {}
