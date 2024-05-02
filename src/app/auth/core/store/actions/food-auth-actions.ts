import { createAction, props } from '@ngrx/store';

export const isLogin = createAction(
  '[Auth] Is Login?',
  props<{ authData: any }>()
);

export const login = createAction(
  '[Auth] login',
  props<{ email: string; password: string }>()
);

export const loginSucess = createAction(
  '[Auth] login Sucess',
  props<{ token: string; message: string; role: string }>()
);

export const loginFailed = createAction(
  '[Auth] login Failed',
  props<{ serverError: string }>()
);

export const register = createAction(
  '[Auth] Register',
  props<{ fullName: string; email: string; password: string; role: string }>()
);

export const registerSucess = createAction(
  '[Auth] Register Sucess',
  props<{ jwt: string; message: string; role: string }>()
);

export const registerFailed = createAction(
  '[Auth] Register Failed',
  props<{ serverError: string }>()
);

export const logout = createAction('[Auth] logout');

export const logoutSucess = createAction('[Auth] logoutSucess');

export const initAuth = createAction('[Auth] init auth');

export const extractLoginData = createAction('[Auth] extract login data');
