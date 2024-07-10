import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { GetRestaurantIngridCategoryResponse } from 'src/app/models/api/responses/admin/get-restaurnat-igrid-category-response';
import { IngridientsItem } from 'src/app/models/api/responses/ingridients-category-from-restaurant';
import {
  getRestaurantIngridCategory,
  loadIngridientsAll,
} from 'src/app/owner-pages/store+/actions/actions-owner-ingridients';
import {
  findRestaurant,
  getOwnerRestaurant,
} from 'src/app/owner-pages/store+/actions/actions-owner-retsuarant';
import { getRestaurantId } from 'src/app/owner-pages/store+/selectors/owner-dashboard-selectors';
import {
  getIngridCategory,
  getIngridients,
} from 'src/app/owner-pages/store+/selectors/owner-ingridients-selectors';
import { OwnerDialogAddIngridCategoryComponent } from '../../components/owner-dialog-add-ingrid-category/owner-dialog-add-ingrid-category.component';
import { OwnerDialogServiceService } from 'src/app/owner-pages/services/owner-dialog-service/owner-dialog-service.service';

@Component({
  selector: 'app-owner-ingridients-page',
  templateUrl: './owner-ingridients-page.component.html',
  styleUrls: ['./owner-ingridients-page.component.scss'],
})
export class OwnerIngridientsPageComponent implements OnInit {
  ingridCategories$!: Observable<GetRestaurantIngridCategoryResponse[]>;
  ingridItems$!: Observable<IngridientsItem[]>;
  restaurantId$!: Observable<number | null>;
  id!: number;
  constructor(
    private store$: Store,
    private dialog: OwnerDialogServiceService
  ) {
    this.store$.dispatch(loadIngridientsAll());
  }

  addIngridientCategory() {
    this.dialog.addIngridientCategory();
  }

  ngOnInit(): void {
    this.ingridCategories$ = this.store$.select(getIngridCategory);
    this.ingridItems$ = this.store$.select(getIngridients);
    this.ingridCategories$.subscribe((el) =>
      console.log(el, 'Element Categoriest')
    );
  }
}
