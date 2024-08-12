import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { IngridientsItem } from 'src/app/models/api/responses/ingridients-category-from-restaurant';
import { Category } from 'src/app/models/baseModals/category';
import { getOwnerCategoryFood } from 'src/app/owner-pages/store+/actions/actions-owner-category-food';
import { loadIngridientsAll } from 'src/app/owner-pages/store+/actions/actions-owner-ingridients';
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

  favoriteSeason!: string;
  seasons: string[] = ['Yes', 'No'];

  constructor(private store$: Store, private router: Router) {
    this.store$.dispatch(findRestaurant());
    this.store$.dispatch(getOwnerCategoryFood());
    this.store$.dispatch(loadIngridientsAll());
  }

  ngOnInit(): void {
    this.categories$ = this.store$.select(getCategoriesFood);
    this.ingridItems$ = this.store$.select(getIngridients);
    this.ingridItems$.subscribe((el) => console.log(el, 'Element'));
    this.restaurantId$ = this.store$.select(getRestaurantId);

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
      category: new FormControl('', [Validators.required]),
      images: new FormArray([], [Validators.required]),
      restaurantid: new FormControl(null, [Validators.required]),
      vegetarian: new FormControl(false, [Validators.required]),
      seasional: new FormControl(false, [Validators.required]),
      ingridients: new FormControl('', [Validators.required]),
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
        console.log(imagesArray.value, 'Images Array');
      };
      reader.readAsDataURL(file);
    }
  }

  removeImage(index: number): void {
    const imagesArray = this.form.get('images') as FormArray;
    imagesArray.removeAt(index);
    console.log(imagesArray.value, 'Images Array after removal');
  }

  getCategoryNameById(categoryId: number): string {
    let categoryName = '';
    this.categories$
      .pipe(
        map((categories) => categories.find((cat) => cat.id === categoryId))
      )
      .subscribe((category) => (categoryName = category ? category.name : ''));
    return categoryName;
  }

  getIngridientNameById(ingridientId: number): string {
    let ingridientName = '';
    this.ingridItems$
      .pipe(
        map((ingridients) => ingridients.find((ing) => ing.id === ingridientId))
      )
      .subscribe(
        (ingridient) => (ingridientName = ingridient ? ingridient.name : '')
      );
    return ingridientName;
  }

  ngSubmit() {
    if (this.form.valid) {
    }
  }
}
