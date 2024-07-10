import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  IngridientsState,
  OWNER_IGRIDIENTS_FEATURE_NAME,
} from '../reducers/owner-ingridients-reducer';

const getFeature = createFeatureSelector<IngridientsState>(
  OWNER_IGRIDIENTS_FEATURE_NAME
);

export const getLoading = createSelector(getFeature, (state) => state.loading);

export const getError = createSelector(
  getFeature,
  (state) => state.serverError
);

export const getIngridients = createSelector(
  getFeature,
  (state) => state.ingridItem
);

export const getIngridCategory = createSelector(
  getFeature,
  (state) => state.ingridCategory
);
