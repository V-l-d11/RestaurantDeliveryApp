import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ui-food-promo-card-large',
  templateUrl: './ui-food-promo-card-large.component.html',
  styleUrls: ['./ui-food-promo-card-large.component.scss'],
})
export class UiFoodPromoCardLargeComponent {
  @Input() h1!: string;
  @Input() title!: string;
  @Input() span!: string;
}
