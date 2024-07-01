import { createReducer, on } from '@ngrx/store';
import { OwnerRestaurantBase } from 'src/app/models/baseModals/restaurantOwnerbase';
import * as restaurantActions from './../actions/actions-owner-retsuarant';
import { AdminCreateRestaurantRequest } from 'src/app/models/api/requests/admin/create-restaurant-request';

export interface OwnerRestaurantState {
  loading: boolean;
  loaded: boolean;
  serverError: string;
  restaurantStatus: boolean;
  restaurant: OwnerRestaurantBase | null;
  updateRestaurant: AdminCreateRestaurantRequest | null;
}

export const OWNER_RESTAURANT_FEATURE_NAME = 'owner-restaurant-page';

export const initalState: OwnerRestaurantState = {
  loading: false,
  loaded: true,
  serverError: '',
  restaurantStatus: false,
  restaurant: null,
  updateRestaurant: null,
};

export const OwnerRestaurantReducer = createReducer(
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
  on(restaurantActions.createOnwerRestaurant, (state) => ({
    ...state,
    loading: true,
    loaded: false,
  })),
  on(restaurantActions.createOnwerRestaurantSucess, (state, { item }) => ({
    ...state,
    loading: false,
    loaded: true,
    restaurant: item,
  })),
  on(
    restaurantActions.createOwnerRestaurantFailed,
    (state, { serverError }) => ({
      ...state,
      loading: false,
      loaded: true,
      serverError,
    })
  ),
  on(restaurantActions.updateOwerRestaurant, (state) => ({
    ...state,
    loading: true,
    loaded: false,
  })),
  on(restaurantActions.updateOwnerRestaurantSucess, (state, { item }) => ({
    ...state,
    loading: false,
    loaded: true,
    updateRestaurant: item,
  })),
  on(
    restaurantActions.updateOwnerRestaurantFailed,
    (state, { serverError }) => ({
      ...state,
      loading: false,
      loaded: true,
      serverError,
    })
  ),
  on(restaurantActions.updateRestaurantStatus, (state) => ({
    ...state,
    loading: true,
    loaded: false,
  })),
  on(restaurantActions.updateRestaurantStatusSucess, (state, { item }) => ({
    ...state,
    loading: false,
    loaded: true,
    restaurantStatus: item.open,
  })),
  on(
    restaurantActions.updateRestaurantStatusFailed,
    (state, { serverError }) => ({
      ...state,
      loading: false,
      loaded: true,
      serverError,
    })
  ),
  on(restaurantActions.deleteRestaurant, (state) => ({
    ...state,
    loading: true,
    loaded: false,
  })),
  on(restaurantActions.deleteRestaurantSucess, (state) => ({
    ...state,
    loading: false,
    loaded: true,
  })),
  on(restaurantActions.deleteRestaurantFailed, (state, { serverError }) => ({
    ...state,
    loading: false,
    loaded: true,
    serverError,
  })),
  on(restaurantActions.findRestaurant, (state) => ({
    ...state,
    loading: true,
    loaded: false,
  })),
  on(restaurantActions.findRestaurantSucess, (state, { item }) => ({
    ...state,
    loading: false,
    loaded: true,
    restaurant: item,
  })),
  on(restaurantActions.findRestaurantFailed, (state, { serverError }) => ({
    ...state,
    loading: false,
    loaded: true,
    serverError,
  }))
);
