import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { getOderHistory } from '../../store+/actions/oder-user-actions';
import { OderResponse } from 'src/app/models/api/responses/oder-response';

@Component({
  selector: 'app-users-card-history-oders',
  templateUrl: './users-card-history-oders.component.html',
  styleUrls: ['./users-card-history-oders.component.scss'],
})
export class UsersCardHistoryOdersComponent implements OnInit {
  @Input()
  item!: OderResponse;
  showDetails = false;
  constructor() {}

  ngOnInit(): void {
    console.log(this.item, 'This is item');
  }
}
