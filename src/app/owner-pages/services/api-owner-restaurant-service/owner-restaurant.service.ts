import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AdminCreateRestaurantRequest } from 'src/app/models/api/requests/admin/create-restaurant-request';
import { OwnerRestaurantBase } from 'src/app/models/baseModals/restaurantOwnerbase';
import { User } from 'src/app/models/baseModals/user';

@Injectable({
  providedIn: 'root',
})
export class OwnerRestaurantService {
  BASE_URL = 'http://localhost:8080//api/admin/restaurants';

  constructor(private http: HttpClient) {}

  createRestaurant(
    item: AdminCreateRestaurantRequest
  ): Observable<OwnerRestaurantBase> {
    return this.http.post<OwnerRestaurantBase>(`${this.BASE_URL}`, { item });
  }
  updateRestaurant(
    item: AdminCreateRestaurantRequest
  ): Observable<OwnerRestaurantBase> {
    return this.http.put<OwnerRestaurantBase>(`${this.BASE_URL}/${item.id}`, {
      item,
    });
  }

  deleteRestaurant(restaurantId: number): Observable<string> {
    return this.http.delete<string>(`${this.BASE_URL}/${restaurantId}`);
  }

  updateRestaurantStatus(
    restaurantId: number
  ): Observable<OwnerRestaurantBase> {
    return this.http.put<OwnerRestaurantBase>(
      `${this.BASE_URL}/${restaurantId}/status`,
      {}
    );
  }

  findRestaurantByUserId(): Observable<OwnerRestaurantBase> {
    return this.http.get<OwnerRestaurantBase>(`${this.BASE_URL}/user`);
  }

  getOwnerProfile(): Observable<User> {
    return this.http.get<User>(`/api/users/profile`);
  }
}
