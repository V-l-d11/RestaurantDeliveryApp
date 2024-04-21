import { createAction, props } from '@ngrx/store';
import { RestaurantCustomer } from 'src/app/models/api/responses/Restaurant-response';

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
