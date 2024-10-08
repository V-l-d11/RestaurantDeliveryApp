import { createAction, props } from '@ngrx/store';
import { FiltersCustomerSingleRestaurantFood } from 'src/app/models/api/requests/filtersCustomerSingleRestaurantFood';
import { RestaurantListByFiltersRequest } from 'src/app/models/api/requests/restaurants-list-by-filters-customer';
import { FoodSearchResponse } from 'src/app/models/api/responses/Food-search-response';
import { RestaurantCustomer } from 'src/app/models/api/responses/Restaurant-response';
import { RestaurantDto } from 'src/app/models/api/responses/favorites';
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

export const getFilterFoodSingleRestaurant = createAction(
  '[Restaurant Customer page] get Filter fitlers Single Restaurant Radio ',
  props<{ obj: FiltersCustomerSingleRestaurantFood }>()
);

export const getFilterFoodSingleRestaurantSucess = createAction(
  '[Restaurant Customer page] get Filter Food fitlers Single Restaurant Sucess',
  props<{ obj: FoodSearchResponse[] }>()
);

export const getFilterFoodSingleRestaurantFailed = createAction(
  '[Restaurant Customer page] get Filter Food fitlers Single Restaurant Failed',
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

export const getRestaurantsByFilters = createAction(
  '[Restaurant Customer page] getRestaurantsByFilters ',
  props<{ obj: RestaurantListByFiltersRequest }>()
);

export const getRestaurantsByFiltersSucess = createAction(
  '[Restaurant Customer page] getRestaurantsByFilters sucess',
  props<{ items: RestaurantCustomer[] }>()
);

export const getRestaurantsByFiltersFailed = createAction(
  '[Restaurant Customer page] getRestaurantsByFilters failed',
  props<{ serverError: string }>()
);

export const getAllCuisineTypes = createAction(
  '[Restaurant Customer page] get All Cuisine types'
);

export const getAllCuisineTypesSucess = createAction(
  '[Restaurant Customer page] get All Cuisine types sucess',
  props<{ items: Array<string> }>()
);

export const getAllCuisineTypesFailed = createAction(
  '[Restaurant Customer page] get All Cuisine types failed',
  props<{ serverError: string }>()
);
