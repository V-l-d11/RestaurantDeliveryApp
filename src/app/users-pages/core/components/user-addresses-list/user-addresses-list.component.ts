import { Component, Input } from '@angular/core';
import { Adress } from 'src/app/models/api/responses/addres';

@Component({
  selector: 'app-user-addresses-list',
  templateUrl: './user-addresses-list.component.html',
  styleUrls: ['./user-addresses-list.component.scss'],
})
export class UserAddressesListComponent {
  @Input()
  item!: any;
}
