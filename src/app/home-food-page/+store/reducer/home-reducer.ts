import { createReducer, on } from '@ngrx/store';
import { Category } from 'src/app/models/baseModals/category';
import * as homeActions from './../actions/home-page-actions';

export interface HomeReducerState {
  categoryFood: Category[];
  loaded: boolean;
  loading: boolean;
  serverError: string;
}

export const HOME_FEATURE_NAME = 'home';

export const initalState: HomeReducerState = {
  categoryFood: [],
  loaded: true,
  loading: false,
  serverError: '',
};

export const HomeReducer = createReducer(
  initalState,
  on(homeActions.getFoodCategoryAll, (state) => ({
    ...state,
    loaded: false,
    loading: true,
  })),
  on(homeActions.getFoodCategoryAllSucess, (state, { items }) => ({
    ...state,
    loaded: true,
    loading: false,
    categoryFood: items,
  })),
  on(homeActions.getFoodCategoryFailed, (state, { serverError }) => ({
    ...state,
    loaded: true,
    loading: false,
    serverError,
  }))
);
