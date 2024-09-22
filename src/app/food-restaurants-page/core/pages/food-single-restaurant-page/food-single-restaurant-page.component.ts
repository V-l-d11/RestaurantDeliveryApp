import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { RestaurantCustomer } from 'src/app/models/api/responses/Restaurant-response';
import {
  getFilterRestaurantFoodRadio,
  getSingleRestaurant,
} from '../../store+/selectors/restaurant-selectors';
import { RestaurantCategory } from 'src/app/models/api/responses/restaurant-category';
import { ActivatedRoute } from '@angular/router';
import {
  getFilterFoodRadio,
  loadSingleRestaurant,
} from '../../store+/actions/restaurant-actions';
import { Category } from 'src/app/models/baseModals/category';
import { getFoodCategoryAll } from 'src/app/home-food-page/+store/actions/home-page-actions';
import { getCtaegoriesFoodHome } from 'src/app/home-food-page/+store/selectors/home-page-selectors';
import { FoodSearchResponse } from 'src/app/models/api/responses/Food-search-response';
import { FoodRestaurantDialogModalsService } from '../../services/dialog-modal/food-restaurant-dialog-modals.service';

@Component({
  selector: 'app-food-single-restaurant-page',
  templateUrl: './food-single-restaurant-page.component.html',
  styleUrls: ['./food-single-restaurant-page.component.scss'],
})
export class FoodSingleRestaurantPageComponent implements OnInit, OnDestroy {
  restaurant!: Observable<RestaurantCustomer | null>;
  categoriesFood$!: Observable<Category[]>;
  filterItems$!: Observable<FoodSearchResponse[] | null>;
  private filterIntemsSubscription: Subscription | undefined;
  id!: number;
  constructor(
    private store$: Store,
    private route: ActivatedRoute,
    private dialogService: FoodRestaurantDialogModalsService
  ) {
    this.store$.dispatch(getFoodCategoryAll());
  }

  onFilterSelected(filterValue: string) {}

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

  openDetailsFoodCard(item: FoodSearchResponse) {
    this.dialogService.foodDetailsOpen({
      item,
      id: this.id,
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = +params['id'];
      this.store$.dispatch(loadSingleRestaurant({ id: this.id }));
    });
    this.categoriesFood$ = this.store$.select(getCtaegoriesFoodHome);
    this.restaurant = this.store$.select(getSingleRestaurant);

    this.filterItems$ = this.store$.select(getFilterRestaurantFoodRadio);
    this.filterIntemsSubscription = this.filterItems$.subscribe();
  }

  ngOnDestroy(): void {
    if (this.filterIntemsSubscription) {
      this.filterIntemsSubscription.unsubscribe();
    }
  }
}
