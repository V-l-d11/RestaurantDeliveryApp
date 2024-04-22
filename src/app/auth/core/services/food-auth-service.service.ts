import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FoodLoginRequest } from 'src/app/models/api/requests/food-user-login';
import { FoodUserRegister } from 'src/app/models/api/requests/food-user-register';

@Injectable({
  providedIn: 'root',
})
export class FoodAuthServiceService {
  private token!: string | null;
  constructor(private http: HttpClient, private router: Router) {}
  login(user: FoodLoginRequest): Observable<any> {
    console.log(user, 'User Service');
    return this.http.post('http://localhost:8080/auth/signin', user);
  }
  register(user: FoodUserRegister): Observable<any> {
    console.log(user, 'Register User Service');
    return this.http.post('http://localhost:8080/auth/signup', user);
  }

  setToken(token: string | null) {
    this.token = token;
  }

  getToken(): string | null {
    return this.token;
  }

  isAuthenticated(): boolean {
    return !!this.token;
  }
}
