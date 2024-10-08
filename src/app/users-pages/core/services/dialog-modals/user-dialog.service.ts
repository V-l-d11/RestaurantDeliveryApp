import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserOderCreateDialogModalComponent } from '../../components/user-oder-create-dialog-modal/user-oder-create-dialog-modal.component';
import { LogoutModalComponent } from '../../components/logout-modal/logout-modal.component';
import { UserTimeStatusModalComponent } from '../../components/user-time-status-modal/user-time-status-modal.component';
import { UserPaymentModalComponent } from '../../components/user-payment-modal/user-payment-modal.component';

@Injectable({
  providedIn: 'root',
})
export class UserDialogService {
  constructor(private dialog: MatDialog) {}

  public OderCreateModal = (data: any) => {
    const dialogRef = this.dialog.open(UserOderCreateDialogModalComponent, {
      width: '40%',
      height: '70vh',
      hasBackdrop: true,
      closeOnNavigation: true,
      disableClose: false,
      data,
    });
  };

  public waitTimeStatusModal = () => {
    const dialogRef = this.dialog.open(UserTimeStatusModalComponent, {
      width: '50%',
      height: '20vh',
      hasBackdrop: true,
      closeOnNavigation: true,
      disableClose: false,
    });
  };

  public paymentModal = () => {
    const dialogRef = this.dialog.open(UserPaymentModalComponent, {
      width: '50%',
      height: '20vh',
      hasBackdrop: true,
      closeOnNavigation: true,
      disableClose: false,
    });
  };

  public logoutModal = () => {
    const dialogRef = this.dialog.open(LogoutModalComponent, {
      width: '40%',
      height: '30vh',
      hasBackdrop: true,
      disableClose: false,
    });
  };
}
