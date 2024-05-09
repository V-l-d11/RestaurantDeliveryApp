import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { UsersPanelApiService } from '../../services/api-users/users-panel-api.service';
import * as UserBascetActions from './../actions/user-panel-actions';
import { catchError, map, of, switchMap, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BascetEffects {
  constructor(
    private actions$: Actions,
    private store$: Store,
    private userPanelService: UsersPanelApiService
  ) {}

  loadAddItemToCard$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserBascetActions.addItemToCard),
      switchMap(({ item }) =>
        this.userPanelService.addCardItem(item).pipe(
          tap((item) => console.log('Item  Effect', item)),
          map((response) =>
            UserBascetActions.addItemToCardSucess({ obj: response })
          ),
          catchError((error) =>
            of(
              UserBascetActions.addItemToCardFailed({
                serverError: error.massage,
              })
            )
          )
        )
      )
    )
  );

  loadCard$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserBascetActions.findUserCard),
      switchMap(() =>
        this.userPanelService.findUserCard().pipe(
          map((response) =>
            UserBascetActions.findUserCardSucess({ obj: response })
          ),
          catchError((error) =>
            of(
              UserBascetActions.findUserCardFailed({
                serverError: error.massage,
              })
            )
          )
        )
      )
    )
  );

  clearCard$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserBascetActions.clearCard),
      switchMap(() =>
        this.userPanelService.clearCard().pipe(
          map((response) =>
            UserBascetActions.clearCardSucess({ obj: response })
          ),
          tap(() => this.store$.dispatch(UserBascetActions.findUserCard())),
          catchError((error) =>
            of(
              UserBascetActions.clearCardFailed({
                serverError: error.massage,
              })
            )
          )
        )
      )
    )
  );

  loadremoveCardItem$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserBascetActions.removeCardItem),
      switchMap(({ id }) =>
        this.userPanelService.removeCardItem(id).pipe(
          map((response) =>
            UserBascetActions.removeCardItemSucess({ obj: response })
          ),
          tap(() => this.store$.dispatch(UserBascetActions.findUserCard())),
          catchError((error) =>
            of(
              UserBascetActions.removeCardItemFailed({
                serverError: error.massage,
              })
            )
          )
        )
      )
    )
  );

  updateCardItem$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserBascetActions.updateCardItem),
      switchMap(({ req }) =>
        this.userPanelService.updateCardItemQuentity(req).pipe(
          map((response) =>
            UserBascetActions.addItemToCardSucess({ obj: response })
          ),
          tap(() => this.store$.dispatch(UserBascetActions.findUserCard())),
          catchError((error) =>
            of(
              UserBascetActions.updateCardItemFailed({
                serverError: error.massage,
              })
            )
          )
        )
      )
    )
  );
}
