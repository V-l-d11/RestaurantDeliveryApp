import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { RestaurantCustomer } from 'src/app/models/api/responses/Restaurant-response';
import {
  getAllRestaurants,
  getSingleRestaurant,
  serachRestaurants,
} from '../../store+/actions/restaurant-actions';
import {
  getAllRestaurantsSelector,
  getLoading,
  getSearchRestaurants,
} from '../../store+/selectors/restaurant-selectors';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-food-restaurant-search-page',
  templateUrl: './food-restaurant-search-page.component.html',
  styleUrls: ['./food-restaurant-search-page.component.scss'],
})
export class FoodRestaurantSearchPageComponent implements OnInit {
  query: string = '';
  allRestaurants$!: Observable<RestaurantCustomer[] | null>;
  searchRestaurants$!: Observable<RestaurantCustomer[] | null>;

  constructor(
    private store$: Store,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.store$.dispatch(getAllRestaurants());
    this.allRestaurants$ = this.store$.select(getAllRestaurantsSelector);
    this.searchRestaurants$ = this.store$.select(getSearchRestaurants);
  }

  redirectToRestaurant(id: number) {
    this.store$.dispatch(getSingleRestaurant({ id }));
    this.router.navigate([`foodapp/RestaurantSearch/restaurant/${id}`]);
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
