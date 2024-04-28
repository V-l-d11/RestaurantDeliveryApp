import { createAction, props } from '@ngrx/store';
import { FoodSearchResponse } from 'src/app/models/api/responses/Food-search-response';
import { RestaurantCustomer } from 'src/app/models/api/responses/Restaurant-response';
import { ingridientsCategory } from 'src/app/models/api/responses/ingridients-category-from-restaurant';
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

export const getFilterFoodRadio = createAction(
  '[Restaurant Customer page] get Filter Food Radio ',
  props<{
    restaurantId: number;
    vegeterian?: boolean;
    seasonal?: boolean;
    nonveg?: boolean;
    foodCategory: string;
  }>()
);

export const getFilterFoodRadioSucess = createAction(
  '[Restaurant Customer page] get Filter Food Radio Sucess',
  props<{ obj: FoodSearchResponse[] }>()
);

export const getFilterFoodRadioFailed = createAction(
  '[Restaurant Customer page] get Filter Food Radio Failed',
  props<{ serverError: string }>()
);

export const getIngridientsCategoriesRestaurant = createAction(
  '[Restaurant Customer page] get Ingridient Category from Restaurant',
  props<{ id: number }>()
);

export const getIngridientsCategoriesRestaurantSucess = createAction(
  '[Restaurant Customer page]  get Ingridient Category from Restaurant Sucess',
  props<{ obj: ingridientsCategory[] }>()
);

export const getIngridientsCategoriesRestaurantFailed = createAction(
  '[Restaurant Customer page]  get Ingridient Category from Restaurant Failed',
  props<{ serverError: string }>()
);
