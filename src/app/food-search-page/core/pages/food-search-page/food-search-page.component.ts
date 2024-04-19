import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { searchFood } from '../../store+/actions/food-search-actions';
import { Observable } from 'rxjs';
import { getSearchData } from '../../store+/selectors/food-search-selectors';

@Component({
  selector: 'app-food-search-page',
  templateUrl: './food-search-page.component.html',
  styleUrls: ['./food-search-page.component.scss'],
})
export class FoodSearchPageComponent implements OnInit {
  query!: string;
  result$!: Observable<any[]>;

  constructor(private store$: Store) {}

  onInputChange(): void {
    if (this.query.length >= 5) {
      console.log(this.query, 'Thie query');
      this.store$.dispatch(searchFood({ name: this.query }));
    }
  }

  ngOnInit(): void {
    this.result$ = this.store$.select(getSearchData);
  }
}
