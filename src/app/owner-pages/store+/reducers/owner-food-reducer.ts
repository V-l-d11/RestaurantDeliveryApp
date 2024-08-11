import { createReducer, on } from '@ngrx/store';
import { OwnerFoodBase } from 'src/app/models/baseModals/foodOwnerBase';
import * as menuActions from './../actions/actions-owner-manu';
export interface FoodMenuState {
  loading: boolean;
  loaded: boolean;
  serverError: string;
  filtersFood: OwnerFoodBase[];
}

export const OWNER_MENU_FOOD_NAME = 'owner-menu';

export const initalState: FoodMenuState = {
  loaded: true,
  loading: false,
  serverError: '',
  filtersFood: [],
};

export const OwnerMenuFoodReducer = createReducer(
  initalState,
  on(menuActions.getOwnerFoodFilter, (state) => ({
    ...state,
    loaded: false,
    loading: true,
  })),
  on(menuActions.getOwnerFoodFilterSucess, (state, { items }) => ({
    ...state,
    loaded: true,
    loading: false,
    filtersFood: items,
  })),
  on(menuActions.getOwnerFoodFilterFailed, (state, { serverError }) => ({
    ...state,
    loaded: true,
    loading: false,
    serverError,
  })),
  on(menuActions.createOwnerFood, (state) => ({
    ...state,
    loaded: false,
    loading: true,
  })),
  on(menuActions.createOwnerFoodSucess, (state, { item }) => ({
    ...state,
    loaded: true,
    loading: false,
    filtersFood: state.filtersFood ? [...state.filtersFood, item] : [item],
  })),
  on(menuActions.createOwnerFoodFailed, (state, { serverError }) => ({
    ...state,
    loaded: true,
    loading: false,
    serverError,
  }))
);
