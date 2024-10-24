import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { OwnerDashboardService } from '../../services/api-owner-dashboard-service/owner-dashboard.service';
import * as ownerRestaurantActions from './../actions/actions-owner-retsuarant';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import * as odersActions from './../actions/actions-owner-oders';
import * as customerActions from '../../../food-restaurants-page/core/store+/actions/restaurant-actions';

@Injectable({
  providedIn: 'root',
})
export class OwnerDashboardEffects {
  constructor(
    private actions$: Actions,
    private store$: Store,
    private ownerDashboardService: OwnerDashboardService
  ) {}

  loadOwnerRestaurant$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ownerRestaurantActions.findRestaurant),
      switchMap(() =>
        this.ownerDashboardService.findRestaurantByUserId().pipe(
          map((response) =>
            ownerRestaurantActions.getOwnerRestaurantSucess({ item: response })
          ),
          catchError((error) =>
            of(
              ownerRestaurantActions.findRestaurantFailed({
                serverError: error.massage,
              })
            )
          )
        )
      )
    )
  );

  updateRestaurantStatus$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ownerRestaurantActions.updateRestaurantStatus),
      switchMap((action) =>
        this.ownerDashboardService
          .updateRestaurantStatus(action.restaurantId)
          .pipe(
            map((response) =>
              ownerRestaurantActions.updateRestaurantStatusSucess({
                item: response,
              })
            ),
            tap(() => {
              this.store$.dispatch(ownerRestaurantActions.findRestaurant());
              this.store$.dispatch(customerActions.getAllRestaurants());
            }),
            catchError((error) =>
              of(
                ownerRestaurantActions.updateOwnerRestaurantFailed({
                  serverError: error.massage,
                })
              )
            )
          )
      )
    )
  );
}
