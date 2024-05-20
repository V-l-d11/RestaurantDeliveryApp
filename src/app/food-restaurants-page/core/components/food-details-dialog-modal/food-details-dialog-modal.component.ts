import { Component, Inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getIngridientsCategoriesRestaurant } from '../../store+/actions/restaurant-actions';
import { getIngridientsCategory } from '../../store+/selectors/restaurant-selectors';
import { Observable } from 'rxjs';
import { ingridientsCategory } from 'src/app/models/api/responses/ingridients-category-from-restaurant';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FoodSearchResponse } from 'src/app/models/api/responses/Food-search-response';
import { CombineFoodDialog } from 'src/app/models/combineInterfaces/combineDialogFood';
import { isAuth } from 'src/app/auth/core/store/selectors/food-auth-selectors';
import { AuthDialogModalsService } from 'src/app/auth/core/services/food-dialog-modal-services/auth-dialog-modals.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { addItemToCard } from 'src/app/users-pages/core/store+/actions/user-panel-actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-food-details-dialog-modal',
  templateUrl: './food-details-dialog-modal.component.html',
  styleUrls: ['./food-details-dialog-modal.component.scss'],
})
export class FoodDetailsDialogModalComponent implements OnInit {
  categories$!: Observable<ingridientsCategory[] | null>;
  ingridientsItems!: any[];
  totalprice: number = this.data.item.price;
  form!: FormGroup;
  isAuth!: Observable<any>;
  authentificate!: boolean;

  constructor(
    private store$: Store,
    @Inject(MAT_DIALOG_DATA) public data: CombineFoodDialog,
    private loaginService: AuthDialogModalsService,
    private router: Router
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
    const ingridentsArray = this.form.get('ingredients') as FormControl;
    if (event.target.checked) {
      ingridentsArray.value.push(ingredient.name);
      console.log(ingridentsArray, 'Ingridients');
    } else {
      const index = ingridentsArray.value.findIndex(
        (item: any) => item === ingredient
      );
      if (index !== -1) {
        ingridentsArray.value.splice(index, 1);
      }
    }
    ingridentsArray.markAsDirty();
    this.updateTotalPrice(ingredient, isChecked);
  }

  addToBascet() {
    this.isAuth = this.store$.select(isAuth);
    this.isAuth.subscribe((el) => (this.authentificate = el));
    const token = localStorage.getItem('token');
    if (token) {
      this.store$.dispatch(addItemToCard({ item: this.form.value }));
      this.router.navigate(['/foodapp/userDashboard']);
    } else {
      this.loaginService.loginModaldialog();
    }
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      foodId: new FormControl(this.data.item.id, [Validators.required]),
      quantity: new FormControl(1, Validators.required),
      ingredients: new FormControl([], Validators.required),
    });
    this.categories$ = this.store$.select(getIngridientsCategory);
  }
}
