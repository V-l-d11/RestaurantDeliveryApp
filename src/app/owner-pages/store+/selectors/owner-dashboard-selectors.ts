import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  DashboardState,
  OWNER_DASHBOARD_FEATURE_NAME,
} from '../reducers/owner-dashboard-reducer';

const getFeature = createFeatureSelector<DashboardState>(
  OWNER_DASHBOARD_FEATURE_NAME
);

export const getLoading = createSelector(getFeature, (state) => state.loading);

export const getServerError = createSelector(
  getFeature,
  (state) => state.serverError
);

export const getRestaurantAll = createSelector(
  getFeature,
  (state) => state.restaurant
);

export const getRestaurantInfo = createSelector(getFeature, (state) => {
  const restaurant = state.restaurant;
  return restaurant
    ? {
        id: restaurant.id,
        name: restaurant.name,
        owner: restaurant.owner.fullName,
        description: restaurant.description,
        cuisineType: restaurant.cuisineType,
        openingHours: restaurant.openingHours,
        registrationDate: restaurant.registristrationDate,
        open: restaurant.open,
      }
    : null;
});

export const getAddressRestaurant = createSelector(getFeature, (state) => {
  const restaurant = state.restaurant;
  return restaurant ? restaurant.address : null;
});

export const getContactInfoRestaurant = createSelector(getFeature, (state) => {
  const restaurant = state.restaurant;
  return restaurant ? restaurant.contactInformathion : null;
});

export const getNameRestaurant = createSelector(getFeature, (state) => {
  const restaurnat = state.restaurant;
  return restaurnat ? restaurnat.name : null;
});
