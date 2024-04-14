import { Component } from '@angular/core';
import { AuthDialogModalsService } from 'src/app/auth/core/services/food-dialog-modal-services/auth-dialog-modals.service';

@Component({
  selector: 'app-ui-food-header',
  templateUrl: './ui-food-header.component.html',
  styleUrls: ['./ui-food-header.component.scss'],
})
export class UiFoodHeaderComponent {
  mainText: string = 'FoodDeliv';

  constructor(private loginDialogModalService: AuthDialogModalsService) {}

  openDialogModal() {
    this.loginDialogModalService.loginModaldialog();
  }
}
