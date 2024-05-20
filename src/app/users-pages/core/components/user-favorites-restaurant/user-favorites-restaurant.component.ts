import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { RestaurantDto } from 'src/app/models/api/responses/favorites';

@Component({
  selector: 'app-user-favorites-restaurant',
  templateUrl: './user-favorites-restaurant.component.html',
  styleUrls: ['./user-favorites-restaurant.component.scss'],
})
export class UserFavoritesRestaurantComponent {
  @Input()
  item!: RestaurantDto;

  constructor(private router: Router) {}

  goToSingRestaurant(restaurantId: number) {
    this.router.navigate([
      `/foodapp/RestaurantSearch/restaurant/${restaurantId}`,
    ]);
  }
}
