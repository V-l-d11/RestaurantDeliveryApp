import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  BascetSate,
  USER_BASCET_FEATURE_NAME,
} from '../reducers/user-bascet-reducer';

const getFeature = createFeatureSelector<BascetSate>(USER_BASCET_FEATURE_NAME);

export const getLoading = createSelector(getFeature, (state) => state.loading);

export const getLoaded = createSelector(getFeature, (state) => state.loaded);

export const getCard = createSelector(getFeature, (state) => state.card);
