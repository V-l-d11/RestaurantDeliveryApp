import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { RestaurantCustomer } from 'src/app/models/api/responses/Restaurant-response';
import {
  getRestaurantCategories,
  getSingleRestaurant,
} from '../../store+/selectors/restaurant-selectors';
import { RestaurantCategory } from 'src/app/models/api/responses/restaurant-category';
import { ActivatedRoute } from '@angular/router';
import { loadSingleRestaurant } from '../../store+/actions/restaurant-actions';

@Component({
  selector: 'app-food-single-restaurant-page',
  templateUrl: './food-single-restaurant-page.component.html',
  styleUrls: ['./food-single-restaurant-page.component.scss'],
})
export class FoodSingleRestaurantPageComponent implements OnInit {
  restaurant!: Observable<RestaurantCustomer | null>;
  id!: number;
  constructor(private store$: Store, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = +params['id'];
      this.store$.dispatch(loadSingleRestaurant({ id: this.id }));
    });

    this.restaurant = this.store$.select(getSingleRestaurant);
  }
}
