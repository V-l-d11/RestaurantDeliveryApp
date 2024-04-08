import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ui-food-h1',
  templateUrl: './ui-food-h1.component.html',
  styleUrls: ['./ui-food-h1.component.scss'],
})
export class UiFoodH1Component {
  @Input()
  public text!: string;
  @Input()
  color: string = '#ff7a00';
  @Input()
  fontWeight: string = 'normal';
}
