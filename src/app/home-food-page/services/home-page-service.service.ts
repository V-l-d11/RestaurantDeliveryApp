import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/models/baseModals/category';

@Injectable({
  providedIn: 'root',
})
export class HomePageServiceService {
  private BASE_URL = 'http://localhost:8080/customer';

  constructor(private http: HttpClient) {}

  getAllCategoriesFood(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.BASE_URL}/categories`);
  }
}
