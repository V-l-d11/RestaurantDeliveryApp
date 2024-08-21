import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { GetRestaurantIngridCategoryResponse } from 'src/app/models/api/responses/admin/get-restaurnat-igrid-category-response';
import { createOwnerIngridItem } from 'src/app/owner-pages/store+/actions/actions-owner-ingridients';
import { getRestaurantId } from 'src/app/owner-pages/store+/selectors/owner-dashboard-selectors';
import { getIngridCategory } from 'src/app/owner-pages/store+/selectors/owner-ingridients-selectors';

@Component({
  selector: 'app-owner-dialog-add-ingridient-item',
  templateUrl: './owner-dialog-add-ingridient-item.component.html',
  styleUrls: ['./owner-dialog-add-ingridient-item.component.scss'],
})
export class OwnerDialogAddIngridientItemComponent implements OnInit {
  form!: FormGroup;
  restaurantId$!: Observable<number>;
  categories!: Observable<GetRestaurantIngridCategoryResponse[]>;

  constructor(private store$: Store) {
    this.categories = this.store$.select(getIngridCategory);
    console.log('Hello world');
  }

  onSubmit() {
    if (this.form.valid) {
      this.store$.dispatch(createOwnerIngridItem({ item: this.form.value }));
    }
  }

  onCategoryChange(categoryId: string) {
    this.form.patchValue({ categoryId });
  }

  ngOnInit(): void {
    this.restaurantId$ = this.store$.select(getRestaurantId);

    this.form = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      categoryId: new FormControl(null, [Validators.required]),
      restaurantId: new FormControl(null, [Validators.required]),
      price: new FormControl(null, [Validators.required]),
    });

    // Подписка на restaurantId и обновление соответствующего поля формы
    this.restaurantId$.subscribe((el) => {
      this.form.patchValue({ restaurantId: el });
    });
  }
}
