import { createAction, props } from '@ngrx/store';
import { OwnerOderBase } from 'src/app/models/baseModals/owerOderBase';

export enum OwnerOdersTypes {
  GET_OWNER_ODER_HISTORY = '[Owner panel] get oder history',
  GET_OWNER_ODER_HISTORY_SUCESS = '[Owner Panel] get oder history sucess',
  GET_OWNER_ODER_HISTORY_FAILED = '[Owner Panel] get oder history  failed',
  UPDATE_OWNER_ODER_STATUS = '[Owner Panel] update oder status',
  UPDATE_OWNER_ODER_STATUS_SUCESS = '[Owner Panel] update oder status sucess',
  UPDATE_OWNER_ODER_STATUS_FAILED = '[Owner Panel] update oder status failed',
}

export const getOwnerHistoryOders = createAction(
  OwnerOdersTypes.GET_OWNER_ODER_HISTORY,
  props<{ oderStatus: string }>()
);

export const getOwnerHistoryOdersSucess = createAction(
  OwnerOdersTypes.GET_OWNER_ODER_HISTORY_SUCESS,
  props<{ items: OwnerOderBase[] }>()
);

export const getOwnerHistoryFailed = createAction(
  OwnerOdersTypes.GET_OWNER_ODER_HISTORY_FAILED,
  props<{ serverError: string }>()
);

export const updateOwnerOderStatus = createAction(
  OwnerOdersTypes.UPDATE_OWNER_ODER_STATUS,
  props<{ oderStatus: string }>()
);

export const updateOwnerOderStatusSucess = createAction(
  OwnerOdersTypes.UPDATE_OWNER_ODER_STATUS_SUCESS,
  props<{ item: OwnerOderBase }>()
);

export const updateOwnerOderStatusFailed = createAction(
  OwnerOdersTypes.UPDATE_OWNER_ODER_STATUS_FAILED,
  props<{ serverError: string }>()
);
