import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  clearCard,
  findUserCard,
} from '../../store+/actions/user-panel-actions';
import { getCard } from '../../store+/selectors/user-panel-selectors';
import { Observable } from 'rxjs';
import { Card } from 'src/app/models/api/responses/add-card-item-users-response';

@Component({
  selector: 'app-basket-user',
  templateUrl: './basket-user.component.html',
  styleUrls: ['./basket-user.component.scss'],
})
export class BasketUserComponent implements OnInit {
  card$!: Observable<Card | null>;
  constructor(private store$: Store) {
    this.store$.dispatch(findUserCard());
  }

  clearAllBascet() {
    this.store$.dispatch(clearCard());
  }

  ngOnInit(): void {
    this.card$ = this.store$.select(getCard);
  }
}
