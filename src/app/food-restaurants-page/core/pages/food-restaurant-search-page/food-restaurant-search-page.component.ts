import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { RestaurantCustomer } from 'src/app/models/api/responses/Restaurant-response';
import {
  getAllRestaurants,
  serachRestaurants,
} from '../../store+/actions/restaurant-actions';
import {
  getAllRestaurantsSelector,
  getLoading,
  getSearchRestaurants,
} from '../../store+/selectors/restaurant-selectors';

@Component({
  selector: 'app-food-restaurant-search-page',
  templateUrl: './food-restaurant-search-page.component.html',
  styleUrls: ['./food-restaurant-search-page.component.scss'],
})
export class FoodRestaurantSearchPageComponent implements OnInit {
  query: string = '';
  allRestaurants$!: Observable<RestaurantCustomer[] | null>;
  searchRestaurants$!: Observable<RestaurantCustomer[] | null>;

  constructor(private store$: Store) {}

  ngOnInit(): void {
    this.store$.dispatch(getAllRestaurants());
    this.allRestaurants$ = this.store$.select(getAllRestaurantsSelector);
    this.searchRestaurants$ = this.store$.select(getSearchRestaurants);
  }

  onInputChange(): void {
    if (this.query.length >= 5) {
      this.store$.dispatch(serachRestaurants({ query: this.query }));
    } else {
      // this.store$.dispatch(getAllRestaurants());
      this.allRestaurants$ = this.store$.pipe(
        select(getAllRestaurantsSelector)
      );
    }
  }

  onQueryChange(query: string): void {
    if (query === '') {
      console.log('Hello');

      this.allRestaurants$ = this.store$.select(getAllRestaurantsSelector);
    }
  }
}
