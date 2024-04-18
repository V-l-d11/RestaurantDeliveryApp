import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { FoodSearchService } from '../../services/api-search/food-search.service';
import { searchFood } from '../actions/food-search-actions';
import { catchError, map, of, switchMap } from 'rxjs';
import * as SearchActions from './../actions/food-search-actions';

@Injectable()
export class FoodSearchEffects {
  constructor(
    private actions$: Actions,
    private store$: Store,
    private searchService: FoodSearchService,
    private router: Router
  ) {}

  search = createEffect(() =>
    this.actions$.pipe(
      ofType(SearchActions.searchFood),
      switchMap((action) =>
        this.searchService.searchCustomerFood(action.name).pipe(
          map((response) => SearchActions.searchFoodSuccess({ obj: response })),
          catchError((error) =>
            of(SearchActions.searchFoodFailed({ serverError: error.massage }))
          )
        )
      )
    )
  );
}
