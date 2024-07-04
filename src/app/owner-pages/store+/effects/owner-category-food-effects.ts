import { Injectable } from '@angular/core';
import { act, Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import * as CategoryActions from './../actions/actions-owner-category-food';
import { catchError, map, of, switchMap } from 'rxjs';
import { CategoryFoodService } from '../../services/api-owner-category-food-service/category-food.service';

@Injectable({
  providedIn: 'root',
})
export class OwnerCategoryFoodEffects {
  constructor(
    private actions$: Actions,
    private store$: Store,
    private categoryService: CategoryFoodService
  ) {}

  loadCategoriesFood$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CategoryActions.getOwnerCategoryFood),
      switchMap(() =>
        this.categoryService.getCategoriesFood().pipe(
          map((response) =>
            CategoryActions.getOwnerCategoryFoodSucess({ item: response })
          ),
          catchError((error) =>
            of(
              CategoryActions.getOwnerCategoryFoodFailed({
                serverError: error.massage,
              })
            )
          )
        )
      )
    )
  );

  createCategoriesFood$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CategoryActions.createOwnerCategoryFood),
      switchMap((action) =>
        this.categoryService.createCategoryFood(action.item).pipe(
          map((response) =>
            CategoryActions.createOwnerCategorySucess({ item: response })
          ),
          catchError((error) =>
            of(
              CategoryActions.createOwnerCategoryFailed({
                serverError: error.massage,
              })
            )
          )
        )
      )
    )
  );
}
