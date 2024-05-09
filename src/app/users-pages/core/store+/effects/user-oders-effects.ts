import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { UsersPanelApiService } from '../../services/api-users/users-panel-api.service';
import * as OderActions from './../actions/oder-user-actions';
import { catchError, map, of, switchMap } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class OdersUserEffects {
  constructor(
    private actions$: Actions,
    private store$: Store,
    private userPanelService: UsersPanelApiService
  ) {}

  loadOdersHistory$ = createEffect(() =>
    this.actions$.pipe(
      ofType(OderActions.getOderHistory),
      switchMap(() =>
        this.userPanelService.getOderhistory().pipe(
          map((response) =>
            OderActions.getOderHistorySucess({ obj: response })
          ),
          catchError((error) =>
            of(OderActions.getOderHistoryFailed({ serverError: error.massage }))
          )
        )
      )
    )
  );
}
