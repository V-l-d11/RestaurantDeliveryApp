import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-food-restaurant-search-page',
  templateUrl: './food-restaurant-search-page.component.html',
  styleUrls: ['./food-restaurant-search-page.component.scss'],
})
export class FoodRestaurantSearchPageComponent implements OnInit {
  query!: string;

  constructor() {}

  onInputChange(): void {
    if (this.query.length >= 5) {
      console.log(this.query, 'Thie query');
    }
  }

  ngOnInit(): void {}
}
