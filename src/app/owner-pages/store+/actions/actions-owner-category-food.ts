import { createAction, props } from '@ngrx/store';
import { Category } from 'src/app/models/baseModals/category';

export enum OwnerFoodCategoryTypes {
  CREATE_OWNER_CATEGORY_FOOD = '[Owner Panel] create category food',
  CREATE_OWNER_CATEGORY_FOOD_SUCESS = '[Owner Panel] create category food sucess',
  CREATE_OWNER_CATEGORY_FOOD_FAILED = '[Owner Panel] create category food failed',
  GET_OWNER_CATEGORY_FOOD = '[Owner Panel] get category food',
  GET_OWNER_CATEGORY_FOOD_SUCESS = '[Owner Panel] get category food sucess',
  GET_OWNER_CATEGORY_FOOD_FAILED = '[Owner Panel] get category food failed',
  DELETE_OWNER_CATEGORY_FOOD = '[Owner Panel] delete category food',
  DELETE_OWNER_CATEGORY_FOOD_SUCESS = '[Owner Panel] delete category food sucess',
  DELETE_OWNER_CATEGORY_FOOD_FAILED = '[Owner Panel] delete category food failed',
}

export const getOwnerCategoryFood = createAction(
  OwnerFoodCategoryTypes.GET_OWNER_CATEGORY_FOOD
);

export const getOwnerCategoryFoodSucess = createAction(
  OwnerFoodCategoryTypes.GET_OWNER_CATEGORY_FOOD_SUCESS,
  props<{ item: Category[] }>()
);

export const getOwnerCategoryFoodFailed = createAction(
  OwnerFoodCategoryTypes.GET_OWNER_CATEGORY_FOOD_FAILED,
  props<{ serverError: string }>()
);

export const createOwnerCategoryFood = createAction(
  OwnerFoodCategoryTypes.CREATE_OWNER_CATEGORY_FOOD,
  props<{ item: Category }>()
);

export const createOwnerCategorySucess = createAction(
  OwnerFoodCategoryTypes.CREATE_OWNER_CATEGORY_FOOD_SUCESS,
  props<{ item: Category }>()
);

export const createOwnerCategoryFailed = createAction(
  OwnerFoodCategoryTypes.CREATE_OWNER_CATEGORY_FOOD_FAILED,
  props<{ serverError: string }>()
);

export const deleteOwnerCategoryFood = createAction(
  OwnerFoodCategoryTypes.DELETE_OWNER_CATEGORY_FOOD,
  props<{ id: number }>()
);

export const deleteOwnerCategoryFoodSucess = createAction(
  OwnerFoodCategoryTypes.DELETE_OWNER_CATEGORY_FOOD_SUCESS,
  props<{ id: number }>()
);
export const deleteOwnerCategoryFoodFailed = createAction(
  OwnerFoodCategoryTypes.CREATE_OWNER_CATEGORY_FOOD_FAILED,
  props<{ serverError: string }>()
);
