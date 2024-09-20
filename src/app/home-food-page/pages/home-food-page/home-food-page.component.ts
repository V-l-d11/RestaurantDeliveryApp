import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getFoodCategoryAll } from '../../+store/actions/home-page-actions';
import { Observable } from 'rxjs';
import { Category } from 'src/app/models/baseModals/category';
import { getCtaegoriesFoodHome } from 'src/app/home-food-page/+store/selectors/home-page-selectors';

@Component({
  selector: 'app-home-food-page',
  templateUrl: './home-food-page.component.html',
  styleUrls: ['./home-food-page.component.scss'],
})
export class HomeFoodPageComponent implements OnInit {
  categories!: Observable<Category[]>;

  constructor(private store$: Store) {
    this.store$.dispatch(getFoodCategoryAll());
  }

  ngOnInit(): void {
    this.categories = this.store$.select(getCtaegoriesFoodHome);
  }
}
