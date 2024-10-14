import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DetailsFoodCardModalComponent } from '../../components/details-food-card-modal/details-food-card-modal.component';
import { FoodSearchResponse } from 'src/app/models/api/responses/Food-search-response';

@Injectable({
  providedIn: 'root',
})
export class SerachFoodDeilogModalsService {
  constructor(private dialog: MatDialog) {}
}
