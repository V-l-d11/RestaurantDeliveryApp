import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateIngridItemRequest } from 'src/app/models/api/requests/admin/create-ingridients-item-request';
import { createIngridCategRequest } from 'src/app/models/api/requests/admin/create-ingrieitns-category-request';
import { createIngridnetCategoryResponse } from 'src/app/models/api/responses/admin/admin-create-ingridient-category-response';
import { GetRestaurantIngridCategoryResponse } from 'src/app/models/api/responses/admin/get-restaurnat-igrid-category-response';
import { IngridItemsBase } from 'src/app/models/baseModals/ingridients-item-base';
import { IngridientsItemBase } from 'src/app/models/baseModals/ingridientsItemBase';

@Injectable({
  providedIn: 'root',
})
export class OwnerIngridientsService {
  BASE_URL = 'http://localhost:8080/api/admin/ingridients';

  constructor(private http: HttpClient) {}

  createIngridientCategory(
    req: createIngridCategRequest
  ): Observable<createIngridnetCategoryResponse> {
    return this.http.post<createIngridnetCategoryResponse>(
      `${this.BASE_URL}/category`,
      { req }
    );
  }
  createIngridientItem(
    req: CreateIngridItemRequest
  ): Observable<IngridientsItemBase> {
    return this.http.post<IngridientsItemBase>(`${this.BASE_URL}`, { req });
  }

  updateIngridientStock(ingridientId: number): Observable<IngridientsItemBase> {
    return this.http.put<IngridientsItemBase>(
      `${this.BASE_URL}/${ingridientId}/stoke`,
      {}
    );
  }

  loadRestaurantIngridCategory(
    restaurantId: number
  ): Observable<GetRestaurantIngridCategoryResponse[]> {
    console.log(restaurantId, 'Restaurant id Service');
    console.log('Hello');
    return this.http.get<GetRestaurantIngridCategoryResponse[]>(
      `${this.BASE_URL}/restaurant/${restaurantId}/category`
    );
  }

  loadRestaurantIngridients(
    restaurantId: number
  ): Observable<IngridientsItemBase[]> {
    return this.http.get<IngridientsItemBase[]>(
      `${this.BASE_URL}/restaurant/${restaurantId}`
    );
  }

  deleteIngridientCategory(id: number) {
    return this.http.delete(`${this.BASE_URL}/category/${id}`);
  }

  deleteIngridientItem(id: number) {
    return this.http.delete(`${this.BASE_URL}/${id}`);
  }
}
