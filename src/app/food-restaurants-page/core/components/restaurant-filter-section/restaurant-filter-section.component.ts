import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, Subscription, map } from 'rxjs';
import { RestaurantCategory } from 'src/app/models/api/responses/restaurant-category';
import {
  getFilterRestaurantFoodRadio,
  getRestaurantCategories,
} from '../../store+/selectors/restaurant-selectors';
import { ActivatedRoute } from '@angular/router';
import { getFilterFoodRadio } from '../../store+/actions/restaurant-actions';
import { FoodSearchResponse } from 'src/app/models/api/responses/Food-search-response';
import { FoodRestaurantDialogModalsService } from '../../services/dialog-modal/food-restaurant-dialog-modals.service';
@Component({
  selector: 'app-restaurant-filter-section',
  templateUrl: './restaurant-filter-section.component.html',
  styleUrls: ['./restaurant-filter-section.component.scss'],
})
export class RestaurantFilterSectionComponent implements OnInit, OnDestroy {
  @Input() openDetailsFoodCardHandler!: (item: FoodSearchResponse) => void;
  @Input()
  id!: number;
  categories!: Observable<RestaurantCategory[] | null>;
  filterItems$!: Observable<FoodSearchResponse[] | null>;

  private filterIntemsSubscription: Subscription | undefined;

  constructor(
    private store$: Store,
    private dialogService: FoodRestaurantDialogModalsService
  ) {}

  openDetailsFoodCard(item: FoodSearchResponse) {
    this.dialogService.foodDetailsOpen({
      item,
      id: this.id,
    });
  }

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
    this.filterIntemsSubscription = this.filterItems$.subscribe();
  }

  ngOnDestroy(): void {
    if (this.filterIntemsSubscription) {
      this.filterIntemsSubscription.unsubscribe();
    }
  }
}
