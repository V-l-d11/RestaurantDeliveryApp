import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { FoodAuthServiceService } from '../auth/core/services/food-auth-service.service';
import { Store } from '@ngrx/store';
import { AuthDialogModalsService } from '../auth/core/services/food-dialog-modal-services/auth-dialog-modals.service';

@Injectable({
  providedIn: 'root',
})
export class AdminAuthGuard implements CanActivate, CanActivateChild {
  constructor(
    private auth: FoodAuthServiceService,
    private router: Router,
    private store$: Store,
    private loginService: AuthDialogModalsService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    return true;
  }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    return true;
  }
}
