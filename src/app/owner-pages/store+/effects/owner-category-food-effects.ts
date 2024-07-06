import { Injectable } from '@angular/core';
import { act, Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import * as CategoryActions from './../actions/actions-owner-category-food';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { CategoryFoodService } from '../../services/api-owner-category-food-service/category-food.service';
import { OwnerDialogServiceService } from '../../services/owner-dialog-service/owner-dialog-service.service';

@Injectable({
  providedIn: 'root',
})
export class OwnerCategoryFoodEffects {
  constructor(
    private actions$: Actions,
    private store$: Store,
    private categoryService: CategoryFoodService,
    private dialog: OwnerDialogServiceService
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

  $deleteCategoryFood = createEffect(() =>
    this.actions$.pipe(
      ofType(CategoryActions.deleteOwnerCategoryFood),
      switchMap((action) =>
        this.categoryService.deleteCategoryFood(action.id).pipe(
          map((response) =>
            CategoryActions.deleteOwnerCategoryFoodSucess({ id: response })
          ),
          tap(() =>
            this.dialog.openSnackBar('Category deleted sucessfuli!', 3000)
          ),

          catchError((error) =>
            of(
              CategoryActions.deleteOwnerCategoryFoodFailed({
                serverError: error.massage,
              })
            )
          )
        )
      )
    )
  );
}
