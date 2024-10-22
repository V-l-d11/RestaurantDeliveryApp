import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OwnerOderEventsService {
  private orderCreatedSource = new Subject<{
    restaurantId: number;
    orderStatus?: string;
  }>();
  private orderCreateSource = new Subject<void>();
  orderCreated$ = this.orderCreateSource.asObservable();

  notifyOrderCreated() {
    this.orderCreateSource.next();
  }
}
