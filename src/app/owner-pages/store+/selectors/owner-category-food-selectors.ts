import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  CategoriesFoodState,
  OWNER_CATEGORIES_FOOD_NAME,
} from '../reducers/owner-categories-food';

const getFeature = createFeatureSelector<CategoriesFoodState>(
  OWNER_CATEGORIES_FOOD_NAME
);

export const getLoading = createSelector(getFeature, (state) => state.loading);

export const getError = createSelector(
  getFeature,
  (state) => state.serverError
);

export const getCategoriesFood = createSelector(
  getFeature,
  (state) => state.categories
);
