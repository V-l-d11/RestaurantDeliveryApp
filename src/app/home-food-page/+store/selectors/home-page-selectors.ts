import {
  createFeature,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import { HOME_FEATURE_NAME, HomeReducerState } from '../reducer/home-reducer';

const getFeature = createFeatureSelector<HomeReducerState>(HOME_FEATURE_NAME);

export const getLoading = createSelector(getFeature, (state) => state.loading);

export const getError = createSelector(
  getFeature,
  (state) => state.serverError
);

export const getCtaegoriesFoodHome = createSelector(
  getFeature,
  (state) => state.categoryFood
);
