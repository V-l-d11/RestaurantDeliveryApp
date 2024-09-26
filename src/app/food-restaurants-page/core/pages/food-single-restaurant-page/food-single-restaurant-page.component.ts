import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { RestaurantCustomer } from 'src/app/models/api/responses/Restaurant-response';
import {
  selectFilterFoodByRestaurant,
  getSingleRestaurant,
} from '../../store+/selectors/restaurant-selectors';
import { ActivatedRoute } from '@angular/router';
import {
  getFilterFoodSingleRestaurant,
  loadSingleRestaurant,
} from '../../store+/actions/restaurant-actions';
import { Category } from 'src/app/models/baseModals/category';
import { getFoodCategoryAll } from 'src/app/home-food-page/+store/actions/home-page-actions';
import { getCtaegoriesFoodHome } from 'src/app/home-food-page/+store/selectors/home-page-selectors';
import { FoodSearchResponse } from 'src/app/models/api/responses/Food-search-response';
import { FoodRestaurantDialogModalsService } from '../../services/dialog-modal/food-restaurant-dialog-modals.service';
import { FiltersCustomerSingleRestaurantFood } from 'src/app/models/api/requests/filtersCustomerSingleRestaurantFood';

@Component({
  selector: 'app-food-single-restaurant-page',
  templateUrl: './food-single-restaurant-page.component.html',
  styleUrls: ['./food-single-restaurant-page.component.scss'],
})
export class FoodSingleRestaurantPageComponent implements OnInit, OnDestroy {
  restaurant!: Observable<RestaurantCustomer | null>;
  categoriesFood$!: Observable<Category[]>;
  filterItems$!: Observable<FoodSearchResponse[] | null>;
  queryFoodName!: string;
  selectedCategory: string | null = null;
  private filterIntemsSubscription: Subscription | undefined;
  id!: number;
  filters!: FiltersCustomerSingleRestaurantFood;

  vegetarian: boolean | null = null;
  seasonal: boolean | null = null;
  nonveg: boolean | null = null;
  foodCategory: string = '';

  constructor(
    private store$: Store,
    private route: ActivatedRoute,
    private dialogService: FoodRestaurantDialogModalsService
  ) {
    this.store$.dispatch(getFoodCategoryAll());
  }

  onFilterSelected(filterValue: string) {
    if (filterValue === 'vegeterian') {
      this.vegetarian = !this.vegetarian;
    } else if (filterValue === 'seasonal') {
      this.seasonal = !this.seasonal;
    } else if (filterValue === 'nonveg') {
      this.nonveg = !this.nonveg;
    }
    console.log(filterValue, 'Filter Value');
    console.log(this.vegetarian, 'This Vegt');
    this.applyFilters();
  }

  onCategorySelected(category: string) {
    this.foodCategory = category;
    console.log(category);
    this.applyFilters();
  }

  applyFilters() {
    console.log(this.vegetarian, 'Vageterian');
    console.log(this.nonveg, 'Non VEg');
    const filters: FiltersCustomerSingleRestaurantFood = {
      restaurantId: this.id,
      vegetarian: this.vegetarian || undefined,
      seasonal: this.seasonal || undefined,
      nonveg: this.nonveg || undefined,
      foodCategory: this.foodCategory,
    };
    this.store$.dispatch(getFilterFoodSingleRestaurant({ obj: filters }));
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
      this.applyFilters();
      this.store$.dispatch(loadSingleRestaurant({ id: this.id }));
    });
    this.categoriesFood$ = this.store$.select(getCtaegoriesFoodHome);
    this.restaurant = this.store$.select(getSingleRestaurant);

    this.filterItems$ = this.store$.select(selectFilterFoodByRestaurant);
    this.filterItems$.subscribe((el) => console.log(el));
    this.filterIntemsSubscription = this.filterItems$.subscribe();
  }

  ngOnDestroy(): void {
    if (this.filterIntemsSubscription) {
      this.filterIntemsSubscription.unsubscribe();
    }
  }
}
