import { Component, Input } from '@angular/core';
import { OwnerFoodBase } from 'src/app/models/baseModals/foodOwnerBase';

@Component({
  selector: 'app-owner-oders-min-card-food-ui',
  templateUrl: './owner-oders-min-card-food-ui.component.html',
  styleUrls: ['./owner-oders-min-card-food-ui.component.scss'],
})
export class OwnerOdersMinCardFoodUiComponent {
  @Input()
  food!: OwnerFoodBase;
}
