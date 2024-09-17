import { createAction, props } from '@ngrx/store';
import { Category } from 'src/app/models/baseModals/category';

export const getFoodCategoryAll = createAction(
  '[Home page panel] get food category All'
);

export const getFoodCategoryAllSucess = createAction(
  '[Home page panel] get food category All sucess',
  props<{ items: Category[] }>()
);

export const getFoodCategoryFailed = createAction(
  '[Home page panel] get food category All failed',
  props<{ serverError: string }>()
);
