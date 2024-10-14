import { EventEmitter, Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import { OwnerDialogAskingComponent } from '../../core/components/owner-dialog-asking/owner-dialog-asking.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { OwnerDialogCrateCategoryFoodComponent } from '../../core/components/owner-dialog-crate-category-food/owner-dialog-crate-category-food.component';
import { OwnerDialogAddIngridCategoryComponent } from '../../core/components/owner-dialog-add-ingrid-category/owner-dialog-add-ingrid-category.component';
import { OwnerDialogAddIngridientItemComponent } from '../../core/components/owner-dialog-add-ingridient-item/owner-dialog-add-ingridient-item.component';
import { OwnerEditOderModalComponent } from '../../core/components/owner-edit-oder-modal/owner-edit-oder-modal.component';
import { OwnerOderBase } from 'src/app/models/baseModals/owerOderBase';
import { updateOderStatusData } from 'src/app/models/baseModals/oderDataStatus';
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

  public createCategoryDilog = () => {
    const dialogRef = this.dialog.open(OwnerDialogCrateCategoryFoodComponent, {
      width: '30%',
      height: '30vh',
      hasBackdrop: true,
      closeOnNavigation: true,
      disableClose: false,
    });
    return dialogRef.afterClosed();
  };

  public addIngridientCategory = () => {
    const dialogRef = this.dialog.open(OwnerDialogAddIngridCategoryComponent, {
      width: '60%',
      height: '100vh',
      hasBackdrop: true,
      closeOnNavigation: true,
      disableClose: false,
    });
  };

  public addIngridientItem = () => {
    const dialogRef = this.dialog.open(OwnerDialogAddIngridientItemComponent, {
      width: '50%',
      height: '50vh',
      hasBackdrop: true,
      closeOnNavigation: true,
      disableClose: false,
    });
  };

  openSnackBar(massage: string, duration: number = 1000) {
    this.snackBar.open(massage, 'Close', {
      duration: duration,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  }

  openEditOdersModelAndHandleResult(
    data: OwnerOderBase,
    clickUpdateOderStatus: EventEmitter<updateOderStatusData>
  ) {
    const dialogRef = this.dialog.open(OwnerEditOderModalComponent, {
      width: '50%',
      height: '40vh',
      data: data,
      hasBackdrop: true,
      closeOnNavigation: true,
      disableClose: false,
    });

    dialogRef.afterClosed().subscribe((newStatus: string | undefined) => {
      if (newStatus) {
        const updateData: updateOderStatusData = {
          oderId: data.id,
          oderStatus: newStatus,
        };
        clickUpdateOderStatus.emit(updateData);
      }
    });
  }
}
