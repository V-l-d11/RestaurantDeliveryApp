import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { createIngridCategRequest } from 'src/app/models/api/requests/admin/create-ingrieitns-category-request';
import { createIngridnetCategoryResponse } from 'src/app/models/api/responses/admin/admin-create-ingridient-category-response';

@Injectable({
  providedIn: 'root',
})
export class OwnerIngridientsService {
  BASE_URL = 'http://localhost:8080/api/admin/ingridients';

  constructor(private http: HttpClient) {}

  createIngridientCategory(
    req: createIngridCategRequest
  ): Observable<createIngridnetCategoryResponse> {
    return this.http.get<createIngridnetCategoryResponse>(
      `${this.BASE_URL}/category`
    );
  }
}
