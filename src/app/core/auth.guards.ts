import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, map, of } from 'rxjs';
import { FoodAuthServiceService } from '../auth/core/services/food-auth-service.service';
import { Store } from '@ngrx/store';
import {
  getRole,
  isAuth,
} from '../auth/core/store/selectors/food-auth-selectors';
import { AuthDialogModalsService } from '../auth/core/services/food-dialog-modal-services/auth-dialog-modals.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanActivateChild {
  isAuth!: Observable<boolean>;
  role!: Observable<string>;
  constructor(
    private auth: FoodAuthServiceService,
    private router: Router,
    private store$: Store,
    private loginService: AuthDialogModalsService
  ) {}

  canActivate(
    router: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    this.role = this.store$.select(getRole);

    return this.store$.select(isAuth).pipe(
      map((isAuthenticated) => {
        const token = localStorage.getItem('token');
        console.log(isAuthenticated, 'Is Authentocated Selector');
        if (token) {
          console.log(isAuthenticated);
          console.log('Hahah');
          return true;
        } else {
          this.loginService.loginModaldialog();
          return false;
        }
      })
    );
  }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.canActivate(childRoute, state);
  }
}
