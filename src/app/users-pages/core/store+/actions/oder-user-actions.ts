import { createAction, props } from '@ngrx/store';
import { OderRequest } from 'src/app/models/api/requests/oder-request';
import { Address } from 'src/app/models/api/responses/Restaurant-response';
import { OderResponse } from 'src/app/models/api/responses/oder-response';
import { PageableResponse } from 'src/app/models/baseModals/pagaeble';

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
  props<{ obj: PageableResponse<OderResponse> }>()
);

export const getOderHistoryFailed = createAction(
  '[User Panel] get oder history failed',
  props<{ serverError: string }>()
);

export const addActiveAddress = createAction(
  ///???
  '[User Panel] get active Address',
  props<{ obj: Address }>()
);
