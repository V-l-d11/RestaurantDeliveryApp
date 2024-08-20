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
    filters: OwnerFoodFilterRequest[]
  ): Observable<OwnerFoodBase[]> {
    console.log(restuarantId, 'Restaurant Menu  Id restaurant Service');
    let params = new HttpParams();
    filters.forEach((filter) => (params = params.set(filter, 'true')));
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
