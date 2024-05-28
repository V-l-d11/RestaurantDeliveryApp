import {
  createFeature,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import { AuthState } from 'src/app/models/storeModels/authModels';
import { FOOD_AUTH_FEATURE_NAME } from '../reducers/food-auth-reducer';

const getFeature = createFeatureSelector<AuthState>(FOOD_AUTH_FEATURE_NAME);

export const getLoading = createSelector(getFeature, (state) => state.loading);

export const getLoaded = createSelector(getFeature, (state) => state.loaded);

export const getServerError = createSelector(
  getFeature,
  (state) => state.serverError
);

export const getAuthData = createSelector(
  getFeature,
  (state) => state.authData
);

export const getAccessToken = createSelector(
  getAuthData,
  (authData) => authData.token
);

export const isAuth = createSelector(
  getFeature,
  (authData) => !!authData.authData.token
);

export const getOwnerEmail = createSelector(getFeature, (state) => state.email);

export const getRole = createSelector(
  getFeature,
  (state) => state.authData.role
);
