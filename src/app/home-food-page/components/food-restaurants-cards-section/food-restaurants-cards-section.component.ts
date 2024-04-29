import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getAllRestaurants } from 'src/app/food-restaurants-page/core/store+/actions/restaurant-actions';
import { getAllRestaurantsSelector } from 'src/app/food-restaurants-page/core/store+/selectors/restaurant-selectors';
import { RestaurantCustomer } from 'src/app/models/api/responses/Restaurant-response';

@Component({
  selector: 'app-food-restaurants-cards-section',
  templateUrl: './food-restaurants-cards-section.component.html',
  styleUrls: ['./food-restaurants-cards-section.component.scss'],
})
export class FoodRestaurantsCardsSectionComponent implements OnInit {
  restaurants$: Observable<RestaurantCustomer[] | null> = this.store$.select(
    getAllRestaurantsSelector
  );
  displaedRestaurants: RestaurantCustomer[] | undefined = [];

  constructor(private router: Router, private store$: Store) {
    this.store$.dispatch(getAllRestaurants());
  }

  redirectToRestaurantSearchPage() {
    this.router.navigate(['/foodapp/RestaurantSearch']);
  }

  ngOnInit(): void {
    this.restaurants$.subscribe((restaurants) => {
      this.displaedRestaurants = restaurants?.slice(0, 4);
    });
  }
}
