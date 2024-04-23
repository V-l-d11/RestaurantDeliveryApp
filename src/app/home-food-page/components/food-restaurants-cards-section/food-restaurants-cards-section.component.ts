import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-food-restaurants-cards-section',
  templateUrl: './food-restaurants-cards-section.component.html',
  styleUrls: ['./food-restaurants-cards-section.component.scss'],
})
export class FoodRestaurantsCardsSectionComponent {
  constructor(private router: Router) {}

  redirectToRestaurantSearchPage() {
    this.router.navigate(['/foodapp/RestaurantSearch']);
  }
}
