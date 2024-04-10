import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FoodLoginRequest } from 'src/app/models/api/requests/food-user-login';
import { FoodUserRegister } from 'src/app/models/api/requests/food-user-register';
import { FoodUserResponse } from 'src/app/models/api/responses/food-user-register-response';

@Injectable({
  providedIn: 'root',
})
export class FoodAuthServiceService {
  private token!: string;

  constructor(private http: HttpClient, private router: Router) {}

  login(user: FoodLoginRequest): Observable<any> {
    return this.http.post('http://localhost:8080/auth/signin', { user });
  }
}
