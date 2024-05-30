import { createAction, props } from '@ngrx/store';
import { AdminCreateRestaurantRequest } from 'src/app/models/api/requests/admin/create-restaurant-request';
import { AdminRestaurantResponse } from 'src/app/models/api/responses/admin/admin-restaurant';
import { OwnerRestaurantBase } from 'src/app/models/baseModals/restaurantOwnerbase';

export enum OwnerDashboardTypes {
  GET_OWNER_RESTUARNT = '[Owner Panel] get retsaurnat',
  GET_OWNER_RESTUARNT_SUCESS = '[Owner Panel] get restaurant sucess',
  GET_OWNER_RESTAURANT_FAILED = '[Owner Panel] get restaurant failed',
  DELETE_OWNER_RESTAURANT = '[Owner Panel] delete restauant',
  DELETE_OWNER_RESTAURANT_SUCESS = '[Owner Panel] delete restauant sucess',
  DELETE_OWNER_RESTAURANT_FAILED = '[Owner Panel] delete restauant failed',
  UPDATE_OWNER_RESTAURANT_STATUS = '[Owner Panel] update restaurant status',
  UPDATE_OWNER_RESTAURANT_STATUS_SUCESS = '[Owner Panel] update restaurant status sucess',
  UPDATE_OWNER_RESTAURANT_STATUS_FAILED = '[Owner Panel] update restaurant status failed',
  UPDATE_OWNER_RESTAURANT = '[Owner Panel] update restaurant',
  UPDATE_OWNER_RESTAURANT_SUCESS = '[Owner Panel] update restaurant sucess',
  UPDATE_OWNER_RESTAURANT_FAILED = '[Owner Panel] update restaurant failed',
  CREATE_OWNER_RESTAURANT = '[Owner Panel] create restaurant',
  CREATE_OWNER_RESTAURANT_SUCESS = '[Owner Panel] create restaurant sucess',
  CREATE_OWNER_RESTAURANT_FAILED = '[Owner Panel] create restaurant failed',
  FIND_OWNER_RESTAURANT = '[Owner Panel] find restaurant by user id',
  FIND_OWNER_RESTAURANT_SUCESS = '[Owner Panel] find restaurant by user id sucess',
  FIND_OWNER_RESTAURANT_FILED = '[Owner Panel] find restaurant by user id failed',
}

export const getOwnerRestaurant = createAction(
  OwnerDashboardTypes.GET_OWNER_RESTAURANT_FAILED
);

export const getOwnerRestaurantSucess = createAction(
  OwnerDashboardTypes.CREATE_OWNER_RESTAURANT_SUCESS,
  props<{ item: AdminRestaurantResponse }>()
);

export const getOwnerRestaurantFailed = createAction(
  OwnerDashboardTypes.GET_OWNER_RESTAURANT_FAILED,
  props<{ serverError: string }>()
);

export const createOnwerRestaurant = createAction(
  OwnerDashboardTypes.CREATE_OWNER_RESTAURANT,
  props<{ item: AdminCreateRestaurantRequest }>()
);

export const createOnwerRestaurantSucess = createAction(
  OwnerDashboardTypes.CREATE_OWNER_RESTAURANT_SUCESS,
  props<{ item: OwnerRestaurantBase }>()
);

export const createOwnerRestaurantFailed = createAction(
  OwnerDashboardTypes.CREATE_OWNER_RESTAURANT_FAILED,
  props<{ serverError: string }>()
);

export const updateRestaurantStatus = createAction(
  OwnerDashboardTypes.UPDATE_OWNER_RESTAURANT_STATUS,
  props<{ restaurantId: number }>()
);

export const updateRestaurantStatusSucess = createAction(
  OwnerDashboardTypes.UPDATE_OWNER_RESTAURANT_STATUS_SUCESS,
  props<{ item: OwnerRestaurantBase }>()
);

export const updateRestaurantStatusFailed = createAction(
  OwnerDashboardTypes.UPDATE_OWNER_RESTAURANT_STATUS_FAILED,
  props<{ serverError: string }>()
);

export const updateOwerRestaurant = createAction(
  OwnerDashboardTypes.UPDATE_OWNER_RESTAURANT,
  props<{ item: AdminCreateRestaurantRequest }>()
);

export const updateOwnerRestaurantSucess = createAction(
  OwnerDashboardTypes.UPDATE_OWNER_RESTAURANT_SUCESS,
  props<{ item: OwnerRestaurantBase }>()
);

export const updateOwnerRestaurantFailed = createAction(
  OwnerDashboardTypes.UPDATE_OWNER_RESTAURANT_FAILED,
  props<{ serverError: string }>()
);

export const deleteRestaurant = createAction(
  OwnerDashboardTypes.DELETE_OWNER_RESTAURANT,
  props<{ restaurantId: number }>()
);

export const deleteRestaurantSucess = createAction(
  OwnerDashboardTypes.DELETE_OWNER_RESTAURANT_SUCESS,
  props<{ massage: string }>()
);

export const deleteRestaurantFailed = createAction(
  OwnerDashboardTypes.DELETE_OWNER_RESTAURANT_FAILED,
  props<{ serverError: string }>()
);

export const findRestaurant = createAction(
  OwnerDashboardTypes.FIND_OWNER_RESTAURANT
);

export const findRestaurantSucess = createAction(
  OwnerDashboardTypes.FIND_OWNER_RESTAURANT_SUCESS,
  props<{ item: OwnerRestaurantBase }>()
);

export const findRestaurantFailed = createAction(
  OwnerDashboardTypes.FIND_OWNER_RESTAURANT_FILED,
  props<{ serverError: string }>()
);
