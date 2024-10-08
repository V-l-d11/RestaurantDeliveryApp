import { createAction, props } from '@ngrx/store';
import { FoodSearchResponse } from 'src/app/models/api/responses/Food-search-response';
import { PageableResponse } from 'src/app/models/baseModals/pagaeble';

export const getAllFood = createAction(
  '[Search Food Page]  get all food',
  props<{ page: number; size: number }>()
);
export const getAllFoodSucess = createAction(
  '[Search Food Page] get all food sucess',
  props<{ obj: PageableResponse<FoodSearchResponse> }>()
);

export const getAllFoodFailed = createAction(
  '[Search Food Page] get all food failed',
  props<{ serverError: string }>()
);

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
