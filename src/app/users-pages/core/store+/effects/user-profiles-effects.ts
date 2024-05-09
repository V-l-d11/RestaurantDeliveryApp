import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { UsersPanelApiService } from '../../services/api-users/users-panel-api.service';
import * as UserProfileActions from './../actions/user-panel-profiles';
import { catchError, map, of, switchMap, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserProfilesEffects {
  constructor(
    private actions$: Actions,
    private store$: Store,
    private userPanelService: UsersPanelApiService
  ) {}

  loadProfilesUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserProfileActions.userProfile),
      switchMap(() =>
        this.userPanelService.userPorfile().pipe(
          map((response) =>
            UserProfileActions.userProfileSucces({ obj: response })
          ),
          catchError((error) =>
            of(
              UserProfileActions.userProfileFailed({
                serverError: error.massage,
              })
            )
          )
        )
      )
    )
  );

  loadAddingFavorites$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserProfileActions.addToFavoritesRestaurant),
      switchMap(({ id }) =>
        this.userPanelService.addToFavoritesRestaurant(id).pipe(
          map((response) =>
            UserProfileActions.addToFavoritesRestaurantSucess({ obj: response })
          ),
          tap(() => this.store$.dispatch(UserProfileActions.userProfile())),
          catchError((error) =>
            of(
              UserProfileActions.addToFavoritesRestaurantFailed({
                serverError: error.massage,
              })
            )
          )
        )
      )
    )
  );
}
