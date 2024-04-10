import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { FoodAuthServiceService } from '../../services/food-auth-service.service';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import * as AuthActions from './../actions/food-auth-actions';
import { catchError, map, of, switchMap, tap } from 'rxjs';

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
                token: response.token,
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
          const { type, ...authData } = loginSuccessData;
          localStorage.setItem('token', JSON.stringify(authData));
        })
      ),
    { dispatch: false }
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
