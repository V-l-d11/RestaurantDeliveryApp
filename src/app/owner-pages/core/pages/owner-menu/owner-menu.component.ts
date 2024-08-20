import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { OwnerFoodFilterRequest } from 'src/app/models/api/requests/admin/food-filter-request';
import { Category } from 'src/app/models/baseModals/category';
import { OwnerFoodBase } from 'src/app/models/baseModals/foodOwnerBase';
import { getOwnerCategoryFood } from 'src/app/owner-pages/store+/actions/actions-owner-category-food';
import {
  getOwnerFoodFilter,
  updateFoodAvailableStatus,
} from 'src/app/owner-pages/store+/actions/actions-owner-manu';
import { findRestaurant } from 'src/app/owner-pages/store+/actions/actions-owner-retsuarant';
import { getCategoriesFood } from 'src/app/owner-pages/store+/selectors/owner-category-food-selectors';
import { getRestaurantId } from 'src/app/owner-pages/store+/selectors/owner-dashboard-selectors';
import { getFilterFood } from 'src/app/owner-pages/store+/selectors/owner-menu-food-selectors';

@Component({
  selector: 'app-owner-menu',
  templateUrl: './owner-menu.component.html',
  styleUrls: ['./owner-menu.component.scss'],
})
export class OwnerMenuComponent implements OnInit {
  $categoriesFood!: Observable<Category[]>;
  arr: Array<string> = ['Non Vegetarian', 'Seasonal', 'Vegetarian', 'All'];
  favoriteSeason!: string;
  showFilters: boolean = false;
  restuarnatId$!: number;
  selectedCategory: string | null = null;
  foodArr!: Observable<OwnerFoodBase[]>;

  constructor(private store$: Store, private router: Router) {
    this.store$.dispatch(getOwnerCategoryFood());
    this.store$.dispatch(findRestaurant());
  }

  addItemRedirect() {
    this.router.navigate(['/foodapp/owner/addItem']);
  }

  ngOnInit(): void {
    this.store$.select(getRestaurantId).subscribe((id) => {
      console.log(id, '____0000___');
      this.restuarnatId$ = id;
      this.loadInitialFoodItems();
    });
    this.$categoriesFood = this.store$.select(getCategoriesFood);
    this.foodArr = this.store$.select(getFilterFood);
  }

  loadInitialFoodItems(): void {
    console.log('Hello');
    this.store$.dispatch(
      getOwnerFoodFilter({
        restaurantId: this.restuarnatId$,
        filters: [],
      })
    );
  }

  onSelectCategory(category: string | null): void {
    this.selectedCategory = category;
    this.dispatchFoodItems();
  }

  toggleFilters(): void {
    this.showFilters = !this.showFilters;
  }
  onFilterChange(): void {
    this.dispatchFoodItems();
  }

  dispatchFoodItems(): void {
    const filters = this.getFiltersFromSelection();
    this.store$.dispatch(
      getOwnerFoodFilter({
        restaurantId: this.restuarnatId$,
        filters: filters,
      })
    );
  }

  getFiltersFromSelection(): OwnerFoodFilterRequest[] {
    const selectedFilters: OwnerFoodFilterRequest[] = [];

    if (this.favoriteSeason === 'Vegetarian') {
      selectedFilters.push(OwnerFoodFilterRequest.Vegetarian);
    } else if (this.favoriteSeason === 'Seasonal') {
      selectedFilters.push(OwnerFoodFilterRequest.Seasonal);
    } else if (this.favoriteSeason === 'Non Vegetarian') {
      selectedFilters.push(OwnerFoodFilterRequest.NonVegetarian);
    }

    return selectedFilters;
  }

  onUpdateStatusFood(foodId: number): void {
    this.store$.dispatch(updateFoodAvailableStatus({ foodId }));
  }
}
