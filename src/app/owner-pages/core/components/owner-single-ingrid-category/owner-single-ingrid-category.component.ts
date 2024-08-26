import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { GetRestaurantIngridCategoryResponse } from 'src/app/models/api/responses/admin/get-restaurnat-igrid-category-response';
import {
  deleteIngridientCategory,
  deleteIngridientItem,
} from 'src/app/owner-pages/store+/actions/actions-owner-ingridients';

@Component({
  selector: 'app-owner-single-ingrid-category',
  templateUrl: './owner-single-ingrid-category.component.html',
  styleUrls: ['./owner-single-ingrid-category.component.scss'],
})
export class OwnerSingleIngridCategoryComponent implements OnInit {
  panelOpenState = true;
  @Input()
  category!: GetRestaurantIngridCategoryResponse;

  constructor(private store$: Store) {}

  deleteIngridientItem(id: number) {
    this.store$.dispatch(deleteIngridientItem({ id }));
  }

  deleteIngridientCategory(id: number) {
    this.store$.dispatch(deleteIngridientCategory({ id }));
  }

  ngOnInit(): void {
    console.log(this.category.ingredients, 'Ingridients Indsgfsdf');
  }
}
