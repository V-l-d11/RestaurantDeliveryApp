import { createAction, props } from '@ngrx/store';
import { OderRequest } from 'src/app/models/api/requests/oder-request';
import { OderResponse } from 'src/app/models/api/responses/oder-response';

export const createOder = createAction(
  '[User Panel] create oder',
  props<{ oder: OderRequest }>()
);

export const createOderSucess = createAction(
  '[User Panel] create oder sucess',
  props<{ obj: OderResponse }>()
);

export const createOderFailed = createAction(
  '[User Panel] create oder failed',
  props<{ serverError: string }>()
);

export const getOderHistory = createAction('[User Panel] get oder history');

export const getOderHistorySucess = createAction(
  '[User Panel] get oder hostory sucess',
  props<{ obj: OderResponse[] }>()
);

export const getOderHistoryFailed = createAction(
  '[User Panel] get oder history failed',
  props<{ serverError: string }>()
);
