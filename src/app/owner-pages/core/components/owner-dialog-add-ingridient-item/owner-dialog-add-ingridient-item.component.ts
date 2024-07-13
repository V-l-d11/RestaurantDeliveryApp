import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { GetRestaurantIngridCategoryResponse } from 'src/app/models/api/responses/admin/get-restaurnat-igrid-category-response';
import { getIngridCategory } from 'src/app/owner-pages/store+/selectors/owner-ingridients-selectors';

interface Food {
  value: string;
  viewValue: string;
}

interface Car {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-owner-dialog-add-ingridient-item',
  templateUrl: './owner-dialog-add-ingridient-item.component.html',
  styleUrls: ['./owner-dialog-add-ingridient-item.component.scss'],
})
export class OwnerDialogAddIngridientItemComponent {
  selectedValue: string = 'Ingridient Category';
  selectedCar!: string;
  categories!: Observable<GetRestaurantIngridCategoryResponse[]>;

  constructor(private store$: Store) {
    this.categories = this.store$.select(getIngridCategory);
  }

  foods: Food[] = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' },
  ];

  cars: Car[] = [
    { value: 'volvo', viewValue: 'Volvo' },
    { value: 'saab', viewValue: 'Saab' },
    { value: 'mercedes', viewValue: 'Mercedes' },
  ];
}
