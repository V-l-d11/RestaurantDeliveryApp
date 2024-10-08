import { createReducer, on } from '@ngrx/store';
import { FoodSearchResponse } from 'src/app/models/api/responses/Food-search-response';
import * as foodSerchAction from './../actions/food-search-actions';

export interface SearchSatate {
  foodSearch: FoodSearchResponse[];
  serverError: string;
  loading: boolean;
  loaded: boolean;
  nameOfFood: string;
}

export const FOOD_SEARCH_FEATURE_NAME = 'search';

export const initalState: SearchSatate = {
  foodSearch: [],
  serverError: '',
  loading: false,
  loaded: true,
  nameOfFood: '',
};

export const SearchReducer = createReducer(
  initalState,
  on(foodSerchAction.searchFood, (state, { name }) => ({
    ...state,
    nameOfFood: name,
    loading: true,
    loaded: false,
  })),
  on(foodSerchAction.searchFoodSuccess, (state, { obj }) => ({
    ...state,
    foodSearch: obj,
    loading: false,
    loaded: true,
  })),
  on(foodSerchAction.searchFoodFailed, (state, { serverError }) => ({
    ...state,
    serverError,
    loaded: true,
    loading: false,
  })),
  on(foodSerchAction.getAllFood, (state) => ({
    ...state,
    loaded: false,
    loading: true,
  })),
  on(foodSerchAction.getAllFoodSucess, (state, { obj }) => ({
    ...state,
    loaded: true,
    loading: false,
    foodSearch: obj.content,
  })),
  on(foodSerchAction.searchFoodFailed, (state, { serverError }) => ({
    ...state,
    loaded: true,
    loading: false,
    serverError,
  }))
);
