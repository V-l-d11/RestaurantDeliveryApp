import { Component, Input, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { RestaurantCategory } from 'src/app/models/api/responses/restaurant-category';
import {
  getFilterRestaurantFoodRadio,
  getRestaurantCategories,
} from '../../store+/selectors/restaurant-selectors';
import { ActivatedRoute } from '@angular/router';
import { getFilterFoodRadio } from '../../store+/actions/restaurant-actions';
import { FoodSearchResponse } from 'src/app/models/api/responses/Food-search-response';
@Component({
  selector: 'app-restaurant-filter-section',
  templateUrl: './restaurant-filter-section.component.html',
  styleUrls: ['./restaurant-filter-section.component.scss'],
})
export class RestaurantFilterSectionComponent implements OnInit {
  @Input()
  id!: number;
  categories!: Observable<RestaurantCategory[] | null>;
  filterItems$!: Observable<any[] | null>;

  constructor(private store$: Store) {}

  filterFood(
    vegeterian: boolean | null,
    seasonal: boolean | null,
    nonveg: boolean | null,
    foodCategory: string
  ) {
    const filteredVegeterian = vegeterian !== null ? vegeterian : undefined;
    const filteredSeasonal = seasonal !== null ? seasonal : undefined;
    const filteredNonveg = nonveg !== null ? nonveg : undefined;

    const restaurantId = this.id;
    this.store$.dispatch(
      getFilterFoodRadio({
        restaurantId,
        vegeterian: filteredVegeterian,
        seasonal: filteredSeasonal,
        nonveg: filteredNonveg,
        foodCategory: foodCategory,
      })
    );
  }

  ngOnInit(): void {
    this.categories = this.store$.select(getRestaurantCategories);
    this.filterItems$ = this.store$.select(getFilterRestaurantFoodRadio);
  }
}
