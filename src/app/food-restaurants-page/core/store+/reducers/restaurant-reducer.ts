import { createReducer, on } from '@ngrx/store';
import { RestaurantCustomer } from 'src/app/models/api/responses/Restaurant-response';

import * as CustomerRestaurantActions from './../actions/restaurant-actions';
import { RestaurantCategory } from 'src/app/models/api/responses/restaurant-category';
import { FoodSearchResponse } from 'src/app/models/api/responses/Food-search-response';
import { ingridientsCategory } from 'src/app/models/api/responses/ingridients-category-from-restaurant';

export const RESTAURANT_CUSTOMER_FEATURE_NAME = 'CustomerRestaurant';

export interface CustomerRestaurantState {
  allRestaurants: RestaurantCustomer[] | null;
  searchedRestaurants: RestaurantCustomer[] | null;
  selectedRestaurant: RestaurantCustomer | null;
  categoriesRestaurant: RestaurantCategory[] | null;
  restaurantFoodFilterRadio: FoodSearchResponse[] | null;
  ingridientsCategories: ingridientsCategory[] | null;
  loading: boolean;
  loaded: boolean;
  serverError: string;
}

export const initialState: CustomerRestaurantState = {
  allRestaurants: null,
  searchedRestaurants: null,
  selectedRestaurant: null,
  categoriesRestaurant: null,
  restaurantFoodFilterRadio: null,
  ingridientsCategories: null,
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
  on(CustomerRestaurantActions.loadSingleRestaurant, (state) => ({
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
  ),
  on(CustomerRestaurantActions.getCategoyRestaurant, (state) => ({
    ...state,
    loading: true,
    loaded: false,
  })),
  on(
    CustomerRestaurantActions.getCategoryRestaurantSucess,
    (state, { categories }) => ({
      ...state,
      categoriesRestaurant: categories,
      loading: false,
      loaded: true,
    })
  ),
  on(
    CustomerRestaurantActions.getCategoryRestaurantFailed,
    (state, { serverError }) => ({
      ...state,
      loading: false,
      loaded: true,
      serverError,
    })
  ),
  on(CustomerRestaurantActions.getFilterFoodRadio, (state) => ({
    ...state,
    loading: true,
    loaded: false,
  })),
  on(CustomerRestaurantActions.getFilterFoodRadioSucess, (state, { obj }) => ({
    ...state,
    loading: false,
    loaded: true,
    restaurantFoodFilterRadio: obj,
  })),
  on(
    CustomerRestaurantActions.getFilterFoodRadioFailed,
    (state, { serverError }) => ({
      ...state,
      loading: false,
      loaded: true,
      serverError,
    })
  ),
  on(
    CustomerRestaurantActions.getIngridientsCategoriesRestaurant,
    (state, { id }) => ({
      ...state,
      loading: true,
      loaded: false,
    })
  ),
  on(
    CustomerRestaurantActions.getIngridientsCategoriesRestaurantSucess,
    (state, { obj }) => ({
      ...state,
      loading: false,
      loaded: true,
      ingridientsCategories: obj,
    })
  ),
  on(
    CustomerRestaurantActions.getIngridientsCategoriesRestaurantFailed,
    (state, { serverError }) => ({
      ...state,
      loading: false,
      loaded: true,
      serverError,
    })
  )
);
