import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FoodSearchResponse } from 'src/app/models/api/responses/Food-search-response';

@Component({
  selector: 'app-ui-card-food',
  templateUrl: './ui-card-food.component.html',
  styleUrls: ['./ui-card-food.component.scss'],
})
export class UiCardFoodComponent implements OnInit {
  @Input() result!: FoodSearchResponse;
  @Output() openDetailsFoodCard: EventEmitter<FoodSearchResponse> =
    new EventEmitter<FoodSearchResponse>();
  @Output() restaurantRoutingHndler: EventEmitter<number> =
    new EventEmitter<number>();
  isShowCategory: boolean = false;
  likeColor: string = 'black';

  constructor() {}

  openDetailsFoodCardHandler(): void {
    this.openDetailsFoodCard.emit(this.result);
  }

  routingHandler(restaurantId: number) {
    this.restaurantRoutingHndler.emit(restaurantId);
  }

  opeIngridModal() {}

  toggleLike() {
    if (this.likeColor === 'black') {
      this.likeColor = 'red';
    } else {
      this.likeColor = 'black';
    }
  }

  ngOnInit(): void {
    console.log(this.result, 'Tgis result');
  }
}
