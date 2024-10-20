import { createReducer, on } from '@ngrx/store';
import { OderResponse } from 'src/app/models/api/responses/oder-response';
import * as OderActions from './../actions/oder-user-actions';
import { Address } from 'src/app/models/api/responses/Restaurant-response';

export interface UserOderslState {
  oder: OderResponse | null;
  odersList: OderResponse[] | null;
  activeAddress: Address | null; ///???
  loading: boolean;
  loaded: boolean;
  serverError: string;
}

export const USER_ODERS_FEATURE_NAME = 'oders';

export const initalState: UserOderslState = {
  oder: null,
  odersList: null,
  loading: false,
  loaded: true,
  serverError: '',
  activeAddress: null,
};

export const OdersReducerUser = createReducer(
  initalState,
  on(OderActions.createOder, (state) => ({
    ...state,
    loading: true,
    loaded: false,
  })),
  on(OderActions.createOderSucess, (state, { obj }) => ({
    ...state,
    loading: false,
    loaded: true,
    oder: obj,
  })),
  on(OderActions.createOderFailed, (state, { serverError }) => ({
    ...state,
    loading: false,
    loaded: true,
    serverError,
  })),
  on(OderActions.getOderHistory, (state) => ({
    ...state,
    loading: true,
    loaded: false,
  })),
  on(OderActions.getOderHistorySucess, (state, { obj }) => ({
    ...state,
    loading: false,
    loaded: true,
    odersList: obj.content,
  })),
  on(OderActions.getOderHistoryFailed, (state, { serverError }) => ({
    ...state,
    loading: false,
    loaded: true,
    serverError,
  })),
  on(OderActions.addActiveAddress, (state, { obj }) => ({
    /// ???
    ...state,
    activeAddress: obj,
  }))
);
