import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { OwnerOdersService } from '../../services/api-owner-oders-service/owner-oders.service';
import { OwnerDialogServiceService } from '../../services/owner-dialog-service/owner-dialog-service.service';
import * as odersActions from './../actions/actions-owner-oders';
import * as restaurantActions from './../actions/actions-owner-retsuarant';
import { catchError, map, of, switchMap } from 'rxjs';

@Injectable()
export class OwnerOdersEffects {
  constructor(
    private actions$: Actions,
    private store$: Store,
    private oderService: OwnerOdersService,
    private dialog: OwnerDialogServiceService
  ) {}

  loadOdersHistory$ = createEffect(() =>
    this.actions$.pipe(
      ofType(odersActions.getOwnerHistoryOders),
      switchMap((action) =>
        this.oderService
          .getOderHistory(action.restaurantId, action.oderStatus)
          .pipe(
            map((response) =>
              odersActions.getOwnerHistoryOdersSucess({
                items: response.content,
              })
            ),
            catchError((error) =>
              of(
                odersActions.getOwnerHistoryFailed({
                  serverError: error.massage,
                })
              )
            )
          )
      )
    )
  );
}
