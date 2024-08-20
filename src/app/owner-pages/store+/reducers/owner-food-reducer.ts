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
    filtersFood: state.filtersFood.map((food) =>
      food.id === item.id ? { ...food, ...item } : food
    ),
  })),
  on(menuActions.createOwnerFoodFailed, (state, { serverError }) => ({
    ...state,
    loaded: true,
    loading: false,
    serverError,
  })),
  on(menuActions.updateFoodAvailableStatus, (state) => ({
    ...state,
    loaded: false,
    loading: true,
  })),
  on(menuActions.updateFoodAvailableStatusSucess, (state, { item }) => ({
    ...state,
    loaded: true,
    loading: false,
    filtersFood: state.filtersFood.map((food) =>
      food.id === item.id ? { ...food, available: item.available } : food
    ),
  })),
  on(menuActions.updateFoodAvailableStatusFailed, (state, { serverError }) => ({
    ...state,
    loaded: true,
    loading: false,
    serverError,
  })),
  on(menuActions.deletedFood, (state) => ({
    ...state,
    loaded: false,
    loading: true,
  })),
  on(menuActions.deletedFoodSucess, (state, { foodId }) => ({
    ...state,
    loaded: true,
    loading: false,
    filtersFood: state.filtersFood.filter((el) => el.id !== foodId),
  })),
  on(menuActions.deletedFoodFailed, (state, { serverError }) => ({
    ...state,
    loaded: true,
    loading: false,
    serverError,
  }))
);
