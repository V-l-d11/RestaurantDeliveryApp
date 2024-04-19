import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  FOOD_SEARCH_FEATURE_NAME,
  SearchSatate,
} from '../reducer/food-search-reducer';

const getFeature = createFeatureSelector<SearchSatate>(
  FOOD_SEARCH_FEATURE_NAME
);

export const getLoading = createSelector(getFeature, (state) => state.loading);

export const getLoaded = createSelector(getFeature, (state) => state.loaded);

export const getServerError = createSelector(
  getFeature,
  (state) => state.serverError
);

export const getSearchData = createSelector(
  getFeature,
  (state) => state.foodSearch
);
