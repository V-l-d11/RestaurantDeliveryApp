import { createReducer, on } from '@ngrx/store';
import { OwnerOderBase } from 'src/app/models/baseModals/owerOderBase';
import * as oderActions from './../actions/actions-owner-oders';
export interface OwnerOdersState {
  loading: boolean;
  loaded: boolean;
  serverError: string;
  oders: OwnerOderBase[];
  previousDate: string | null;
}

export const OWNER_ODERS_FEATURE_NAME = 'owner-oders-page';

export const initalState: OwnerOdersState = {
  loading: false,
  loaded: true,
  serverError: '',
  oders: [],
  previousDate: null,
};

export const OwnerOdersReducer = createReducer(
  initalState,
  on(oderActions.getOwnerHistoryOders, (state) => ({
    ...state,
    loaded: false,
    loading: true,
  })),
  on(oderActions.getOwnerHistoryOdersSucess, (state, { items }) => ({
    ...state,
    loaded: true,
    loading: false,
    oders: items,
  })),
  on(oderActions.getOwnerHistoryFailed, (state, { serverError }) => ({
    ...state,
    loaded: true,
    loading: false,
    serverError,
  })),
  on(oderActions.updateOwnerOderStatus, (state) => ({
    ...state,
    loaded: false,
    loading: true,
  })),
  on(oderActions.updateOwnerOderStatusSucess, (state, { item }) => ({
    ...state,
    loaded: true,
    loading: false,
    oders: state.oders.map((el) =>
      el.id === item.id ? { ...el, oderStatus: item.oderStatus } : el
    ),
  })),
  on(oderActions.updateOwnerOderStatusFailed, (state, { serverError }) => ({
    ...state,
    loaded: true,
    loading: false,
    serverError,
  })),
  on(oderActions.deleteOder, (state) => ({
    ...state,
    loaded: false,
    loading: true,
  })),
  on(oderActions.deleteOderSucess, (state, { oderId }) => ({
    ...state,
    loading: false,
    loaded: true,
    oders: state.oders.filter((el) => el.id !== oderId),
  })),
  on(oderActions.delteOderFailed, (state, { serverError }) => ({
    ...state,
    loaded: true,
    loading: false,
    serverError,
  })),
  on(oderActions.getOdersCreateAt, (state, { createAt }) => ({
    ...state,
    loaded: false,
    loading: true,
    previousDate: createAt,
  })),
  on(oderActions.getOdersCreateAtSucess, (state, { items }) => ({
    ...state,
    loading: false,
    loaded: true,
    //    oders: items,
  })),
  on(oderActions.getOdersCreateAtFailed, (state, { serverError }) => ({
    ...state,
    loaded: true,
    loading: false,
    serverError,
  })),
  on(oderActions.getOdersRangeDate, (state) => ({
    ...state,
    loaded: false,
    loading: true,
  })),
  on(oderActions.getOdersRangeDateSucess, (state, { items }) => ({
    ...state,
    loaded: true,
    loading: false,
    oders: items,
  })),
  on(oderActions.getOdersRangeDateFailed, (state, { serverError }) => ({
    ...state,
    loaded: true,
    loading: false,
    serverError,
  })),
  on(oderActions.getOdersByCustomer, (state) => ({
    ...state,
    loaded: false,
    loading: true,
  })),
  on(oderActions.getOdersByCustomerSucess, (state, { items }) => ({
    ...state,
    loaded: true,
    loading: false,
    oders: items,
  })),
  on(oderActions.getOdersByCustomerFailed, (state, { serverError }) => ({
    ...state,
    loaded: true,
    loading: false,
    serverError,
  }))
);
