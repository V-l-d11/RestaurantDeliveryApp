import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import { OwnerDialogAskingComponent } from '../../core/components/owner-dialog-asking/owner-dialog-asking.component';
import { MatSnackBar } from '@angular/material/snack-bar';
@Injectable()
export class OwnerDialogServiceService {
  private dialogRef: MatDialogRef<any> | undefined;
  constructor(private dialog: MatDialog, private snackBar: MatSnackBar) {}

  public askingForEditRestaurantInfo = () => {
    const dialogRef = this.dialog.open(OwnerDialogAskingComponent, {
      width: '30%',
      height: '30vh',
      hasBackdrop: true,
      closeOnNavigation: true,
      disableClose: false,
    });
    return dialogRef.afterClosed();
  };

  openSnackBar(massage: string, duration: number = 1000) {
    this.snackBar.open(massage, 'Close', {
      duration: duration,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  }
}
