import { createReducer, on } from '@ngrx/store';
import {
  searchFood,
  searchFoodFailed,
  searchFoodSuccess,
} from '../actions/food-search-actions';
import { FoodSearchResponse } from 'src/app/models/api/responses/Food-search-response';

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
  on(searchFood, (state, { name }) => ({
    ...state,
    nameOfFood: name,
    loading: true,
    loaded: false,
  })),
  on(searchFoodSuccess, (state, { obj }) => ({
    ...state,
    foodSearch: obj,
    loading: false,
    loaded: true,
  })),
  on(searchFoodFailed, (state, { serverError }) => ({
    ...state,
    serverError,
    loaded: true,
    loading: false,
  }))
);
