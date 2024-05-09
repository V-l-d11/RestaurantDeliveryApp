import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  USER_ODERS_FEATURE_NAME,
  UserOderslState,
} from '../reducers/oder-users-reducer';

const getFeature = createFeatureSelector<UserOderslState>(
  USER_ODERS_FEATURE_NAME
);

export const getLoading = createSelector(getFeature, (state) => state.loading);

export const getServerError = createSelector(
  getFeature,
  (state) => state.serverError
);

export const getOderList = createSelector(
  getFeature,
  (state) => state.odersList
);
