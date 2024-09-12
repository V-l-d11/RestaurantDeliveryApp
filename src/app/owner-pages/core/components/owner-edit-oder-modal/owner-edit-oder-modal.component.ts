import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { OwnerOderBase } from 'src/app/models/baseModals/owerOderBase';
import { OwnerDialogServiceService } from 'src/app/owner-pages/services/owner-dialog-service/owner-dialog-service.service';

@Component({
  selector: 'app-owner-edit-oder-modal',
  templateUrl: './owner-edit-oder-modal.component.html',
  styleUrls: ['./owner-edit-oder-modal.component.scss'],
})
export class OwnerEditOderModalComponent {
  @Output() statusChange = new EventEmitter<string>();
  selectedStatus = '';
  statuses = ['PENDING', 'COMPLETED', 'CANCEL'];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: OwnerOderBase,
    private dialogRef: MatDialogRef<OwnerEditOderModalComponent>,
    private dialogService: OwnerDialogServiceService
  ) {}

  onStatusChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.selectedStatus = selectElement.value;
  }

  confirmChanges() {
    if (this.selectedStatus) {
      this.dialogRef.close(this.selectedStatus);
    }
  }
}
