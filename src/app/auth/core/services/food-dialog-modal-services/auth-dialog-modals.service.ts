import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FoodAuthLoginDialogComponent } from '../../components/food-auth-login-dialog/food-auth-login-dialog.component';
import { FoodAuthRegisterDialogComponent } from '../../components/food-auth-register-dialog/food-auth-register-dialog.component';

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
      width: '40%',
      height: '42vh',
      hasBackdrop: true,
      closeOnNavigation: true,
      disableClose: true,
    });
  };

  public RegisterModaldialog = () => {
    const dialogRef = this.dialog.open(FoodAuthRegisterDialogComponent, {
      width: '40%',
      height: '50vh',
      hasBackdrop: true,
      closeOnNavigation: true,
      disableClose: true,
    });
  };
}
