import { createReducer, on } from '@ngrx/store';
import { Category } from 'src/app/models/baseModals/category';
import * as categoryActions from './../actions/actions-owner-category-food';

export interface CategoriesFoodState {
  loading: boolean;
  loaded: boolean;
  serverError: string;
  categories: Category[] | null;
  category: Category | null;
}

export const OWNER_CATEGORIES_FOOD_NAME = 'owner-category';

export const initalState: CategoriesFoodState = {
  loading: false,
  loaded: true,
  serverError: '',
  categories: null,
  category: null,
};

export const OwnerCategoriesFoodReduce = createReducer(
  initalState,
  on(categoryActions.getOwnerCategoryFood, (state) => ({
    ...state,
    loading: true,
    loaded: false,
  })),
  on(categoryActions.getOwnerCategoryFoodSucess, (state, { item }) => ({
    ...state,
    loading: false,
    loaded: true,
    categories: item,
  })),
  on(categoryActions.createOwnerCategoryFailed, (state, { serverError }) => ({
    ...state,
    loading: false,
    loaded: true,
    serverError,
  })),
  on(categoryActions.createOwnerCategoryFood, (state) => ({
    ...state,
    loaded: false,
    loading: true,
  })),
  on(categoryActions.createOwnerCategorySucess, (state, { item }) => ({
    ...state,
    loaded: true,
    loading: false,
    category: item,
    categories: state.categories ? [...state.categories, item] : [item],
  })),
  on(categoryActions.createOwnerCategoryFailed, (state, { serverError }) => ({
    ...state,
    loaded: true,
    loading: false,
    serverError,
  }))
);
