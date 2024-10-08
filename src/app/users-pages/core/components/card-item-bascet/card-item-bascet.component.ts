import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  clearCard,
  removeCardItem,
  updateCardItem,
} from '../../store+/actions/user-panel-actions';

@Component({
  selector: 'app-card-item-bascet',
  templateUrl: './card-item-bascet.component.html',
  styleUrls: ['./card-item-bascet.component.scss'],
})
export class CardItemBascetComponent implements OnInit {
  @Input()
  item: any;
  quantity!: number;

  constructor(private store$: Store) {}

  removeCard() {
    this.store$.dispatch(removeCardItem({ id: this.item.id }));
  }

  increment() {
    this.quantity++;
    this.store$.dispatch(
      updateCardItem({
        req: {
          cardItemId: this.item.id,
          quantity: this.quantity,
        },
      })
    );
  }
  decrement() {
    this.quantity--;
    console.log(this.item.id, 'Hello browser');
    if (this.quantity < 0) {
      this.store$.dispatch(removeCardItem({ id: this.item.id }));
    } else {
      this.store$.dispatch(
        updateCardItem({
          req: {
            cardItemId: this.item.id,
            quantity: this.quantity,
          },
        })
      );
    }
  }

  ngOnInit(): void {
    console.log(this.item, 'ITEM BASCET');
    this.quantity = this.item.quantity;
  }
}
