import { createReducer, on } from '@ngrx/store';
import { IngridCategoryBase } from 'src/app/models/baseModals/ingridients-category-base';
import { IngridItemsBase } from 'src/app/models/baseModals/ingridients-item-base';
import * as ingridientsActions from './../actions/actions-owner-ingridients';
import { GetRestaurantIngridCategoryResponse } from 'src/app/models/api/responses/admin/get-restaurnat-igrid-category-response';
import { IngridientsItem } from 'src/app/models/api/responses/ingridients-category-from-restaurant';

export interface IngridientsState {
  loaded: boolean;
  loading: boolean;
  serverError: string;
  ingridItem: IngridientsItem[];
  ingridCategory: GetRestaurantIngridCategoryResponse[];
}

export const OWNER_IGRIDIENTS_FEATURE_NAME = 'owner-ingridients';

export const initalState: IngridientsState = {
  loaded: true,
  loading: false,
  serverError: '',
  ingridItem: [],
  ingridCategory: [],
};

export const OwnerIngridientsReducer = createReducer(
  initalState,
  on(ingridientsActions.getRestaurantIngridCategory, (state) => ({
    ...state,
    loading: true,
    loaded: false,
  })),
  on(
    ingridientsActions.getRestaurantIgridCategorySucess,
    (state, { items }) => ({
      ...state,
      loaded: true,
      loading: false,
      ingridCategory: items,
    })
  ),
  on(
    ingridientsActions.getRestaurantIgridCategoryFailed,
    (state, { serverError }) => ({
      ...state,
      loaded: true,
      loading: false,
      serverError,
    })
  ),
  on(ingridientsActions.getRestaurantIngridients, (state) => ({
    ...state,
    loading: true,
    loaded: false,
  })),
  on(ingridientsActions.getRestaurantIngridientsSucess, (state, { items }) => ({
    ...state,
    loaded: true,
    loading: false,
    ingridItem: items,
  })),
  on(ingridientsActions.deleteIngridientCategory, (state) => ({
    ...state,
    loading: true,
    loaded: false,
  })),
  on(ingridientsActions.deleteIngridientCategorySucess, (state, { id }) => ({
    ...state,
    loaded: true,
    loading: false,
    ingridCategory: state.ingridCategory.filter(
      (category) => category.id != id
    ),
  })),
  on(
    ingridientsActions.deleteIngridientCategoryFailed,
    (state, { serverError }) => ({
      ...state,
      loaded: true,
      loading: false,
      serverError,
    })
  ),
  on(ingridientsActions.deleteIngridientItem, (state) => ({
    ...state,
    loaded: false,
    loading: true,
  })),
  on(ingridientsActions.deleteIngridientItemSucess, (state, { id }) => ({
    ...state,
    loaded: true,
    loading: false,
    ingridCategory: state.ingridCategory.map((category) => ({
      ...category,
      ingredients: category.ingredients.filter((item) => item.id !== id),
    })),
  })),
  on(
    ingridientsActions.deleteIngridientItemFailed,
    (state, { serverError }) => ({
      ...state,
      loaded: true,
      loading: false,
      serverError,
    })
  )
);
