import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { RestaurantCategory } from 'src/app/models/api/responses/restaurant-category';
import { getRestaurantCategories } from '../../store+/selectors/restaurant-selectors';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-restaurant-filter-section',
  templateUrl: './restaurant-filter-section.component.html',
  styleUrls: ['./restaurant-filter-section.component.scss'],
})
export class RestaurantFilterSectionComponent implements OnInit {
  id!: number;
  categories!: Observable<RestaurantCategory[] | null>;

  constructor(private store$: Store) {}

  ngOnInit(): void {
    this.categories = this.store$.select(getRestaurantCategories);
  }
}
