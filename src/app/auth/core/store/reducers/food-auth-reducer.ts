import { createReducer, on } from '@ngrx/store';
import { AuthState } from 'src/app/models/storeModels/authModels';
import { login, loginFailed, loginSucess } from '../actions/food-auth-actions';

export const FOOD_AUTH_FEATURE_NAME = 'auth';

export const initialState: AuthState = {
  loading: false,
  loaded: false,
  serverError: '',
  authData: {
    token: '',
    message: '',
    role: '',
  },
};

export const AuthReducer = createReducer(
  initialState,
  on(login, (state) => ({
    ...state,
    loading: true,
    loaded: false,
  })),
  on(loginSucess, (state, { token, message, role }) => ({
    ...state,
    loading: false,
    loaded: true,
    authData: {
      token,
      message,
      role,
    },
  })),
  on(loginFailed, (state, { serverError }) => ({
    ...state,
    authData: null,
    serverError,
    loading: false,
    loaded: true,
  }))
);
