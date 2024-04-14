import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FoodAuthLoginDialogComponent } from '../../components/food-auth-login-dialog/food-auth-login-dialog.component';

@Injectable({
  providedIn: 'root',
})
export class AuthDialogModalsService {
  private dialogRef!: MatDialogRef<any>;

  constructor(private dialog: MatDialog) {}

  public setDialogRef(dialogRef: MatDialogRef<any>): void {
    this.dialogRef = dialogRef;
  }

  public loginModaldialog = () => {
    const dialogRef = this.dialog.open(FoodAuthLoginDialogComponent, {
      width: '50%',
      height: '40vh',
      hasBackdrop: true,
      closeOnNavigation: true,
      disableClose: true,
    });
  };
}
