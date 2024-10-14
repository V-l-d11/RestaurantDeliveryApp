import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { OwnerManuService } from '../../services/api-owner-menu-services/owner-manu.service';
import * as menuActions from './../actions/actions-owner-manu';
import { catchError, map, Observable, of, switchMap, tap } from 'rxjs';
import * as restaurantActions from './../actions/actions-owner-retsuarant';
import { OwnerDialogServiceService } from '../../services/owner-dialog-service/owner-dialog-service.service';
import { getAllFood } from 'src/app/food-search-page/core/store+/actions/food-search-actions';
import { getRestaurantId } from '../selectors/owner-dashboard-selectors';
import * as customerAction from '../../../food-restaurants-page/core/store+/actions/restaurant-actions';
@Injectable()
export class OwnerMenuFoodEffects {
  retsuarantId!: Observable<number>;
  id!: number;
  constructor(
    private actions$: Actions,
    private store$: Store,
    private ownerMenuFoodService: OwnerManuService,
    private dialog: OwnerDialogServiceService
  ) {
    this.retsuarantId = this.store$.select(getRestaurantId);
    this.retsuarantId.subscribe((el) => (this.id = el));
  }
  currentPage: number = 1;
  pageSize: number = 8;

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
              .showMenuItems(
                action.item.id,
                filterAction.filters,
                filterAction.categories
              )
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
          tap(() => {
            let page = this.currentPage;
            let size = this.pageSize;
            this.store$.dispatch(getAllFood({ page, size }));
            this.store$.dispatch(
              customerAction.loadSingleRestaurant({ id: this.id })
            );
          }),
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
          tap(() => {
            this.dialog.openSnackBar('Menu Item deleted Sucessfuly!', 4000);
          }),
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
