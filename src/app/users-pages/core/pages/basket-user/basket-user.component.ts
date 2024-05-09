import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  clearCard,
  findUserCard,
} from '../../store+/actions/user-panel-actions';
import { getCard } from '../../store+/selectors/user-panel-selectors';
import { Observable } from 'rxjs';
import { Card } from 'src/app/models/api/responses/add-card-item-users-response';
import { UserDialogService } from '../../services/dialog-modals/user-dialog.service';

@Component({
  selector: 'app-basket-user',
  templateUrl: './basket-user.component.html',
  styleUrls: ['./basket-user.component.scss'],
})
export class BasketUserComponent implements OnInit {
  card$!: Observable<Card | null>;
  elemnts: any;
  restaurantIds: number[] = [];
  constructor(private store$: Store, private dialog: UserDialogService) {
    this.store$.dispatch(findUserCard());
  }

  clearAllBascet() {
    this.store$.dispatch(clearCard());
  }

  createOder() {
    this.dialog.OderCreateModal(this.elemnts);
  }

  ngOnInit(): void {
    this.card$ = this.store$.select(getCard);

    console.log(this.restaurantIds, 'RestaurantIds');
  }
}
