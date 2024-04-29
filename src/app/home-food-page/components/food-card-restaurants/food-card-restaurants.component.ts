import { Component, Input } from '@angular/core';
import { RestaurantCustomer } from 'src/app/models/api/responses/Restaurant-response';

@Component({
  selector: 'app-food-card-restaurants',
  templateUrl: './food-card-restaurants.component.html',
  styleUrls: ['./food-card-restaurants.component.scss'],
})
export class FoodCardRestaurantsComponent {
  @Input()
  data!: RestaurantCustomer;
}
