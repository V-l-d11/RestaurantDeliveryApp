import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserOderCreateDialogModalComponent } from '../../components/user-oder-create-dialog-modal/user-oder-create-dialog-modal.component';

@Injectable({
  providedIn: 'root',
})
export class UserDialogService {
  constructor(private dialog: MatDialog) {}

  public OderCreateModal = (data: any) => {
    const dialogRef = this.dialog.open(UserOderCreateDialogModalComponent, {
      width: '40%',
      height: '55vh',
      hasBackdrop: true,
      closeOnNavigation: true,
      disableClose: false,
      data,
    });
  };
}
