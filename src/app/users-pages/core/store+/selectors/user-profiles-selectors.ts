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
