import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { FoodAuthServiceService } from '../services/food-auth-service.service';
import { Store } from '@ngrx/store';
import { isAuth } from '../store/selectors/food-auth-selectors';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanActivateChild {
  isAuth!: Observable<boolean>;

  constructor(
    private auth: FoodAuthServiceService,
    private router: Router,
    private store$: Store
  ) {}

  canActivate(
    router: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    this.isAuth = this.store$.select(isAuth);
    if (this.isAuth) {
      return of(true);
    } else {
      this.router.navigate(['/login']);
      return of(false);
    }
  }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.canActivate(childRoute, state);
  }
}
