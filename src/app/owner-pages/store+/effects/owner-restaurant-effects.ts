import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { OwnerRestaurantService } from '../../services/api-owner-restaurant-service/owner-restaurant.service';
import * as ownerRestaurantActions from './../actions/actions-owner-retsuarant';
import { catchError, map, mergeMap, of, switchMap, tap } from 'rxjs';
import { findRestaurant } from './../actions/actions-owner-retsuarant';

@Injectable({
  providedIn: 'root',
})
export class OwnerRestaurantEffects {
  constructor(
    private actions$: Actions,
    private store$: Store,
    private ownerRestaurantService: OwnerRestaurantService
  ) {}

  updateRestaurantInfo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ownerRestaurantActions.updateOwerRestaurant),
      tap((el) => console.log(el.item, 'HAHAHAHHAHAHHAHHA_________')),
      switchMap((action) =>
        this.ownerRestaurantService.updateRestaurant(action.item).pipe(
          mergeMap((response) => [
            ownerRestaurantActions.updateOwnerRestaurantSucess({
              item: response,
            }),
          ]),
          tap(() => {
            this.store$.dispatch(ownerRestaurantActions.findRestaurant());
          }),
          catchError((error) =>
            of(
              ownerRestaurantActions.updateOwnerRestaurantFailed({
                serverError: error.message,
              })
            )
          )
        )
      )
    )
  );
}
