import { createReducer, on } from '@ngrx/store';
import { OwnerOderBase } from 'src/app/models/baseModals/owerOderBase';
import * as oderActions from './../actions/actions-owner-oders';
import { PageableResponse } from 'src/app/models/baseModals/pagaeble';
import { OrderStatusSummaryResponse } from 'src/app/models/api/responses/admin/owner-oders-status-summary-response';
export interface OwnerOdersState {
  loading: boolean;
  loaded: boolean;
  serverError: string;
  oders: PageableResponse<OwnerOderBase>;
  previousDate: string | null;
  oderStatuses: OrderStatusSummaryResponse | '';
}

export const OWNER_ODERS_FEATURE_NAME = 'owner-oders-page';

export const initalState: OwnerOdersState = {
  loading: false,
  loaded: true,
  serverError: '',
  oders: {
    content: [],
    pageable: {
      sort: { empty: true, sorted: false, unsorted: true },
      offset: 0,
      pageSize: 10,
      pageNumber: 0,
      paged: true,
      unpaged: false,
    },
    totalElements: 0,
    totalPages: 0,
    size: 10,
    number: 0,
    sort: { empty: true, sorted: false, unsorted: true },
    first: true,
    last: true,
    numberOfElements: 0,
    empty: true,
  },
  previousDate: null,
  oderStatuses: '',
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
    oders: {
      ...state.oders,
      content: state.oders.content.map((el) =>
        el.id === item.id ? { ...el, oderStatus: item.oderStatus } : el
      ),
    },
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
    oders: {
      ...state.oders,
      content:
        state.oders instanceof Array
          ? []
          : state.oders.content.filter((el) => el.id !== oderId),
    },
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
    oders: items,
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
    //oders: items,
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
  })),
  on(oderActions.getOdersStatusSummary, (state) => ({
    ...state,
    loaded: false,
    loading: true,
  })),
  on(oderActions.getOdersStatusSummarySucess, (state, { item }) => ({
    ...state,
    loaded: true,
    loading: false,
    oderStatuses: item,
  })),
  on(oderActions.getOdersStatusSammaryFailed, (state, { serverError }) => ({
    ...state,
    loaded: true,
    loading: false,
    serverError,
  })),
  on(oderActions.getOdersFilterByTotalPrice, (state) => ({
    ...state,
    loaded: false,
    loading: true,
  })),
  on(oderActions.getOdersFilterByTotalPriceSucess, (state, { items }) => ({
    ...state,
    loaded: true,
    loading: false,
    oders: items,
  })),
  on(
    oderActions.getOdersFilterByTotalPriceFailed,
    (state, { serverError }) => ({
      ...state,
      loading: false,
      loaded: true,
      serverError,
    })
  )
);
