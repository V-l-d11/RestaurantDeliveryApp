import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { debounceTime, distinctUntilChanged, filter, Observable } from 'rxjs';
import {
  getAllCuisineTypes,
  getRestaurantsByFilters,
  loadSingleRestaurant,
} from '../../store+/actions/restaurant-actions';

import { ActivatedRoute, Router } from '@angular/router';
import { RestaurantListByFiltersRequest } from 'src/app/models/api/requests/restaurants-list-by-filters-customer';
import { FormControl } from '@angular/forms';
import { RestaurantCustomer } from 'src/app/models/api/responses/Restaurant-response';
import {
  getAllRestaurantsSelector,
  selectAllCuisineTypes,
} from '../../store+/selectors/restaurant-selectors';

@Component({
  selector: 'app-food-restaurant-search-page',
  templateUrl: './food-restaurant-search-page.component.html',
  styleUrls: ['./food-restaurant-search-page.component.scss'],
})
export class FoodRestaurantSearchPageComponent implements OnInit {
  query: string = '';
  cuisineTypesFilter$!: Observable<string[]>;
  city!: string;
  filters!: RestaurantListByFiltersRequest;
  searchInputRestaurantName = new FormControl('');
  searchInputFoodName = new FormControl('');
  restaurantList$!: Observable<RestaurantCustomer[]>;
  isOpen: boolean = false;

  constructor(
    private store$: Store,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.store$.dispatch(getAllCuisineTypes());
  }

  ngOnInit(): void {
    this.filters = {
      city: '',
      restaurantName: '',
      cuisineType: '',
      foodName: '',
      isOpen: false,
    };

    const storedCity = localStorage.getItem('city');
    if (storedCity) {
      this.city = storedCity;
      this.filters.city = this.city;
      this.store$.dispatch(getRestaurantsByFilters({ obj: this.filters }));
    }

    this.route.queryParams.subscribe((params) => {
      this.city = params['city'];
      console.log(this.city, 'City');
      if (this.city) {
        console.log(this.city, 'City x2');
        this.filters.city = this.city;
        this.store$.dispatch(getRestaurantsByFilters({ obj: this.filters }));
      }
    });
    this.cuisineTypesFilter$ = this.store$.select(selectAllCuisineTypes);

    this.setupSearchInput(this.searchInputRestaurantName, 'restaurantName');
    this.setupSearchInput(this.searchInputFoodName, 'foodName');

    this.restaurantList$ = this.store$.select(getAllRestaurantsSelector);
  }

  setupSearchInput(
    control: FormControl,
    filterKey: keyof RestaurantListByFiltersRequest
  ) {
    control.valueChanges
      .pipe(
        filter((value: string | null): value is string => value !== null),
        debounceTime(500),
        distinctUntilChanged()
      )
      .subscribe((value) => {
        if (value.length === 0) {
          this.filters = {
            ...this.filters,
            [filterKey]: '',
          };
        } else {
          this.filters = {
            ...this.filters,
            [filterKey]: value,
          };
        }

        this.store$.dispatch(getRestaurantsByFilters({ obj: this.filters }));
      });
  }

  onCategoryClik(name: string) {
    if (name === 'All') {
      this.filters = { ...this.filters, city: this.city, cuisineType: '' };
      this.store$.dispatch(getRestaurantsByFilters({ obj: this.filters }));
    } else {
      this.filters = { ...this.filters, city: this.city, cuisineType: name };
      console.log(this.filters, 'This Filters');
      this.store$.dispatch(getRestaurantsByFilters({ obj: this.filters }));
    }
  }

  onOpenFilterClick() {
    this.isOpen = !this.isOpen;
    this.filters = { ...this.filters, isOpen: this.isOpen };
    this.store$.dispatch(getRestaurantsByFilters({ obj: this.filters }));
  }
  redirectToHomePage() {
    this.router.navigate(['foodapp']);
  }

  redirectToRestaurant(id: number) {
    this.store$.dispatch(loadSingleRestaurant({ id }));
    this.router.navigate([`foodapp/RestaurantSearch/restaurant/${id}`]);
  }
}
