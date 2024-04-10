import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ui-food-btn-action',
  templateUrl: './ui-food-btn-action.component.html',
  styleUrls: ['./ui-food-btn-action.component.scss'],
})
export class UiFoodBtnActionComponent {
  @Input()
  text!: string;

  @Input()
  bgColor: string = '#FF4B4B';

  @Input()
  public name: any = 'primary-action';
}
