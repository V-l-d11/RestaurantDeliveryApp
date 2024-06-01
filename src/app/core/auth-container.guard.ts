import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  CanActivateChildFn,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Store } from '@ngrx/store';
import { AdminAuthGuard } from './auth-owner.guards';
import { AuthGuard } from './auth.guards';
import { Observable, of, switchMap } from 'rxjs';
import { getRole } from '../auth/core/store/selectors/food-auth-selectors';

@Injectable({
  providedIn: 'root',
})
export class RoleBasedGuard implements CanActivate, CanActivateChild {
  constructor(
    private store$: Store,
    private appOwnerGuard: AdminAuthGuard,
    private appCustomerGuard: AuthGuard,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.store$.select(getRole).pipe(
      switchMap((role) => {
        if (role === 'ROLE_RESTAURANT_OWNER') {
          return this.appOwnerGuard.canActivate(
            route,
            state
          ) as Observable<boolean>;
        } else if (role === 'ROLE_CUSTOMER') {
          return this.appOwnerGuard.canActivate(
            route,
            state
          ) as Observable<boolean>;
        } else {
          this.router.navigate(['/login']);
          return of(false);
        }
      })
    );
  }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> {
    return this.canActivate(childRoute, state);
  }
}
