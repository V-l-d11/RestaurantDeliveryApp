import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FiltersCustomerSingleRestaurantFood } from 'src/app/models/api/requests/filtersCustomerSingleRestaurantFood';
import { RestaurantListByFiltersRequest } from 'src/app/models/api/requests/restaurants-list-by-filters-customer';
import { FoodSearchResponse } from 'src/app/models/api/responses/Food-search-response';
import { RestaurantCustomer } from 'src/app/models/api/responses/Restaurant-response';
import { RestaurantDto } from 'src/app/models/api/responses/favorites';
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
  BASE_URL: string = 'http://localhost:8080/customers';

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

  getFilterFoodBySingleRestaurant(
    actions: FiltersCustomerSingleRestaurantFood
  ): Observable<FoodSearchResponse[]> {
    const { restaurantId, ...restFilters } = actions;
    console.log(restFilters, 'Rest Filters');
    let params = new HttpParams();
    Object.entries(restFilters).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        params = params.set(key, value.toString());
      }
    });

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

  getRestaurantsListByFilters(
    obj: RestaurantListByFiltersRequest
  ): Observable<RestaurantCustomer[]> {
    let params = new HttpParams();
    (Object.keys(obj) as (keyof RestaurantListByFiltersRequest)[]).forEach(
      (key) => {
        const value = obj[key];
        if (value) {
          params = params.set(key as string, value.toString());
        }
      }
    );

    return this.http.get<RestaurantCustomer[]>(
      `${this.BASE_URL}/restaurants/search-restaurants`,
      { params }
    );
  }

  getAllCuisineTypes(): Observable<string[]> {
    return this.http.get<string[]>(
      `${this.BASE_URL}/restaurants/cuisine-types`
    );
  }
}
