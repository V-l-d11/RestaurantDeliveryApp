import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FoodDetailsDialogModalComponent } from '../../components/food-details-dialog-modal/food-details-dialog-modal.component';
import { FoodSearchResponse } from 'src/app/models/api/responses/Food-search-response';
import { CombineFoodDialog } from 'src/app/models/combineInterfaces/combineDialogFood';

@Injectable({
  providedIn: 'root',
})
export class FoodRestaurantDialogModalsService {
  private dialogRef!: MatDialogRef<any>;
  constructor(private dialog: MatDialog) {}

  public foodDetailsOpen = (data: CombineFoodDialog) => {
    const dialogRef = this.dialog.open(FoodDetailsDialogModalComponent, {
      width: '70%',
      height: '100vh',
      hasBackdrop: true,
      closeOnNavigation: true,
      disableClose: false,
      data: data,
      panelClass: 'custom-dialog-container',
    });
  };
}
