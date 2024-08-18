import { Component, Input } from '@angular/core';
import { OwnerFoodBase } from 'src/app/models/baseModals/foodOwnerBase';

@Component({
  selector: 'app-owner-menu-singl-card',
  templateUrl: './owner-menu-singl-card.component.html',
  styleUrls: ['./owner-menu-singl-card.component.scss'],
})
export class OwnerMenuSinglCardComponent {
  @Input()
  food!: OwnerFoodBase;
}
