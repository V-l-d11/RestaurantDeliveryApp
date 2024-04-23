import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-image-section-food',
  templateUrl: './main-image-section-food.component.html',
  styleUrls: ['./main-image-section-food.component.scss'],
})
export class MainImageSectionFoodComponent {
  largeText: string = "Don't Wait. Oder Now!";
  text: string = 'Are You Hungry?';

  constructor(private router: Router) {}

  goToSearchFood() {
    console.log('Hello');
    this.router.navigate(['/foodapp/FoodDeliverSearch']);
  }
}
