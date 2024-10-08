import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FoodSearchResponse } from 'src/app/models/api/responses/Food-search-response';
import { PageableResponse } from 'src/app/models/baseModals/pagaeble';

@Injectable({
  providedIn: 'root',
})
export class FoodSearchService {
  constructor(private http: HttpClient, private router: Router) {}

  BASE_URL = 'http://localhost:8080/foodl/';

  searchCustomerFood(name: string): Observable<FoodSearchResponse[]> {
    const url = `${this.BASE_URL}search?name=${name}`;
    return this.http.get<FoodSearchResponse[]>(url);
  }

  getAllFood(
    page: number,
    size: number
  ): Observable<PageableResponse<FoodSearchResponse>> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());
    return this.http.get<PageableResponse<FoodSearchResponse>>(
      `${this.BASE_URL}all`,
      { params }
    );
  }
}
