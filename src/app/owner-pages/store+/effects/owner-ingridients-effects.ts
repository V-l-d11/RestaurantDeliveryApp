import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { OwnerIngridientsService } from '../../services/api-owner-ingridients-service/owner-ingridients.service';
import { OwnerDialogServiceService } from '../../services/owner-dialog-service/owner-dialog-service.service';
import * as ingridientsActions from './../actions/actions-owner-ingridients';
import {
  catchError,
  filter,
  map,
  of,
  switchMap,
  tap,
  withLatestFrom,
} from 'rxjs';
import { findRestaurant } from '../actions/actions-owner-retsuarant';
import { getRestaurantId } from '../selectors/owner-dashboard-selectors';
import * as restaurantActions from './../actions/actions-owner-retsuarant';

@Injectable({
  providedIn: 'root',
})
export class OwnerIngridientsEffects {
  constructor(
    private actions$: Actions,
    private store$: Store,
    private ingridientsService: OwnerIngridientsService,
    private dialog: OwnerDialogServiceService
  ) {}

  loadAllIngridients$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ingridientsActions.loadIngridientsAll),
      tap(() => this.store$.dispatch(restaurantActions.findRestaurant())),
      switchMap(() =>
        this.store$.pipe(
          select(getRestaurantId),
          filter((restaurantId) => !!restaurantId),
          switchMap((restaurantId) =>
            this.ingridientsService
              .loadRestaurantIngridCategory(restaurantId)
              .pipe(
                map((response) =>
                  ingridientsActions.getRestaurantIgridCategorySucess({
                    items: response,
                  })
                ),
                catchError((error) =>
                  of(
                    ingridientsActions.getRestaurantIgridCategoryFailed({
                      serverError: error.message,
                    })
                  )
                )
              )
          )
        )
      )
    )
  );

  loadRestaurantIngridients$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ingridientsActions.getRestaurantIngridients),
      switchMap((actions) =>
        this.ingridientsService
          .loadRestaurantIngridients(actions.restaurantId)
          .pipe(
            map((response) =>
              ingridientsActions.getRestaurantIngridientsSucess({
                items: response,
              })
            ),
            catchError((error) =>
              of(
                ingridientsActions.getRestaurantIngridientsFailed({
                  serverError: error.massage,
                })
              )
            )
          )
      )
    )
  );

  loadRestaurantIngridCategory$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ingridientsActions.getRestaurantIngridCategory),
      tap((action) =>
        console.log(action.restaurantId, 'RESTAURANT ID IN EFFECT')
      ),
      switchMap((actions) =>
        this.ingridientsService
          .loadRestaurantIngridCategory(actions.restaurantId)
          .pipe(
            map((response) =>
              ingridientsActions.getRestaurantIgridCategorySucess({
                items: response,
              })
            ),
            catchError((error) =>
              of(
                ingridientsActions.getRestaurantIgridCategoryFailed({
                  serverError: error.massage,
                })
              )
            )
          )
      )
    )
  );

  createIngridientCategory$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ingridientsActions.createOwnerIngridCategoty),
      switchMap((actions) =>
        this.ingridientsService.createIngridientCategory(actions.item).pipe(
          map((response) =>
            ingridientsActions.createOwnerIngridCategorySucess({
              item: response,
            })
          ),
          catchError((error) =>
            of(
              ingridientsActions.createOwnerIngridCategoryFailed({
                serverError: error.massage,
              })
            )
          )
        )
      )
    )
  );

  createIngridientsItem = createEffect(() =>
    this.actions$.pipe(
      ofType(ingridientsActions.createOwnerIngridItem),
      switchMap((actions) =>
        this.ingridientsService.createIngridientItem(actions.item).pipe(
          map((response) =>
            ingridientsActions.createOwnerIngridItemSucess({ item: response })
          ),
          catchError((error) =>
            of(
              ingridientsActions.createOwnerIngirdItemFailed({
                serverError: error.massage,
              })
            )
          )
        )
      )
    )
  );

  deleteIngridientCategory$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ingridientsActions.deleteIngridientCategory),
      switchMap((action) =>
        this.ingridientsService.deleteIngridientCategory(action.id).pipe(
          map((response) =>
            ingridientsActions.deleteIngridientCategorySucess({ id: action.id })
          ),
          tap(() =>
            this.dialog.openSnackBar(
              'Ingridient Category deleted Sucessfully!',
              3000
            )
          ),
          catchError((error) =>
            of(
              ingridientsActions.deleteIngridientCategoryFailed({
                serverError: error.massage,
              })
            )
          )
        )
      )
    )
  );

  deleteIngridientItem$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ingridientsActions.deleteIngridientItem),
      switchMap((action) =>
        this.ingridientsService.deleteIngridientItem(action.id).pipe(
          map((response) =>
            ingridientsActions.deleteIngridientItemSucess({ id: action.id })
          ),
          tap(() =>
            this.dialog.openSnackBar(
              'Ingridient Item deleted Sucessfully',
              3000
            )
          ),
          catchError((error) =>
            of(
              ingridientsActions.deleteIngridientItemFailed({
                serverError: error.massage,
              })
            )
          )
        )
      )
    )
  );
}
