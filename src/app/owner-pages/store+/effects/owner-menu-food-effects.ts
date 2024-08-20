import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { OwnerManuService } from '../../services/api-owner-menu-services/owner-manu.service';
import * as menuActions from './../actions/actions-owner-manu';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import * as restaurantActions from './../actions/actions-owner-retsuarant';
import { OwnerDialogServiceService } from '../../services/owner-dialog-service/owner-dialog-service.service';

@Injectable()
export class OwnerMenuFoodEffects {
  constructor(
    private actions$: Actions,
    private store$: Store,
    private ownerMenuFoodService: OwnerManuService,
    private dialog: OwnerDialogServiceService
  ) {}

  // loadMenuFoodFilter$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(menuActions.getOwnerFoodFilter),
  //     switchMap((action) =>
  //       this.ownerMenuFoodService
  //         .showMenuItems(action.restaurantId, action.filters)
  //         .pipe(
  //           map((response) =>
  //             menuActions.getOwnerFoodFilterSucess({ items: response })
  //           ),
  //           catchError((error) =>
  //             of(
  //               menuActions.getOwnerFoodFilterFailed({
  //                 serverError: error.massage,
  //               })
  //             )
  //           )
  //         )
  //     )
  //   )
  // );

  initiateFoodFilterAfterRestaurant$ = createEffect(() =>
    this.actions$.pipe(
      ofType(restaurantActions.getOwnerRestaurantSucess),
      switchMap((action) =>
        this.actions$.pipe(
          ofType(menuActions.getOwnerFoodFilter), // Слушаем запрос на фильтрацию еды
          switchMap((filterAction) =>
            this.ownerMenuFoodService
              .showMenuItems(action.item.id, filterAction.filters)
              .pipe(
                map((response) =>
                  menuActions.getOwnerFoodFilterSucess({ items: response })
                ),
                catchError((error) =>
                  of(
                    menuActions.getOwnerFoodFilterFailed({
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

  createFood$ = createEffect(() =>
    this.actions$.pipe(
      ofType(menuActions.createOwnerFood),
      switchMap((action) =>
        this.ownerMenuFoodService.createFood(action.item).pipe(
          map((response) =>
            menuActions.createOwnerFoodSucess({ item: response })
          ),
          tap(() => {
            this.dialog.openSnackBar('Food Sucessfyly added', 4000);
          }),
          catchError((error) =>
            of(
              menuActions.createOwnerFoodFailed({ serverError: error.massage })
            )
          )
        )
      )
    )
  );

  updateFoodStatusAvailable$ = createEffect(() =>
    this.actions$.pipe(
      ofType(menuActions.updateFoodAvailableStatus),
      switchMap((action) =>
        this.ownerMenuFoodService.updateFoodStatusAvailable(action.foodId).pipe(
          map(
            (response) =>
              menuActions.updateFoodAvailableStatusSucess({ item: response }),
            this.dialog.openSnackBar('Status Updated Sucessfully', 4000)
          ),
          catchError((error) =>
            of(
              menuActions.updateFoodAvailableStatusFailed({
                serverError: error.massage,
              })
            )
          )
        )
      )
    )
  );

  deletFood$ = createEffect(() =>
    this.actions$.pipe(
      ofType(menuActions.deletedFood),
      switchMap((action) =>
        this.ownerMenuFoodService.deletFood(action.foodId).pipe(
          map((response) =>
            menuActions.deletedFoodSucess({ foodId: action.foodId })
          ),
          catchError((error) =>
            of(
              menuActions.deletedFoodFailed({
                serverError: error.massage,
              })
            )
          )
        )
      )
    )
  );
}
