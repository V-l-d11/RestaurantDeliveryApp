import { Component, Input, OnInit } from '@angular/core';
import { FoodSearchResponse } from 'src/app/models/api/responses/Food-search-response';

@Component({
  selector: 'app-ui-card-food',
  templateUrl: './ui-card-food.component.html',
  styleUrls: ['./ui-card-food.component.scss'],
})
export class UiCardFoodComponent implements OnInit {
  @Input() result!: FoodSearchResponse;
  isShowCategory: boolean = false;
  likeColor: string = 'black';

  constructor() {
    console.log(this.result, 'This result');
  }

  toggleLike() {
    if (this.likeColor === 'black') {
      this.likeColor = 'red';
    } else {
      this.likeColor = 'black';
    }
  }

  ngOnInit(): void {
    console.log(this.result, 'Result Ng OnInit');
  }
}
