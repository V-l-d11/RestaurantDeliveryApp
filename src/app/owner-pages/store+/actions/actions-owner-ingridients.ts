import { createAction, props } from '@ngrx/store';
import { CreateIngridItemRequest } from 'src/app/models/api/requests/admin/create-ingridients-item-request';
import { createIngridCategRequest } from 'src/app/models/api/requests/admin/create-ingrieitns-category-request';
import { createIngridnetCategoryResponse } from 'src/app/models/api/responses/admin/admin-create-ingridient-category-response';
import { GetRestaurantIngridCategoryResponse } from 'src/app/models/api/responses/admin/get-restaurnat-igrid-category-response';
import { IngridientsItemBase } from 'src/app/models/baseModals/ingridientsItemBase';

export enum OwnerIngridientsTypes {
  CREATE_OWNER_INGRIDIENTS_CATEGORY = '[Owner Panel] create ingridients category',
  CREATE_OWNER_INGRIDIENTS_CATEGORY_SUCESS = '[Owner Panel] create ingridients category sucess',
  CREATE_OWNER_INGRIDIENTS_CATEGORY_FAILED = '[Owner Panel] create ingridients category failed',
  CREATE_OWNER_INGRIDIENTS_ITEM = '[Owner Panel] create ingridients item',
  CREATE_OWNER_INGRIDIENTS_ITEM_SICESS = '[Owner Panel] create ingridients item sucess',
  CREATE_OWNER_INGRIDIENTS_ITEM_FAILED = '[Owner Panel] create ingridients item failed',
  UPDATE_OWNER_INGRIDIENT_STOCK = '[Owner Panel] update ingridient item  stock',
  UPDATE_OWNER_INGRIDIENT_STOCK_SUCESS = '[Owner Panel] update ingridient item stock sucess',
  UPDATE_OWNER_INGRIDIENT_STOCK_FAILED = '[Owner Panel] update ingridient   item  stock failed',
  GET_OWNER_RESTAURANT_INGRIDIENTS = '[Owner Panel] get ingridients from restaurant',
  GET_OWNER_RESTAURANT_INGRIDIENTS_SUCESS = '[Owner Panel] get ingridients from restaurant sucess',
  GET_OWNER_RESTAURANT_INGRIDIENTS_FAILED = '[Owner Panel] get ingridients from restaurant failed',
  GET_OWNER_RESTAURANT_INGRIDIENTS_CATEGORY = '[Owner Panel] get ingridients categories from restaurant',
  GET_OWNER_RESTAURANT_INGRIDIENTS_CATEGORY_SUCESS = '[Owner Panel] get ingridients categories from restaurant sucess',
  GET_OWNER_RESTAURANT_INGRIDIENTS_CATEGORY_FAILED = '[Owner Panel] get ingridients categories from restaurant failed',
}

export const createOwnerIngridCategoty = createAction(
  OwnerIngridientsTypes.CREATE_OWNER_INGRIDIENTS_CATEGORY,
  props<{ item: createIngridCategRequest }>()
);

export const createOwnerIngridCategorySucess = createAction(
  OwnerIngridientsTypes.CREATE_OWNER_INGRIDIENTS_CATEGORY_SUCESS,
  props<{ item: createIngridnetCategoryResponse }>()
);

export const createOwnerIngridCategoryFailed = createAction(
  OwnerIngridientsTypes.CREATE_OWNER_INGRIDIENTS_CATEGORY_FAILED,
  props<{ serverError: string }>()
);

export const createOwnerIngridItem = createAction(
  OwnerIngridientsTypes.CREATE_OWNER_INGRIDIENTS_ITEM,
  props<{ item: CreateIngridItemRequest }>()
);

export const createOwnerIngridItemSucess = createAction(
  OwnerIngridientsTypes.CREATE_OWNER_INGRIDIENTS_ITEM_SICESS,
  props<{ item: IngridientsItemBase }>()
);

export const createOwnerIngirdItemFailed = createAction(
  OwnerIngridientsTypes.CREATE_OWNER_INGRIDIENTS_ITEM_FAILED,
  props<{ serverError: string }>()
);

export const updateIngridientStock = createAction(
  OwnerIngridientsTypes.UPDATE_OWNER_INGRIDIENT_STOCK,
  props<{ igridientId: number }>()
);

export const updateIngridientStockSucess = createAction(
  OwnerIngridientsTypes.UPDATE_OWNER_INGRIDIENT_STOCK_SUCESS,
  props<{ item: IngridientsItemBase }>()
);

export const updateIngridientStockFailed = createAction(
  OwnerIngridientsTypes.UPDATE_OWNER_INGRIDIENT_STOCK_FAILED,
  props<{ serverError: string }>()
);

export const getRestaurantIngridients = createAction(
  OwnerIngridientsTypes.GET_OWNER_RESTAURANT_INGRIDIENTS,
  props<{ restaurantId: number }>()
);

export const getRestaurantIngridientsSucess = createAction(
  OwnerIngridientsTypes.GET_OWNER_RESTAURANT_INGRIDIENTS_SUCESS,
  props<{ items: IngridientsItemBase[] }>()
);

export const getRestaurantIngridientsFailed = createAction(
  OwnerIngridientsTypes.GET_OWNER_RESTAURANT_INGRIDIENTS_FAILED,
  props<{ serverError: string }>()
);

export const getRestaurantIngridCategory = createAction(
  OwnerIngridientsTypes.GET_OWNER_RESTAURANT_INGRIDIENTS_CATEGORY,
  props<{ restaurantId: number }>()
);

export const getRestaurantIgridCategorySucess = createAction(
  OwnerIngridientsTypes.GET_OWNER_RESTAURANT_INGRIDIENTS_CATEGORY_SUCESS,
  props<{ items: GetRestaurantIngridCategoryResponse[] }>()
);

export const getRestaurantIgridCategoryFailed = createAction(
  OwnerIngridientsTypes.GET_OWNER_RESTAURANT_INGRIDIENTS_CATEGORY_FAILED,
  props<{ serverError: string }>()
);
