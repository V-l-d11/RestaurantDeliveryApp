import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  getAllFood,
  searchFood,
} from '../../store+/actions/food-search-actions';
import { Observable } from 'rxjs';
import { getSearchData } from '../../store+/selectors/food-search-selectors';
import { getFoodCategoryAll } from 'src/app/home-food-page/+store/actions/home-page-actions';
import { Category } from 'src/app/models/baseModals/category';
import { getCtaegoriesFoodHome } from 'src/app/home-food-page/+store/selectors/home-page-selectors';
import { SerachFoodDeilogModalsService } from '../../services/dilog-services/serach-food-deilog-modals.service';
import { FoodSearchResponse } from 'src/app/models/api/responses/Food-search-response';
import { Router } from '@angular/router';
import { FoodRestaurantDialogModalsService } from 'src/app/food-restaurants-page/core/services/dialog-modal/food-restaurant-dialog-modals.service';

@Component({
  selector: 'app-food-search-page',
  templateUrl: './food-search-page.component.html',
  styleUrls: ['./food-search-page.component.scss'],
})
export class FoodSearchPageComponent implements OnInit {
  query!: string;
  result$!: Observable<any[]>;
  foodCategories!: Observable<Category[]>;
  currentPage: number = 1;
  pageSize: number = 8;

  constructor(
    private store$: Store,
    private router: Router,
    private dialogRestaurantModal: FoodRestaurantDialogModalsService
  ) {
    this.store$.dispatch(getFoodCategoryAll());
    this.loadPage(this.currentPage, this.pageSize);
  }

  loadPage(page: number, size: number) {
    this.store$.dispatch(getAllFood({ page, size }));
  }

  onInputChange(): void {
    if (this.query.length >= 5) {
      console.log(this.query, 'Thie query');
      this.store$.dispatch(searchFood({ name: this.query }));
    } else if (this.query.length <= 4) {
      this.loadPage(this.currentPage, this.pageSize);
    }
  }

  redirectToRetaurant(restaurantId: number) {
    this.router.navigate([
      `foodapp/RestaurantSearch/restaurant/${restaurantId}`,
    ]);
  }

  openDateilsFoodCard(item: FoodSearchResponse) {
    //   this.dialogRestaurantModal.foodDetailsOpen({
    //     item
    //  })
  }

  changePage(newPage: number): void {
    this.currentPage = newPage;
    this.loadPage(this.currentPage, this.pageSize);
  }

  ngOnInit(): void {
    this.foodCategories = this.store$.select(getCtaegoriesFoodHome);
    this.result$ = this.store$.select(getSearchData);
  }
}
