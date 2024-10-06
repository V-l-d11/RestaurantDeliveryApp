import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CardItemRequestAdd } from 'src/app/models/api/requests/card-item-add-user-request';
import { OderRequest } from 'src/app/models/api/requests/oder-request';
import { updateItemRequest } from 'src/app/models/api/requests/update-item-request';
import {
  AddCardItemResponse,
  Card,
} from 'src/app/models/api/responses/add-card-item-users-response';
import { RestaurantDto } from 'src/app/models/api/responses/favorites';
import { OderResponse } from 'src/app/models/api/responses/oder-response';
import { UserProfile } from 'src/app/models/api/responses/user-profile';

@Injectable({
  providedIn: 'root',
})
export class UsersPanelApiService {
  constructor(private http: HttpClient) {}

  addCardItem(item: CardItemRequestAdd): Observable<AddCardItemResponse> {
    console.log('Hello --- ---- --- --- --- --- ');
    console.log(item, 'Item');
    return this.http.put<AddCardItemResponse>(
      'http://localhost:8080/api/card/add',
      item
    );
  }

  updateCardItemQuentity(
    updateItem: updateItemRequest
  ): Observable<AddCardItemResponse> {
    return this.http.put<AddCardItemResponse>(
      'http://localhost:8080/api/card-item/update',
      updateItem
    );
  }

  clearCard(): Observable<Card> {
    return this.http.put<Card>('http://localhost:8080/api/card/clear', {});
  }

  removeCardItem(itemid: number): Observable<Card> {
    console.log(itemid, 'Item id Frm service');
    return this.http.delete<Card>(
      `http://localhost:8080/api/card-item/${itemid}/remove`
    );
  }

  findUserCard(): Observable<Card> {
    return this.http.get<Card>('http://localhost:8080/api/card');
  }

  userPorfile(): Observable<UserProfile> {
    return this.http.get<UserProfile>(
      'http://localhost:8080/api/users/profile'
    );
  }

  addToFavoritesRestaurant(restaurantId: number): Observable<RestaurantDto[]> {
    return this.http.put<RestaurantDto[]>(
      `http://localhost:8080/api/restaurants/${restaurantId}/add-favorites`,
      {}
    );
  }

  createOder(oder: OderRequest): Observable<OderResponse> {
    return this.http.post<OderResponse>('http://localhost:8080/api/oder', {
      oder,
    });
  }

  getOderhistory(): Observable<OderResponse[]> {
    return this.http.get<OderResponse[]>('http://localhost:8080/api/oder/user');
  }
}
