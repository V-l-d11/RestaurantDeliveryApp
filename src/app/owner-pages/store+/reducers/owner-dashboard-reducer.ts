import { createReducer, on } from '@ngrx/store';
import { OwnerRestaurantBase } from 'src/app/models/baseModals/restaurantOwnerbase';
import * as restaurantActions from './../actions/actions-owner-retsuarant';
import { AdminRestaurantResponse } from 'src/app/models/api/responses/admin/admin-restaurant';
export interface DashboardState {
  loading: boolean;
  loaded: boolean;
  serverError: string;
  restaurant: OwnerRestaurantBase | null;
}

export const OWNER_DASHBOARD_FEATURE_NAME = 'owner-dashboard';

export const initalState: DashboardState = {
  loading: false,
  loaded: true,
  serverError: '',
  restaurant: null,
};

export const OwnerDashboardReducer = createReducer(
  initalState,
  on(restaurantActions.getOwnerRestaurant, (state) => ({
    ...state,
    loading: true,
    loaded: false,
  })),
  on(restaurantActions.getOwnerRestaurantSucess, (state, { item }) => ({
    ...state,
    loading: false,
    loaded: true,
    restaurant: item,
  })),
  on(restaurantActions.getOwnerRestaurantFailed, (state, { serverError }) => ({
    ...state,
    loading: false,
    loaded: true,
    serverError,
  })),
  on(restaurantActions.updateRestaurantStatus, (state) => ({
    ...state,
    loading: true,
    loaded: false,
  })),
  on(restaurantActions.updateRestaurantStatusSucess, (state, { item }) => ({
    ...state,
    loading: false,
    loaded: true,
    restaurant: item,
  })),
  on(
    restaurantActions.updateRestaurantStatusFailed,
    (state, { serverError }) => ({
      ...state,
      loading: false,
      loaded: true,
      serverError,
    })
  )
);
