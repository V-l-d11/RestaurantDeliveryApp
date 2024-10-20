import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { getOderHistory } from '../../store+/actions/oder-user-actions';
import { Observable } from 'rxjs';
import { OderResponse } from 'src/app/models/api/responses/oder-response';
import { getOderList } from '../../store+/selectors/oder-users-selectors';

@Component({
  selector: 'app-my-oders-users',
  templateUrl: './my-oders-users.component.html',
  styleUrls: ['./my-oders-users.component.scss'],
})
export class MyOdersUsersComponent implements OnInit {
  oderList$!: Observable<OderResponse[] | null>;

  constructor(private router: Router, private store$: Store) {
    this.store$.dispatch(getOderHistory());
  }

  ngOnInit(): void {
    this.oderList$ = this.store$.select(getOderList);
    this.oderList$.subscribe((el) => console.log(el, 'Element'));
  }
}
