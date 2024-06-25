import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AdminCreateFoodRequest } from 'src/app/models/api/requests/admin/create-food-request';
import { OwnerFoodBase } from 'src/app/models/baseModals/foodOwnerBase';

@Injectable()
export class OwnerFoodService {
  BASE_URL = 'http://localhost:8080/api/admin/food';

  constructor(private http: HttpClient) {
    console.log('Owner Food Service Created');
  }

  createFood(food: AdminCreateFoodRequest): Observable<OwnerFoodBase> {
    return this.http.post<OwnerFoodBase>(`${this.BASE_URL}`, { req: food });
  }

  deleteFood(foodId: number): Observable<string> {
    return this.http.delete<string>(`${this.BASE_URL}/${foodId}`);
  }

  updateFoodAvaibilityStatus(foodId: number): Observable<OwnerFoodBase> {
    return this.http.put<OwnerFoodBase>(`${this.BASE_URL}/${foodId}`, {});
  }
}
