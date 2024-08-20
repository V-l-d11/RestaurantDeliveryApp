import { createAction, props } from '@ngrx/store';
import { AdminCreateFoodRequest } from 'src/app/models/api/requests/admin/create-food-request';
import { OwnerFoodFilterRequest } from 'src/app/models/api/requests/admin/food-filter-request';
import { OwnerFoodBase } from 'src/app/models/baseModals/foodOwnerBase';

export enum OwnerMenuFoodTypes {
  GET_OWNER_FOOD_FILTER = '[Owner Panel] get menu food filter',
  GET_OWNER_FOOD_FILTER_SUCESS = '[Owner Panel] get menu food filter sucess',
  GET_OWNER_FOOD_FILTER_FAILED = '[Owner Panel] get menu food filter filed',
  CREATE_OWNER_FOOD = '[Owner Panel] create food',
  CREATE_OWNER_FOOD_SUCESS = '[Owner Panel] create food sucess',
  CREATE_OWNER_FOOD_FAILED = '[Owner Panel] create food failed',
  DELETE_OWNER_FOOD = '[Owner Panel] delete food',
  DELETE_OWNER_FOOD_SUCESS = '[Owner Panel] delete food sucess',
  DELETE_OWNER_FOOD_FAILED = '[Owner Panel] delete food failed',
  UPDATE_OWNER_FOOD_AVAIBILITY_STATUS = '[Owner Panel] update food avaibility status',
  UPDATE_OWNER_FOOD_AVAIBILITY_STATUS_SUCESS = '[Owner Panel] update food avaibility status sucess',
  UPDATE_OWNER_FOOD_AVAIBILITY_STATUS_FAILED = '[Owner Panel] update food avaibility status failed',
}

export const getOwnerFoodFilter = createAction(
  OwnerMenuFoodTypes.GET_OWNER_FOOD_FILTER,
  props<{ restaurantId: number; filters: OwnerFoodFilterRequest[] }>()
);

export const getOwnerFoodFilterSucess = createAction(
  OwnerMenuFoodTypes.GET_OWNER_FOOD_FILTER_SUCESS,
  props<{ items: OwnerFoodBase[] }>()
);

export const getOwnerFoodFilterFailed = createAction(
  OwnerMenuFoodTypes.GET_OWNER_FOOD_FILTER_FAILED,
  props<{ serverError: string }>()
);

export const createOwnerFood = createAction(
  OwnerMenuFoodTypes.CREATE_OWNER_FOOD,
  props<{ item: AdminCreateFoodRequest }>()
);

export const createOwnerFoodSucess = createAction(
  OwnerMenuFoodTypes.CREATE_OWNER_FOOD_SUCESS,
  props<{ item: OwnerFoodBase }>()
);

export const createOwnerFoodFailed = createAction(
  OwnerMenuFoodTypes.CREATE_OWNER_FOOD_FAILED,
  props<{ serverError: string }>()
);

export const updateFoodAvailableStatus = createAction(
  OwnerMenuFoodTypes.UPDATE_OWNER_FOOD_AVAIBILITY_STATUS,
  props<{ foodId: number }>()
);

export const updateFoodAvailableStatusSucess = createAction(
  OwnerMenuFoodTypes.UPDATE_OWNER_FOOD_AVAIBILITY_STATUS_SUCESS,
  props<{ item: OwnerFoodBase }>()
);

export const updateFoodAvailableStatusFailed = createAction(
  OwnerMenuFoodTypes.UPDATE_OWNER_FOOD_AVAIBILITY_STATUS_FAILED,
  props<{ serverError: string }>()
);

export const deletedFood = createAction(
  OwnerMenuFoodTypes.DELETE_OWNER_FOOD,
  props<{ foodId: number }>()
);

export const deletedFoodSucess = createAction(
  OwnerMenuFoodTypes.DELETE_OWNER_FOOD_SUCESS,
  props<{ foodId: number }>()
);

export const deletedFoodFailed = createAction(
  OwnerMenuFoodTypes.DELETE_OWNER_FOOD_FAILED,
  props<{ serverError: string }>()
);
