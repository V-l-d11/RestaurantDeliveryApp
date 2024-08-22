import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AdminCreateFoodRequest } from 'src/app/models/api/requests/admin/create-food-request';
import { OwnerFoodFilterRequest } from 'src/app/models/api/requests/admin/food-filter-request';
import { OwnerFoodBase } from 'src/app/models/baseModals/foodOwnerBase';

@Injectable({
  providedIn: 'root',
})
export class OwnerManuService {
  BASE_URL = 'http://localhost:8080/api/admin/food';

  constructor(private http: HttpClient) {}

  showMenuItems(
    restuarantId: number,
    filters: OwnerFoodFilterRequest[],
    categories: string[]
  ): Observable<OwnerFoodBase[]> {
    let params = new HttpParams();

    filters.forEach((filter) => {
      if (filter === OwnerFoodFilterRequest.Vegetarian) {
        params = params.append('vageterian', 'true');
      }
      if (filter === OwnerFoodFilterRequest.Seasonal) {
        params = params.append('seasonal', 'true');
      }
      if (filter === OwnerFoodFilterRequest.NonVegetarian) {
        params = params.append('nonveg', 'true');
      }
    });

    categories.forEach((category) => {
      params = params.append('foodCategory', category);
    });

    console.log(params.toString(), 'Params $$$$');
    console.log(filters, 'Filters');
    console.log(categories, 'Categories');

    return this.http.get<OwnerFoodBase[]>(
      `${this.BASE_URL}/restaurant/${restuarantId}`,
      { params }
    );
  }

  createFood(item: AdminCreateFoodRequest): Observable<OwnerFoodBase> {
    console.log(item, 'Item  into Service');
    return this.http.post<OwnerFoodBase>(`${this.BASE_URL}`, item);
  }

  updateFoodStatusAvailable(foodId: number): Observable<OwnerFoodBase> {
    return this.http.put<OwnerFoodBase>(`${this.BASE_URL}/${foodId}`, {});
  }

  deletFood(foodId: number) {
    return this.http.delete(`${this.BASE_URL}/${foodId}`);
  }
}
