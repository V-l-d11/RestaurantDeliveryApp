import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable, take } from 'rxjs';
import { IngridientsItem } from 'src/app/models/api/responses/ingridients-category-from-restaurant';
import { Category } from 'src/app/models/baseModals/category';
import { IngridientsItemBase } from 'src/app/models/baseModals/ingridientsItemBase';
import { OwnerDialogServiceService } from 'src/app/owner-pages/services/owner-dialog-service/owner-dialog-service.service';
import { getOwnerCategoryFood } from 'src/app/owner-pages/store+/actions/actions-owner-category-food';
import {
  getRestaurantIngridients,
  loadIngridientsAll,
} from 'src/app/owner-pages/store+/actions/actions-owner-ingridients';
import { createOwnerFood } from 'src/app/owner-pages/store+/actions/actions-owner-manu';
import { findRestaurant } from 'src/app/owner-pages/store+/actions/actions-owner-retsuarant';
import { getCategoriesFood } from 'src/app/owner-pages/store+/selectors/owner-category-food-selectors';
import { getRestaurantId } from 'src/app/owner-pages/store+/selectors/owner-dashboard-selectors';
import { getIngridients } from 'src/app/owner-pages/store+/selectors/owner-ingridients-selectors';

@Component({
  selector: 'app-owner-add-menu-item-food',
  templateUrl: './owner-add-menu-item-food.component.html',
  styleUrls: ['./owner-add-menu-item-food.component.scss'],
})
export class OwnerAddMenuItemFoodComponent implements OnInit {
  form!: FormGroup;
  categories$!: Observable<Category[]>;
  ingridItems$!: Observable<IngridientsItem[]>;
  restaurantId$!: Observable<number>;
  categoriesList: Category[] = [];
  ingiridientsList: IngridientsItemBase[] = [];
  selectedCategories: Category[] = [];
  favoriteSeason!: string;
  seasons: string[] = ['Yes', 'No'];

  constructor(private store$: Store, private router: Router) {
    this.store$.dispatch(findRestaurant());
    this.store$.dispatch(getOwnerCategoryFood());
    this.restaurantId$ = this.store$.select(getRestaurantId);
  }

  ngOnInit(): void {
    this.categories$ = this.store$.select(getCategoriesFood);
    this.categories$.subscribe((el) => console.log(el, 'CCCCCCCCCC'));
    this.categories$.subscribe((el) => (this.categoriesList = el));
    this.ingridItems$ = this.store$.select(getIngridients);
    this.ingridItems$.subscribe((el) => (this.ingiridientsList = el));
    this.form = new FormGroup({
      name: new FormControl(null, [
        Validators.required,
        Validators.minLength(4),
      ]),
      description: new FormControl(null, [
        Validators.required,
        Validators.minLength(8),
      ]),
      price: new FormControl(0, [Validators.required]),
      category: new FormControl(null, [Validators.required]),
      images: new FormArray([], []),
      restaurantid: new FormControl(null, [Validators.required]),
      vegetarian: new FormControl(false, [Validators.required]),
      seasonal: new FormControl(false, [Validators.required]),
      ingredients: new FormControl(''),
    });
    this.restaurantId$.subscribe((el) => {
      this.store$.dispatch(getRestaurantIngridients({ restaurantId: el }));
      this.form.get('restaurantid')?.setValue(el);
    });
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    console.log(file, 'File');
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const imagesArray = this.form.get('images') as FormArray;
        imagesArray.push(new FormControl(reader.result as string));
      };
      reader.readAsDataURL(file);
    }
  }

  removeImage(index: number): void {
    const imagesArray = this.form.get('images') as FormArray;
    imagesArray.removeAt(index);
  }

  onCategorySelected(selectedCategoryId: number): void {
    const selectedCategory = this.categoriesList.find(
      (cat) => cat.id === selectedCategoryId
    );
    this.form.get('category')?.setValue(selectedCategory);
  }

  onIngridientsSelected(selectedIngridientsItem: number[]): void {
    const currentIngridients = this.form.get('category')?.value || [];
    const selectedIngridients = this.ingiridientsList.filter((cat) =>
      selectedIngridientsItem.includes(cat.id)
    );
    const hasDifference =
      selectedIngridients.length !== currentIngridients.length ||
      selectedIngridients.some(
        (cat) => !currentIngridients.find((c: any) => c.id === cat.id)
      );

    if (hasDifference) {
      this.form
        .get('ingredients')
        ?.setValue(selectedIngridients, { emitEvent: false });
    }
  }

  ngSubmit() {
    console.log(this.form.value, 'Fafter Click  Form ');
    if (this.form.valid) {
      console.log('Form is Valid');

      this.store$.dispatch(createOwnerFood({ item: this.form.value }));
      this.router.navigate(['/foodapp/owner/menu']);
    }
  }
}
