import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  CustomerRestaurantState,
  RESTAURANT_CUSTOMER_FEATURE_NAME,
} from '../reducers/restaurant-reducer';

const getFeature = createFeatureSelector<CustomerRestaurantState>(
  RESTAURANT_CUSTOMER_FEATURE_NAME
);

export const getLoading = createSelector(getFeature, (state) => state.loading);

export const getServerError = createSelector(
  getFeature,
  (state) => state.serverError
);

export const getAllRestaurantsSelector = createSelector(
  getFeature,
  (state) => state.allRestaurants
);

export const getSearchRestaurants = createSelector(
  getFeature,
  (state) => state.searchedRestaurants
);

export const getSingleRestaurant = createSelector(
  getFeature,
  (state) => state.selectedRestaurant
);

export const getRestaurantCategories = createSelector(
  getFeature,
  (state) => state.categoriesRestaurant
);
