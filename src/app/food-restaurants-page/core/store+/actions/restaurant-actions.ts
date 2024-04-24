import { createAction, props } from '@ngrx/store';
import { RestaurantCustomer } from 'src/app/models/api/responses/Restaurant-response';
import { RestaurantCategory } from 'src/app/models/api/responses/restaurant-category';

export const getAllRestaurants = createAction(
  '[Restaurant Customer page] get all Restaurant'
);

export const getAllRestaurantsSucess = createAction(
  '[Restaurant Customer page] get All restaurants Sucess',
  props<{ restaurants: RestaurantCustomer[] }>()
);

export const getAllRestaurantsFailed = createAction(
  '[Restaurant Customer page] get All restaurants Failed',
  props<{ serverError: string }>()
);

export const serachRestaurants = createAction(
  '[Restaurant Customer page]  Search Restaurants',
  props<{ query: string }>()
);
export const serarchRestaurantsSucess = createAction(
  '[Restaurant Customer page] Search Restaurants Sucess',
  props<{ restaurants: RestaurantCustomer[] }>()
);

export const serachRestaurantsFailed = createAction(
  '[Restaurant Customer page] Search Restaurants Failed',
  props<{ serverError: string }>()
);

export const loadSingleRestaurant = createAction(
  '[Restaurant Customer page] get Single Restaurant',
  props<{ id: number }>()
);

export const getSingleRestaurantSucess = createAction(
  '[Restaurant Customer page] get Single Restaurant Success',
  props<{ restaurant: RestaurantCustomer }>()
);

export const getSingleRestaurantFailed = createAction(
  '[Restaurant Customer page] get Single Restaurant Failed',
  props<{ serverError: string }>()
);

export const getCategoyRestaurant = createAction(
  '[Restaurant Customer page]  get Category Restaurant',
  props<{ restaurantId: number }>()
);

export const getCategoryRestaurantSucess = createAction(
  '[Restaurant Customer page] get Category Success',
  props<{ categories: RestaurantCategory[] }>()
);

export const getCategoryRestaurantFailed = createAction(
  '[Restaurant Customer page] get Customer Failed',
  props<{ serverError: string }>()
);
