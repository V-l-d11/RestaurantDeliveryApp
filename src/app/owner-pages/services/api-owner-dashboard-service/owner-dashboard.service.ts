import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AdminCreateRestaurantRequest } from 'src/app/models/api/requests/admin/create-restaurant-request';
import { AdminRestaurantResponse } from 'src/app/models/api/responses/admin/admin-restaurant';

@Injectable()
export class OwnerDashboardService {
  constructor(private http: HttpClient) {}
  BASE_URL = 'http://localhost:8080/api/admin/restaurants';

  getRestaurant(): Observable<AdminRestaurantResponse> {
    return this.http.get<AdminRestaurantResponse>(`${this.BASE_URL}/user`);
  }

  deleteRestaurant(restaurantId: number): Observable<string> {
    return this.http.delete<string>(`${this.BASE_URL}/${restaurantId}`);
  }

  updateRestaurantStatus(
    restaurantId: number
  ): Observable<AdminRestaurantResponse> {
    return this.http.put<AdminRestaurantResponse>(
      `${this.BASE_URL}/${restaurantId}/status`,
      { id: restaurantId }
    );
  }
}
