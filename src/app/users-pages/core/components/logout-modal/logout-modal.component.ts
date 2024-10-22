import { Component, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { logout } from 'src/app/auth/core/store/actions/food-auth-actions';

@Component({
  selector: 'app-logout-modal',
  templateUrl: './logout-modal.component.html',
  styleUrls: ['./logout-modal.component.scss'],
})
export class LogoutModalComponent {
  constructor(
    private $store: Store,
    private dialogRef: MatDialogRef<LogoutModalComponent>
  ) {}
  logout = () => {
    this.$store.dispatch(logout());
    this.dialogRef.close();
  };

  close = () => this.dialogRef.close();
}
