import { createAction, props } from '@ngrx/store';
import { FoodSearchResponse } from 'src/app/models/api/responses/Food-search-response';

export const searchFood = createAction(
  '[Search Food Page] search ',
  props<{ name: string }>()
);

export const searchFoodSuccess = createAction(
  '[Search Food Page]  Success search',
  props<{ obj: FoodSearchResponse[] }>()
);

export const searchFoodFailed = createAction(
  '[Search Food Page] Failed search',
  props<{ serverError: string }>()
);
