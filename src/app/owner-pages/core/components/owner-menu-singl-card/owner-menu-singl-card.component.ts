import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { OwnerFoodBase } from 'src/app/models/baseModals/foodOwnerBase';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

@Component({
  selector: 'app-owner-menu-singl-card',
  templateUrl: './owner-menu-singl-card.component.html',
  styleUrls: ['./owner-menu-singl-card.component.scss'],
  animations: [
    trigger('slideDown', [
      state('void', style({ height: '40px', opacity: 0, overflow: 'hidden' })),
      state('*', style({ height: '*', opacity: 1, overflow: 'hidden' })),
      transition('void <=> *', animate('300ms ease-in-out')),
    ]),
  ],
})
export class OwnerMenuSinglCardComponent {
  @Input()
  food!: OwnerFoodBase;
  @Output()
  clickAvailStatus = new EventEmitter<number>();
  @Output()
  deleteItem = new EventEmitter<number>();

  isInfoVisible: boolean = false;

  deleteMenuItem(foodId: number) {
    this.deleteItem.emit(foodId);
  }

  updateStatus(foodId: number) {
    this.clickAvailStatus.emit(foodId);
  }

  toggleInfo() {
    this.isInfoVisible = !this.isInfoVisible;
  }
}
