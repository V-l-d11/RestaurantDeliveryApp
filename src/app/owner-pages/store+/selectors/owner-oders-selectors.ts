import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  OWNER_ODERS_FEATURE_NAME,
  OwnerOdersState,
} from '../reducers/owner-oders-reducer';

const getFeature = createFeatureSelector<OwnerOdersState>(
  OWNER_ODERS_FEATURE_NAME
);

export const getLoading = createSelector(getFeature, (state) => state.loading);

export const getError = createSelector(
  getFeature,
  (state) => state.serverError
);

export const getOders = createSelector(getFeature, (state) => state.oders);

export const getPrevioseName = createSelector(
  getFeature,
  (state) => state.previousDate
);
