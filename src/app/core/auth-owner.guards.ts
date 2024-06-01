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
import { AuthDialogModalsService } from '../auth/core/services/food-dialog-modal-services/auth-dialog-modals.service';
import {
  getRole,
  isAuth,
} from '../auth/core/store/selectors/food-auth-selectors';

@Injectable({
  providedIn: 'root',
})
export class AdminAuthGuard implements CanActivate, CanActivateChild {
  role!: Observable<string>;
  roleOwner!: string;
  constructor(
    private auth: FoodAuthServiceService,
    private router: Router,
    private store$: Store,
    private loginService: AuthDialogModalsService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.store$.select(isAuth).pipe(
      map((isAuth) => {
        const token = localStorage.getItem('token');
        if (token) {
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
  ): boolean {
    return true;
  }
}
