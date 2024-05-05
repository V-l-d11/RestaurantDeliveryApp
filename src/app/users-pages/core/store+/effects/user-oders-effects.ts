import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { UsersPanelApiService } from '../../services/api-users/users-panel-api.service';

@Injectable({
  providedIn: 'root',
})
export class OdersUserEffects {
  constructor(
    actions$: Actions,
    private store$: Store,
    private userPanelService: UsersPanelApiService
  ) {}
}
