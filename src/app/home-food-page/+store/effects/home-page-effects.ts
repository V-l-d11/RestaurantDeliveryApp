import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { HomePageServiceService } from '../../services/home-page-service.service';
import * as homePageActions from './../actions/home-page-actions';
import { catchError, map, of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HomePageEffects {
  constructor(
    private actions$: Actions,
    private store$: Store,
    private homePageService: HomePageServiceService
  ) {}

  loadAllCategoriesFood$ = createEffect(() =>
    this.actions$.pipe(
      ofType(homePageActions.getFoodCategoryAll),
      switchMap(() =>
        this.homePageService.getAllCategoriesFood().pipe(
          map((response) =>
            homePageActions.getFoodCategoryAllSucess({ items: response })
          ),
          catchError((error) =>
            of(
              homePageActions.getFoodCategoryFailed({
                serverError: error.message,
              })
            )
          )
        )
      )
    )
  );
}
