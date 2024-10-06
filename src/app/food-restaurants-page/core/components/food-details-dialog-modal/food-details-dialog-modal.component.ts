import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { getIngridientsCategoriesRestaurant } from '../../store+/actions/restaurant-actions';
import { getIngridientsCategory } from '../../store+/selectors/restaurant-selectors';
import { Observable } from 'rxjs';
import { ingridientsCategory } from 'src/app/models/api/responses/ingridients-category-from-restaurant';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FoodSearchResponse } from 'src/app/models/api/responses/Food-search-response';
import { CombineFoodDialog } from 'src/app/models/combineInterfaces/combineDialogFood';
import {
  getAccessToken,
  isAuth,
} from 'src/app/auth/core/store/selectors/food-auth-selectors';
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
    private dialogRef: MatDialogRef<FoodDetailsDialogModalComponent>,
    private loaginService: AuthDialogModalsService,
    private router: Router
  ) {
    this.store$.dispatch(
      getIngridientsCategoriesRestaurant({ id: this.data.id })
    );
    console.log(data, 'Data');
  }
  updateQuantity(change: number) {
    const currentQuantity = this.form.get('quantity')!.value;
    const newQuantity = currentQuantity + change;
    if (newQuantity >= 1) {
      this.form.get('quantity')!.setValue(newQuantity);
      this.updateTotalPrice();
    }
  }

  updateTotalPrice() {
    let basePrice = this.data.item.price * this.form.get('quantity')!.value;
    const selectedIngredients = this.form.get('ingredients')!.value;
    if (Array.isArray(selectedIngredients)) {
      selectedIngredients.forEach((ing: any) => {
        basePrice += ing.price;
      });
    }
    this.totalprice = basePrice;
  }

  handleCheckboxChange(event: any, ingredient: any) {
    const isChecked = event?.checked;
    if (isChecked === undefined) {
      return;
    }
    const ingredientsArray = this.form.get('ingredients') as FormControl;
    const updatedIngredient = { ...ingredient, selected: isChecked };
    if (isChecked) {
      if (
        !ingredientsArray.value.some((ing: any) => ing.name === ingredient.name)
      ) {
        ingredientsArray.setValue([
          ...ingredientsArray.value,
          updatedIngredient,
        ]);
      }
    } else {
      ingredientsArray.setValue(
        ingredientsArray.value.filter(
          (ing: any) => ing.name !== ingredient.name
        )
      );
    }
    this.updateTotalPrice();
  }

  addToBascet() {
    console.log(this.form.value, 'This is form is isisi sis i');
    this.isAuth = this.store$.select(isAuth);
    this.isAuth.subscribe((isAuthenticated) => {
      this.authentificate = isAuthenticated;
    });
    if (this.authentificate) {
      this.dialogRef.close();
      console.log(this.form.value);
      this.store$.dispatch(addItemToCard({ item: this.form.value }));
      this.router.navigate(['/foodapp/userDashboard']);
    } else {
      localStorage.setItem('pendingCartItem', JSON.stringify(this.form.value));
      this.dialogRef.close();
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
