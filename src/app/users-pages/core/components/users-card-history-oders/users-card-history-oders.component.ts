import { Component, Input } from '@angular/core';
import { OderResponse } from 'src/app/models/api/responses/oder-response';

@Component({
  selector: 'app-users-card-history-oders',
  templateUrl: './users-card-history-oders.component.html',
  styleUrls: ['./users-card-history-oders.component.scss'],
})
export class UsersCardHistoryOdersComponent {
  @Input()
  item!: OderResponse;
  showDetails = false;
}
