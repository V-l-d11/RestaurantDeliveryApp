import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FoodSearchResponse } from 'src/app/models/api/responses/Food-search-response';

@Injectable({
  providedIn: 'root',
})
export class FoodSearchService {
  constructor(private http: HttpClient, private router: Router) {}

  searchCustomerFood(name: string): Observable<FoodSearchResponse[]> {
    return this.http.post<FoodSearchResponse[]>(
      'http://localhost:8080/foodl/search',
      {
        params: { name: name },
      }
    );
  }
}
