import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FoodSearchResponse } from 'src/app/models/api/responses/Food-search-response';
import { RestaurantCustomer } from 'src/app/models/api/responses/Restaurant-response';
import {
  IngridientsItem,
  ingridientsCategory,
} from 'src/app/models/api/responses/ingridients-category-from-restaurant';
import { RestaurantCategory } from 'src/app/models/api/responses/restaurant-category';

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

  getRestaurantCategory(id: number): Observable<RestaurantCategory[]> {
    return this.http.get<RestaurantCategory[]>(
      `http://localhost:8080/customer/category/restaurant/${id}`
    );
  }

  getFilterRestaurants(
    restaurantId: number,
    foodCategory: string,
    vegeterian?: boolean,
    seasonal?: boolean,
    nonveg?: boolean
  ): Observable<FoodSearchResponse[]> {
    console.log(foodCategory, 'Food Category');

    const params = {
      vegeterian: vegeterian !== undefined ? vegeterian.toString() : '',
      seasonal: seasonal !== undefined ? seasonal.toString() : '',
      nonveg: nonveg !== undefined ? nonveg.toString() : '',
      foodCategory: foodCategory || '',
    };
    console.log(nonveg !== undefined ? nonveg.toString() : '');
    return this.http.get<FoodSearchResponse[]>(
      `http://localhost:8080/foodl/restaurant/${restaurantId}`,
      { params }
    );
  }

  getIngridientsCategoryFromRestaurant(
    id: number
  ): Observable<ingridientsCategory[]> {
    return this.http.get<ingridientsCategory[]>(
      `http://localhost:8080/customer/ingridients/restaurant/${id}/category`
    );
  }
}
