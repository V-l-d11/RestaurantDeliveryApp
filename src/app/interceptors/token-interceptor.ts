import { Injectable } from '@angular/core';
//import { AdminAuthService } from '../services/admin-auth.service';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable, first, flatMap } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { FoodAuthServiceService } from '../auth/core/services/food-auth-service.service';
import { getAccessToken } from '../auth/core/store/selectors/food-auth-selectors';
//import { getAccessToken } from '../store+/admin-tips-selectors';

@Injectable()
export class TokenIntercaptor implements HttpInterceptor {
  accessToken?: string | null;

  constructor(private auth: FoodAuthServiceService, private store$: Store) {
    this.store$
      .pipe(select(getAccessToken))
      .subscribe((accesToken) => (this.accessToken = accesToken));
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // const token = this.auth.getToken();
    const token = this.accessToken;
    if (token) {
      req = req.clone({
        setHeaders: {
          Authorization: token,
        },
      });
    }

    return next.handle(req);
  }
}
