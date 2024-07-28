import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/models/baseModals/category';

@Injectable()
export class CategoryFoodService {
  BASE_URL = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}

  createCategoryFood(category: Category): Observable<Category> {
    return this.http.post<Category>(
      `${this.BASE_URL}/admin/category`,
      category
    );
  }

  getCategoriesFood(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.BASE_URL}/category/restaurant`);
  }

  deleteCategoryFood(id: number): Observable<number> {
    return this.http.delete<number>(`${this.BASE_URL}/admin/category/${id}`);
  }
}
