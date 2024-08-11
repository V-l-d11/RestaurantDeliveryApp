import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  FoodMenuState,
  OWNER_MENU_FOOD_NAME,
} from '../reducers/owner-food-reducer';

const getFeature = createFeatureSelector<FoodMenuState>(OWNER_MENU_FOOD_NAME);

export const getLoading = createSelector(getFeature, (state) => state.loading);

export const getError = createSelector(
  getFeature,
  (state) => state.serverError
);

export const getFilterFood = createSelector(
  getFeature,
  (state) => state.filtersFood
);
