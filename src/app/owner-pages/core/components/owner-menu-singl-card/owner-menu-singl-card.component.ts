import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { OwnerFoodBase } from 'src/app/models/baseModals/foodOwnerBase';

@Component({
  selector: 'app-owner-menu-singl-card',
  templateUrl: './owner-menu-singl-card.component.html',
  styleUrls: ['./owner-menu-singl-card.component.scss'],
})
export class OwnerMenuSinglCardComponent {
  @Input()
  food!: OwnerFoodBase;
  @Output()
  clickAvailStatus = new EventEmitter<number>();

  updateStatus(foodId: number) {
    this.clickAvailStatus.emit(foodId);
  }
}
