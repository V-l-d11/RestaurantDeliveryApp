import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Category } from 'src/app/models/baseModals/category';
import { OwnerDialogServiceService } from 'src/app/owner-pages/services/owner-dialog-service/owner-dialog-service.service';
import { getOwnerCategoryFood } from 'src/app/owner-pages/store+/actions/actions-owner-category-food';
import { getCategoriesFood } from 'src/app/owner-pages/store+/selectors/owner-category-food-selectors';

@Component({
  selector: 'app-owner-food-category',
  templateUrl: './owner-food-category.component.html',
  styleUrls: ['./owner-food-category.component.scss'],
})
export class OwnerFoodCategoryComponent implements OnInit {
  categories$!: Observable<Category[]>;

  constructor(
    private store$: Store,
    private dialog: OwnerDialogServiceService
  ) {
    this.store$.dispatch(getOwnerCategoryFood());
  }

  createCategory() {
    this.dialog.createCategoryDilog();
  }

  ngOnInit(): void {
    this.categories$ = this.store$.select(getCategoriesFood);
  }
}
