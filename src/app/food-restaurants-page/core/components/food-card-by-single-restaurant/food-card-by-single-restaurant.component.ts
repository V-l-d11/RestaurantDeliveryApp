import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FoodSearchResponse } from 'src/app/models/api/responses/Food-search-response';

@Component({
  selector: 'app-food-card-by-single-restaurant',
  templateUrl: './food-card-by-single-restaurant.component.html',
  styleUrls: ['./food-card-by-single-restaurant.component.scss'],
})
export class FoodCardBySingleRestaurantComponent {
  @Input()
  foodItem!: FoodSearchResponse;
  @Output() goToDetails = new EventEmitter<FoodSearchResponse>();

  openModalDetails(item: FoodSearchResponse) {
    this.goToDetails.emit(item);
  }
}
