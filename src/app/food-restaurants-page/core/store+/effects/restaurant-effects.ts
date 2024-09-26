import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { RestaurantService } from '../../services/restaurant.service';
import * as RestaurantCustomerActions from './../actions/restaurant-actions';
import {
  catchError,
  debounce,
  delay,
  distinctUntilChanged,
  map,
  mergeMap,
  of,
  switchMap,
} from 'rxjs';

@Injectable()
export class RestaurantCustomerEffects {
  constructor(
    private actions$: Actions,
    private store$: Store,
    private router: Router,
    private restaurantService: RestaurantService
  ) {}

  allRestaurants$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RestaurantCustomerActions.getAllRestaurants),
      switchMap(() =>
        this.restaurantService.getAllRestaurants().pipe(
          map((response) =>
            RestaurantCustomerActions.getAllRestaurantsSucess({
              restaurants: response,
            })
          ),
          catchError((error) =>
            of(
              RestaurantCustomerActions.getAllRestaurantsFailed({
                serverError: error.massage,
              })
            )
          )
        )
      )
    )
  );

  search$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RestaurantCustomerActions.serachRestaurants),
      debounce(() => of(null).pipe(delay(500))),
      distinctUntilChanged((prev, cur) => prev.query == cur.query),
      switchMap((action) =>
        this.restaurantService.searchRestaurantByNameORLocal(action.query).pipe(
          map((response) =>
            RestaurantCustomerActions.serarchRestaurantsSucess({
              restaurants: response,
            })
          ),
          catchError((error) =>
            of(
              RestaurantCustomerActions.serachRestaurantsFailed({
                serverError: error.massage,
              })
            )
          )
        )
      )
    )
  );

  loadSelectedRestaurant$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RestaurantCustomerActions.loadSingleRestaurant),
      mergeMap(({ id }) =>
        this.restaurantService.getSingleRestaurant(id).pipe(
          map((restaurant) =>
            RestaurantCustomerActions.getSingleRestaurantSucess({ restaurant })
          ),
          catchError((error) =>
            of(
              RestaurantCustomerActions.getSingleRestaurantFailed({
                serverError: error.massage,
              })
            )
          )
        )
      )
    )
  );

  loadRestaurantCategory$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RestaurantCustomerActions.getSingleRestaurantSucess),
      switchMap(({ restaurant }) =>
        this.restaurantService.getRestaurantCategory(restaurant.id).pipe(
          map((categories) =>
            RestaurantCustomerActions.getCategoryRestaurantSucess({
              categories,
            })
          ),
          catchError((error) =>
            of(
              RestaurantCustomerActions.getCategoryRestaurantFailed({
                serverError: error.massage,
              })
            )
          )
        )
      )
    )
  );

  loadFilterFoodBySingleRestaurant$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RestaurantCustomerActions.getFilterFoodSingleRestaurant),
      switchMap((action) =>
        this.restaurantService.getFilterFoodBySingleRestaurant(action.obj).pipe(
          map((response) =>
            RestaurantCustomerActions.getFilterFoodSingleRestaurantSucess({
              obj: response,
            })
          ),
          catchError((error) =>
            of(
              RestaurantCustomerActions.getFilterFoodSingleRestaurantFailed({
                serverError: error.massage,
              })
            )
          )
        )
      )
    )
  );

  loadIngridientsCategory = createEffect(() =>
    this.actions$.pipe(
      ofType(RestaurantCustomerActions.getIngridientsCategoriesRestaurant),
      switchMap((action) =>
        this.restaurantService
          .getIngridientsCategoryFromRestaurant(action.id)
          .pipe(
            map((response) =>
              RestaurantCustomerActions.getIngridientsCategoriesRestaurantSucess(
                { obj: response }
              )
            ),
            catchError((error) =>
              of(
                RestaurantCustomerActions.getIngridientsCategoriesRestaurantFailed(
                  {
                    serverError: error.massage,
                  }
                )
              )
            )
          )
      )
    )
  );

  loadRestaurantsByFilter$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RestaurantCustomerActions.getRestaurantsByFilters),
      switchMap((action) =>
        this.restaurantService.getRestaurantsListByFilters(action.obj).pipe(
          map((response) =>
            RestaurantCustomerActions.getRestaurantsByFiltersSucess({
              items: response,
            })
          ),
          catchError((error) =>
            of(
              RestaurantCustomerActions.getRestaurantsByFiltersFailed({
                serverError: error.message,
              })
            )
          )
        )
      )
    )
  );

  loadAllCuisineTypes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RestaurantCustomerActions.getAllCuisineTypes),
      switchMap(() =>
        this.restaurantService.getAllCuisineTypes().pipe(
          map((response) =>
            RestaurantCustomerActions.getAllCuisineTypesSucess({
              items: response,
            })
          ),
          catchError((error) =>
            of(
              RestaurantCustomerActions.getAllCuisineTypesFailed({
                serverError: error.massage,
              })
            )
          )
        )
      )
    )
  );
}
