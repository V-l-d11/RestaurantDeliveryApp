import { createReducer, on } from '@ngrx/store';
import { RestaurantCustomer } from 'src/app/models/api/responses/Restaurant-response';

import * as CustomerRestaurantActions from './../actions/restaurant-actions';

export const RESTAURANT_CUSTOMER_FEATURE_NAME = 'CustomerRestaurant';

export interface CustomerRestaurantState {
  allRestaurants: RestaurantCustomer[] | null;
  searchedRestaurants: RestaurantCustomer[] | null;
  selectedRestaurant: RestaurantCustomer | null;
  loading: boolean;
  loaded: boolean;
  serverError: string;
}

export const initialState: CustomerRestaurantState = {
  allRestaurants: null,
  searchedRestaurants: null,
  selectedRestaurant: null,
  loading: false,
  loaded: false,
  serverError: '',
};

export const RestaurantCustomerReducer = createReducer(
  initialState,
  on(CustomerRestaurantActions.getAllRestaurants, (state) => ({
    ...state,
    loading: true,
    loaded: false,
  })),
  on(
    CustomerRestaurantActions.getAllRestaurantsSucess,
    (state, { restaurants }) => ({
      ...state,
      allRestaurants: restaurants,
      loading: false,
      loaded: true,
    })
  ),
  on(
    CustomerRestaurantActions.getAllRestaurantsFailed,
    (state, { serverError }) => ({
      ...state,
      loading: false,
      loaded: true,
      serverError,
    })
  ),
  on(CustomerRestaurantActions.serachRestaurants, (state) => ({
    ...state,
    loading: true,
    loaded: false,
  })),
  on(
    CustomerRestaurantActions.serarchRestaurantsSucess,
    (state, { restaurants }) => ({
      ...state,
      searchedRestaurants: restaurants,
      loading: false,
      loaded: true,
    })
  ),
  on(
    CustomerRestaurantActions.serachRestaurantsFailed,
    (state, { serverError }) => ({
      ...state,
      loading: false,
      loaded: true,
      serverError,
    })
  ),
  on(CustomerRestaurantActions.getSingleRestaurant, (state) => ({
    ...state,
    loading: true,
    loaded: false,
  })),
  on(
    CustomerRestaurantActions.getSingleRestaurantSucess,
    (state, { restaurant }) => ({
      ...state,
      loading: false,
      loaded: true,
      selectedRestaurant: restaurant,
    })
  ),
  on(
    CustomerRestaurantActions.getSingleRestaurantFailed,
    (state, { serverError }) => ({
      ...state,
      loading: false,
      loaded: true,
      serverError,
    })
  )
);
