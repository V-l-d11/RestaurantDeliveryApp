import { createAction, props } from '@ngrx/store';

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

export const logout = createAction('[Auth] logout');

export const logoutSucess = createAction('[Auth] logoutSucess');
