import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AdminCreateFoodRequest } from 'src/app/models/api/requests/admin/create-food-request';

@Injectable()
export class OwnerFoodService {
  constructor(private http: HttpClient) {}

  createFood(food: AdminCreateFoodRequest) {}
}
