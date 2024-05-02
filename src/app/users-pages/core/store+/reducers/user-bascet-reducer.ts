import { createReducer, on } from '@ngrx/store';
import {
  AddCardItemResponse,
  Card,
  CardItem,
} from 'src/app/models/api/responses/add-card-item-users-response';
import * as basketActions from './../actions/user-panel-actions';

export interface BascetSate {
  loading: boolean;
  loaded: boolean;
  serverError: string;
  card: Card | null;
  cardItem: CardItem | null;
  mainCard: AddCardItemResponse | null;
}

export const USER_BASCET_FEATURE_NAME = 'bascet';

export const initalState: BascetSate = {
  loading: false,
  loaded: true,
  serverError: '',
  card: null,
  cardItem: null,
  mainCard: null,
};

export const BascetReducer = createReducer(
  initalState,
  on(basketActions.addItemToCard, (state) => ({
    ...state,
    loading: true,
    loaded: false,
  })),
  on(basketActions.addItemToCardSucess, (state, { obj }) => ({
    ...state,
    loaded: true,
    loading: false,
    mainCard: obj,
  })),
  on(basketActions.addItemToCardFailed, (state, { serverError }) => ({
    ...state,
    loading: false,
    loaded: true,
    serverError,
  })),
  on(basketActions.findUserCard, (state) => ({
    ...state,
    loading: true,
    loaded: false,
  })),
  on(basketActions.findUserCardSucess, (state, { obj }) => ({
    ...state,
    loading: false,
    loaded: true,
    card: obj,
  })),
  on(basketActions.findUserCardFailed, (state, { serverError }) => ({
    ...state,
    loading: false,
    loaded: true,
    serverError,
  })),
  on(basketActions.clearCard, (state) => ({
    ...state,
    loading: true,
    loaded: false,
  })),
  on(basketActions.clearCardSucess, (state, { obj }) => ({
    ...state,
    loading: false,
    loaded: true,
    card: obj,
  })),
  on(basketActions.clearCardFailed, (state, { serverError }) => ({
    ...state,
    loading: false,
    loaded: true,
    serverError,
  })),
  on(basketActions.removeCardItem, (state) => ({
    ...state,
    loading: true,
    loaded: false,
  })),
  on(basketActions.removeCardItemSucess, (state, { obj }) => ({
    ...state,
    loading: false,
    loaded: true,
    card: obj,
  })),
  on(basketActions.removeCardItemFailed, (state, { serverError }) => ({
    ...state,
    loading: false,
    loaded: true,
    serverError,
  })),
  on(basketActions.updateCardItemSucess, (state) => ({
    ...state,
    loading: true,
    loaded: false,
  })),
  on(basketActions.updateCardItemSucess, (state, { obj }) => ({
    ...state,
    loading: false,
    loaded: true,
    card: state.card
      ? {
          ...state.card,
          cardItem: obj,
        }
      : state.card,
  })),
  on(basketActions.updateCardItemFailed, (state, { serverError }) => ({
    ...state,
    loaded: true,
    loading: false,
    serverError,
  }))
);
