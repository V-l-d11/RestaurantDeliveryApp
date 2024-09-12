import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { updateOderStatusData } from 'src/app/models/baseModals/oderDataStatus';
import { OwnerOderBase } from 'src/app/models/baseModals/owerOderBase';
import { OwnerDialogServiceService } from 'src/app/owner-pages/services/owner-dialog-service/owner-dialog-service.service';

@Component({
  selector: 'app-owner-oders-details-table-line',
  templateUrl: './owner-oders-details-table-line.component.html',
  styleUrls: ['./owner-oders-details-table-line.component.scss'],
})
export class OwnerOdersDetailsTableLineComponent implements OnChanges {
  @Input()
  oderElement!: OwnerOderBase | null;

  @Output() clickUpdateOderStatus = new EventEmitter<updateOderStatusData>();

  constructor(private dialogService: OwnerDialogServiceService) {}

  ngOnChanges(changes: SimpleChanges): void {}

  clickUpdateStatus(data: updateOderStatusData) {
    this.clickUpdateOderStatus.emit(data);
  }

  changeInformationOder() {
    if (this.oderElement) {
      this.dialogService.openEditOdersModelAndHandleResult(
        this.oderElement,
        this.clickUpdateOderStatus
      );
    }
  }
}
