import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { OwnerManuService } from '../../services/api-owner-menu-services/owner-manu.service';
import * as menuActions from './../actions/actions-owner-manu';
import { catchError, map, of, switchMap } from 'rxjs';
import * as restaurantActions from './../actions/actions-owner-retsuarant';
@Injectable()
export class OwnerMenuFoodEffects {
  constructor(
    private actions$: Actions,
    private store$: Store,
    private ownerMenuFoodService: OwnerManuService
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
          catchError((error) =>
            of(
              menuActions.createOwnerFoodFailed({ serverError: error.massage })
            )
          )
        )
      )
    )
  );
}
