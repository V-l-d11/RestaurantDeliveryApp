import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import { OwnerDialogAskingComponent } from '../../core/components/owner-dialog-asking/owner-dialog-asking.component';
@Injectable()
export class OwnerDialogServiceService {
  private dialogRef: MatDialogRef<any> | undefined;
  constructor(private dialog: MatDialog) {}

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
}
