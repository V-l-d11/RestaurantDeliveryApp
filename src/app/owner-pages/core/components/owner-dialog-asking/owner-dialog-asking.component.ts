import { Component, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-owner-dialog-asking',
  templateUrl: './owner-dialog-asking.component.html',
  styleUrls: ['./owner-dialog-asking.component.scss'],
})
export class OwnerDialogAskingComponent {
  constructor(public dialogRef: MatDialogRef<OwnerDialogAskingComponent>) {}

  confirm(confirm: boolean) {
    this.dialogRef.close(confirm);
  }
}
