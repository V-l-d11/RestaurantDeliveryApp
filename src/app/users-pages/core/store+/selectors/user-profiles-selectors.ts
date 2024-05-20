import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  USER_PROFILE_FEATURE_NAME,
  UserProfilesState,
} from '../reducers/user-profile-reducer';

const getFeature = createFeatureSelector<UserProfilesState>(
  USER_PROFILE_FEATURE_NAME
);

export const getLoading = createSelector(getFeature, (state) => state.loading);

export const getServerError = createSelector(
  getFeature,
  (state) => state.serverError
);

export const getUserProfiles = createSelector(
  getFeature,
  (state) => state.userProfile
);

export const getFavorites = createSelector(
  getFeature,
  (state) => state.userProfile
);

export const getFavoritesList = createSelector(
  getFeature,
  (state) => state.userProfile?.favorites
);

export const getFavoritesArray = createSelector(
  getFavorites,
  (state) => state?.favorites
);

export const getAddresses = createSelector(
  getFeature,
  (state) => state.userProfile?.adresses
);
