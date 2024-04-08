import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ui-food-large-h1',
  templateUrl: './ui-food-large-h1.component.html',
  styleUrls: ['./ui-food-large-h1.component.scss'],
})
export class UiFoodLargeH1Component {
  @Input()
  text!: string;
}
