import { createAction, props } from '@ngrx/store';
import { AdminCreateFoodRequest } from 'src/app/models/api/requests/admin/create-food-request';
import { OwnerFoodBase } from 'src/app/models/baseModals/foodOwnerBase';

export enum OwnerFoodTypes {
  CREATE_OWNER_FOOD = '[Owner Panel] create food',
  CREATE_OWNER_FOOD_SUCESS = '[Owner Panel] create food sucess',
  CREATE_OWNER_FOOD_FAILED = '[Owner Panel] create food failed',
  DELETE_OWNER_FOOD = '[Owner Panel] delete food',
  DELETE_OWNER_FOOD_SUCESS = '[Owner Panel] delete food sucess',
  DELETE_OWNER_FOOD_FAILED = '[Owner Panel] delete food failed',
  UPDATE_OWNER_AVAIBILITY_STATUS = '[Owner Panel] update owner avaibility status',
  UPDATE_OWNER_AVAIBILITY_STATUS_SUCESS = '[Owner Panel] update owner avaibility status sucess',
  UPDATE_OWNER_AVAIBILITY_STATUS_FAILED = '[Owner Panel] update owner avaibility status failed',
}

export const createOwnerFood = createAction(
  OwnerFoodTypes.CREATE_OWNER_FOOD,
  props<{ food: AdminCreateFoodRequest }>()
);

export const createOwnerFoodSucess = createAction(
  OwnerFoodTypes.CREATE_OWNER_FOOD_SUCESS,
  props<{ food: OwnerFoodBase }>()
);

export const createOwnerFoodFailed = createAction(
  OwnerFoodTypes.CREATE_OWNER_FOOD_FAILED,
  props<{ serverError: string }>()
);

export const deleteOwnerFood = createAction(
  OwnerFoodTypes.DELETE_OWNER_FOOD,
  props<{ foodId: number }>()
);

export const deleteOwnerFoodSucess = createAction(
  OwnerFoodTypes.DELETE_OWNER_FOOD_SUCESS,
  props<{ massage: string }>()
);

export const deleteOwnerFoodFaled = createAction(
  OwnerFoodTypes.DELETE_OWNER_FOOD_FAILED,
  props<{ serverError: string }>()
);

export const updateOwnerAvailableStatusFood = createAction(
  OwnerFoodTypes.UPDATE_OWNER_AVAIBILITY_STATUS,
  props<{ foodId: number }>()
);

export const updateOwnerAvailableStatusFoodSucess = createAction(
  OwnerFoodTypes.UPDATE_OWNER_AVAIBILITY_STATUS_SUCESS,
  props<{ food: OwnerFoodBase }>()
);

export const updateOwnerAvailableStatusFoodFailed = createAction(
  OwnerFoodTypes.UPDATE_OWNER_AVAIBILITY_STATUS_FAILED,
  props<{ serverError: string }>()
);
