import { createAction, props } from '@ngrx/store';
import { OrderStatusSummaryResponse } from 'src/app/models/api/responses/admin/owner-oders-status-summary-response';
import { OderFilterPriceOwner } from 'src/app/models/baseModals/objectFilterPriceOder';
import { OwnerOderBase } from 'src/app/models/baseModals/owerOderBase';
import { PageableResponse } from 'src/app/models/baseModals/pagaeble';

export enum OwnerOdersTypes {
  GET_OWNER_ODER_HISTORY = '[Owner panel] get oder history',
  GET_OWNER_ODER_HISTORY_SUCESS = '[Owner Panel] get oder history sucess',
  GET_OWNER_ODER_HISTORY_FAILED = '[Owner Panel] get oder history  failed',
  UPDATE_OWNER_ODER_STATUS = '[Owner Panel] update oder status',
  UPDATE_OWNER_ODER_STATUS_SUCESS = '[Owner Panel] update oder status sucess',
  UPDATE_OWNER_ODER_STATUS_FAILED = '[Owner Panel] update oder status failed',
  DELETE_OWNER_ODER = '[Owner Panle] delete order',
  DELETE_OWNER_ODER_SUCESS = '[Owner Panel] delte order sucess',
  DELETE_OWNER_ODER_FAILED = '[Owner Panel] delte oder failed',
  GET_OWNER_ODER_DATE_CREATE_AT = '[Owner Panel] get owner oder create at',
  GET_OWNER_ODER_DATE_CREATE_AT_SUCESS = '[Owner Panel] get owner oder create at sucess',
  GET_OWNER_ODER_DATE_CREATE_AT_FAILED = '[Owner Pane;] get owner oder create at failed',
  GET_OWNER_ODER_RANGE_DATE = '[Owner Panel] get owner oder range date',
  GET_OWNER_ODER_RANGE_DATE_SUCESS = '[Owner Panel] get owner oder range date sucess',
  GET_OWNER_ODER_RANGE_DATE_FAILED = '[Owner Panel] get owner oder range date failed',
  GET_OWNER_ODER_BY_CUSTOMER = '[Owner Panel] get owner oder by customer',
  GET_OWNER_ODER_BY_CUSTOMER_SUCESS = '[Owner Panel] get owner oder by customer sucess',
  GET_OWNER_ODER_BY_CUSTOMER_FAILED = '[Owner Panel] get owner oder by customer failed',
  GET_OWNER_ODERS_STATUS_SUMMARY = '[Owner Panel] get owner oders summary status',
  GET_OWNER_ODERS_STATUS_SUMMARY_SUCESS = '[Owner Panel] get owner oders summary status sucess',
  GET_OWNER_ODERS_STATUS_SUMMARY_FAILED = '[Owner Panel] get owner oders summary status failed',
  GET_OWNER_ODERS_FILTER_BY_TOTAL_PRICE = '[Owner Panel] get owner oders by total price',
  GET_OWNER_ODERS_FILTER_BY_TOTAL_PRICE_SUCESS = '[Owner Panel] get owner oders by total price sucess',
  GET_OWNER_ODERS_FILTER_BY_TOTAL_PRICE_FAILED = '[Owner Panel] get owner oders by total price failed',
}

export const getOwnerHistoryOders = createAction(
  OwnerOdersTypes.GET_OWNER_ODER_HISTORY,
  props<{ restaurantId: number; oderStatus?: string }>()
);

export const getOwnerHistoryOdersSucess = createAction(
  OwnerOdersTypes.GET_OWNER_ODER_HISTORY_SUCESS,
  props<{ items: PageableResponse<OwnerOderBase> }>()
);

export const getOwnerHistoryFailed = createAction(
  OwnerOdersTypes.GET_OWNER_ODER_HISTORY_FAILED,
  props<{ serverError: string }>()
);

export const updateOwnerOderStatus = createAction(
  OwnerOdersTypes.UPDATE_OWNER_ODER_STATUS,
  props<{ oderId: number; oderStatus: string }>()
);

export const updateOwnerOderStatusSucess = createAction(
  OwnerOdersTypes.UPDATE_OWNER_ODER_STATUS_SUCESS,
  props<{ item: OwnerOderBase }>()
);

export const updateOwnerOderStatusFailed = createAction(
  OwnerOdersTypes.UPDATE_OWNER_ODER_STATUS_FAILED,
  props<{ serverError: string }>()
);

export const deleteOder = createAction(
  OwnerOdersTypes.DELETE_OWNER_ODER,
  props<{ oderId: number }>()
);

export const deleteOderSucess = createAction(
  OwnerOdersTypes.DELETE_OWNER_ODER_SUCESS,
  props<{ oderId: number }>()
);

export const delteOderFailed = createAction(
  OwnerOdersTypes.DELETE_OWNER_ODER_FAILED,
  props<{ serverError: string }>()
);

export const getOdersCreateAt = createAction(
  OwnerOdersTypes.GET_OWNER_ODER_DATE_CREATE_AT,
  props<{ createAt: string }>()
);

export const getOdersCreateAtSucess = createAction(
  OwnerOdersTypes.GET_OWNER_ODER_DATE_CREATE_AT_SUCESS,
  props<{ items: PageableResponse<OwnerOderBase> }>()
);

export const getOdersCreateAtFailed = createAction(
  OwnerOdersTypes.GET_OWNER_ODER_DATE_CREATE_AT_FAILED,
  props<{ serverError: string }>()
);

export const getOdersRangeDate = createAction(
  OwnerOdersTypes.GET_OWNER_ODER_RANGE_DATE,
  props<{ startDate: string; endDate: string }>()
);

export const getOdersRangeDateSucess = createAction(
  OwnerOdersTypes.GET_OWNER_ODER_RANGE_DATE_FAILED,
  props<{ items: OwnerOderBase[] }>()
);

export const getOdersRangeDateFailed = createAction(
  OwnerOdersTypes.GET_OWNER_ODER_RANGE_DATE_FAILED,
  props<{ serverError: string }>()
);

export const getOdersByCustomer = createAction(
  OwnerOdersTypes.GET_OWNER_ODER_BY_CUSTOMER,
  props<{ fullName: string }>()
);

export const getOdersByCustomerSucess = createAction(
  OwnerOdersTypes.GET_OWNER_ODER_BY_CUSTOMER_SUCESS,
  props<{ items: PageableResponse<OwnerOderBase> }>()
);

export const getOdersByCustomerFailed = createAction(
  OwnerOdersTypes.GET_OWNER_ODER_BY_CUSTOMER_FAILED,
  props<{ serverError: string }>()
);

export const getOdersStatusSummary = createAction(
  OwnerOdersTypes.GET_OWNER_ODERS_STATUS_SUMMARY,
  props<{ restaurantId: number }>()
);

export const getOdersStatusSummarySucess = createAction(
  OwnerOdersTypes.GET_OWNER_ODERS_STATUS_SUMMARY_SUCESS,
  props<{ item: OrderStatusSummaryResponse }>()
);

export const getOdersStatusSammaryFailed = createAction(
  OwnerOdersTypes.GET_OWNER_ODERS_STATUS_SUMMARY_FAILED,
  props<{ serverError: string }>()
);

export const getOdersFilterByTotalPrice = createAction(
  OwnerOdersTypes.GET_OWNER_ODERS_FILTER_BY_TOTAL_PRICE,
  props<{ obj: OderFilterPriceOwner }>()
);

export const getOdersFilterByTotalPriceSucess = createAction(
  OwnerOdersTypes.GET_OWNER_ODERS_FILTER_BY_TOTAL_PRICE_SUCESS,
  props<{ items: PageableResponse<OwnerOderBase> }>()
);

export const getOdersFilterByTotalPriceFailed = createAction(
  OwnerOdersTypes.GET_OWNER_ODERS_FILTER_BY_TOTAL_PRICE_FAILED,
  props<{ serverError: string }>()
);
