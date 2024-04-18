import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ui-card-food',
  templateUrl: './ui-card-food.component.html',
  styleUrls: ['./ui-card-food.component.scss'],
})
export class UiCardFoodComponent {
  isShowCategory: boolean = false;
  likeColor: string = 'black';

  toggleLike() {
    if (this.likeColor === 'black') {
      this.likeColor = 'red';
    } else {
      this.likeColor = 'black';
    }
  }
}
