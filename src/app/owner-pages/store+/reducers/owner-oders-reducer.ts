import { createReducer } from '@ngrx/store';

export interface OwnerOdersState {
  loading: boolean;
  loaded: boolean;
  serverError: string;
}

export const OWNER_ODERS_FEATURE_NAME = 'owner-oders-page';

export const initalState: OwnerOdersState = {
  loading: false,
  loaded: true,
  serverError: '',
};

export const OwnerOdersReducer = createReducer(initalState);
