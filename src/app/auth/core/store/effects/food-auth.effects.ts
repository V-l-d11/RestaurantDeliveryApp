import { Injectable } from '@angular/core';
import { Actions, act, createEffect, ofType } from '@ngrx/effects';
import { FoodAuthServiceService } from '../../services/food-auth-service.service';
import { Store, select } from '@ngrx/store';
import { Router } from '@angular/router';
import * as AuthActions from './../actions/food-auth-actions';
import {
  catchError,
  distinctUntilChanged,
  filter,
  fromEvent,
  map,
  of,
  skip,
  switchMap,
  tap,
} from 'rxjs';
import { AuthData } from 'src/app/models/storeModels/authModels';
import { getAuthData } from '../selectors/food-auth-selectors';

@Injectable()
export class FoodAuthEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.login),
      switchMap((action) =>
        this.authService
          .login({ email: action.email, password: action.password })
          .pipe(
            map((response) =>
              AuthActions.loginSucess({
                token: response.jwt,
                message: response.message,
                role: response.role,
              })
            ),
            catchError((error) =>
              of(AuthActions.loginFailed({ serverError: error.message }))
            )
          )
      )
    )
  );

  saveTokenToLStorage$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.loginSucess),
        tap((loginSuccessData) => {
          console.log(loginSuccessData.token, 'DATA OOOO DATA');
          localStorage.setItem('token', JSON.stringify(loginSuccessData.token));
        })
      ),
    { dispatch: false }
  );

  extractLoginDate$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.initAuth, AuthActions.extractLoginData),
      map(() => {
        const authDataString = localStorage.getItem('token');
        if (!authDataString) {
          return AuthActions.logoutSucess();
        }
        const authData: AuthData = JSON.parse(authDataString);
        return AuthActions.loginSucess(authData);
      })
    )
  );

  listenStorageEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.initAuth),
      switchMap(() => fromEvent(window, 'storage')),
      map(() => AuthActions.extractLoginData())
    )
  );

  listenAuthorizeEffect$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.initAuth),
        switchMap(() => this.store$.pipe(select(getAuthData))),
        filter((authData) => authData !== undefined),
        map((authData) => !!authData),
        distinctUntilChanged(),
        skip(1),
        tap((isAuthorized) => {
          // this.router.navigateByUrl(isAuthorized ? '/main' : '/login');
        })
      ),
    { dispatch: false }
  );

  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.register),
      switchMap((action) =>
        this.authService
          .register({
            fullName: action.fullName,
            email: action.email,
            password: action.password,
            role: action.role,
          })
          .pipe(
            map(
              (response) =>
                AuthActions.registerSucess({
                  jwt: response.jwt,
                  message: response.message,
                  role: response.role,
                }),
              catchError((error) =>
                of(AuthActions.registerFailed({ serverError: error.message }))
              )
            )
          )
      )
    )
  );

  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.logout),
      map(() => {
        localStorage.removeItem('token');
        return AuthActions.logoutSucess();
      })
    )
  );

  constructor(
    private actions$: Actions,
    private authService: FoodAuthServiceService,
    private store$: Store,
    private router: Router
  ) {}
}
