import { Component, Inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getIngridientsCategoriesRestaurant } from '../../store+/actions/restaurant-actions';
import { getIngridientsCategory } from '../../store+/selectors/restaurant-selectors';
import { Observable } from 'rxjs';
import { ingridientsCategory } from 'src/app/models/api/responses/ingridients-category-from-restaurant';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FoodSearchResponse } from 'src/app/models/api/responses/Food-search-response';
import { CombineFoodDialog } from 'src/app/models/combineInterfaces/combineDialogFood';

@Component({
  selector: 'app-food-details-dialog-modal',
  templateUrl: './food-details-dialog-modal.component.html',
  styleUrls: ['./food-details-dialog-modal.component.scss'],
})
export class FoodDetailsDialogModalComponent implements OnInit {
  categories$!: Observable<ingridientsCategory[] | null>;
  ingridientsItems!: any[];
  totalprice: number = this.data.item.price;

  constructor(
    private store$: Store,
    @Inject(MAT_DIALOG_DATA) public data: CombineFoodDialog
  ) {
    this.store$.dispatch(
      getIngridientsCategoriesRestaurant({ id: this.data.id })
    );
    console.log(data, 'Data');
  }

  updateTotalPrice(ingridient: any, isCheked: boolean) {
    if (isCheked) {
      this.totalprice += ingridient.price;
    } else {
      this.totalprice -= ingridient.price;
    }
  }

  handleCheckboxChange(event: any, ingredient: any) {
    const isChecked = event.target.checked;
    this.updateTotalPrice(ingredient, isChecked);
  }

  ngOnInit(): void {
    this.categories$ = this.store$.select(getIngridientsCategory);
    console.log(this.categories$, 'Categoriest');
  }
}
