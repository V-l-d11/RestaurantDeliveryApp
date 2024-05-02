import { createReducer, on } from '@ngrx/store';
import { AuthState } from 'src/app/models/storeModels/authModels';
import {
  isLogin,
  login,
  loginFailed,
  loginSucess,
  logout,
  logoutSucess,
  register,
  registerFailed,
  registerSucess,
} from '../actions/food-auth-actions';

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
  fullName: '',
  email: '',
  password: '',
  role: '',
};

export const AuthReducer = createReducer(
  initialState,
  on(isLogin, (state, { authData }) => ({
    ...state,
    authData: authData,
  })),
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
    serverError,
    loading: false,
    loaded: true,
  })),
  on(logout, (state) => ({
    ...state,
    loading: true,
    loaded: false,
  })),
  on(logoutSucess, (state) => ({
    ...state,
    loading: false,
    loaded: true,
  })),
  on(register, (state, { fullName, email, password, role }) => ({
    ...state,
    fullName,
    email,
    password,
    role,
    loading: true,
    loaded: false,
  })),
  on(registerSucess, (state, { jwt, message, role }) => ({
    ...state,
    authData: {
      token: jwt,
      message,
      role,
    },
    loading: false,
    loaded: true,
  })),
  on(registerFailed, (state, { serverError }) => ({
    ...state,
    serverError,
    loading: false,
    loaded: true,
  }))
);
