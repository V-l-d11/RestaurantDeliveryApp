import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestaurantCustomer } from 'src/app/models/api/responses/Restaurant-response';

@Injectable({
  providedIn: 'root',
})
export class RestaurantService {
  GET_ALL_RESTAURANT_URL: string =
    'http://localhost:8080/customers/restaurants';

  constructor(private http: HttpClient) {}

  searchRestaurantByNameORLocal(
    query: string
  ): Observable<RestaurantCustomer[]> {
    const url = `http://localhost:8080/customers/restaurants/search?keyword=${query}`;
    return this.http.get<RestaurantCustomer[]>(url);
  }

  getAllRestaurants(): Observable<RestaurantCustomer[]> {
    return this.http.get<RestaurantCustomer[]>(this.GET_ALL_RESTAURANT_URL);
  }

  getSingleRestaurant(id: number): Observable<RestaurantCustomer> {
    return this.http.get<RestaurantCustomer>(
      `http://localhost:8080/customers/restaurants/${id}`
    );
  }
}
