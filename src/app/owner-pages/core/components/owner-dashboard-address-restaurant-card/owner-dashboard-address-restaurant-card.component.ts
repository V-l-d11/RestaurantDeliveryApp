import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AddressBase } from 'src/app/models/baseModals/address';

@Component({
  selector: 'app-owner-dashboard-address-restaurant-card',
  templateUrl: './owner-dashboard-address-restaurant-card.component.html',
  styleUrls: ['./owner-dashboard-address-restaurant-card.component.scss'],
})
export class OwnerDashboardAddressRestaurantCardComponent implements OnInit {
  @Input()
  address!: Observable<AddressBase | null>;

  ngOnInit(): void {
    this.address.subscribe((el) => console.log(el, 'ELEMENT FJFF'));
  }
}
