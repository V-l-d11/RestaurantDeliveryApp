import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Address } from 'src/app/models/api/responses/Restaurant-response';
import { getAddresses } from '../../store+/selectors/user-profiles-selectors';

@Component({
  selector: 'app-addresses-users',
  templateUrl: './addresses-users.component.html',
  styleUrls: ['./addresses-users.component.scss'],
})
export class AddressesUsersComponent implements OnInit {
  adresses$!: Observable<Address[] | null | undefined>;

  constructor(private store$: Store) {}

  ngOnInit(): void {
    this.adresses$ = this.store$.select(getAddresses);
  }
}
