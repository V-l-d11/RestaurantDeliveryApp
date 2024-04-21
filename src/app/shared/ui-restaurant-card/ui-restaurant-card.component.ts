import { Component, Input } from '@angular/core';
import { RestaurantCustomer } from 'src/app/models/api/responses/Restaurant-response';

@Component({
  selector: 'app-ui-restaurant-card',
  templateUrl: './ui-restaurant-card.component.html',
  styleUrls: ['./ui-restaurant-card.component.scss'],
})
export class UiRestaurantCardComponent {
  @Input() restaurant!: RestaurantCustomer;
}
