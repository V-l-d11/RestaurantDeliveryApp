import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Category } from 'src/app/models/baseModals/category';
import { getOwnerCategoryFood } from 'src/app/owner-pages/store+/actions/actions-owner-category-food';
import { getCategoriesFood } from 'src/app/owner-pages/store+/selectors/owner-category-food-selectors';

@Component({
  selector: 'app-owner-menu',
  templateUrl: './owner-menu.component.html',
  styleUrls: ['./owner-menu.component.scss'],
})
export class OwnerMenuComponent implements OnInit {
  $categoriesFood!: Observable<Category[]>;

  constructor(private store$: Store) {
    this.store$.dispatch(getOwnerCategoryFood());
  }

  ngOnInit(): void {
    this.$categoriesFood = this.store$.select(getCategoriesFood);
    this.$categoriesFood.subscribe((el) => {
      console.log(el, 'Elements Menu');
    });
  }
}
