import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { findUserCard } from '../../store+/actions/user-panel-actions';
import { getCard } from '../../store+/selectors/user-panel-selectors';

@Component({
  selector: 'app-basket-user',
  templateUrl: './basket-user.component.html',
  styleUrls: ['./basket-user.component.scss'],
})
export class BasketUserComponent implements OnInit {
  constructor(private store$: Store) {
    this.store$.dispatch(findUserCard());
  }

  ngOnInit(): void {
    this.store$.select(getCard);
  }
}
