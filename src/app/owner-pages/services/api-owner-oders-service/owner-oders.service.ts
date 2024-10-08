import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderStatusSummaryResponse } from 'src/app/models/api/responses/admin/owner-oders-status-summary-response';
import { OderFilterPriceOwner } from 'src/app/models/baseModals/objectFilterPriceOder';
import { OwnerOderBase } from 'src/app/models/baseModals/owerOderBase';
import { PageableResponse } from 'src/app/models/baseModals/pagaeble';

@Injectable()
export class OwnerOdersService {
  BASE_URL = 'http://localhost:8080/api/admin/';

  constructor(private http: HttpClient) {
    console.log('Owner Oders Service Created');
  }

  getOderHistory(
    restaurantId: number,
    oder_status?: string
  ): Observable<PageableResponse<OwnerOderBase>> {
    let params = new HttpParams();
    if (oder_status) {
      params = params.set('oder_status', oder_status);
    }
    return this.http.get<PageableResponse<OwnerOderBase>>(
      `${this.BASE_URL}oder/restaurant/${restaurantId}`,
      { params: params }
    );
  }

  updateOderStatus(
    oderId: number,
    oderStatus: string
  ): Observable<OwnerOderBase> {
    return this.http.put<OwnerOderBase>(
      `${this.BASE_URL}oder/${oderId}/${oderStatus}`,
      {}
    );
  }

  delteOder(oderId: number): Observable<string> {
    return this.http.delete<string>(`${this.BASE_URL}/oder`);
  }

  getOdersHistoryByDate(
    createAt: string,
    page?: number,
    size?: number
  ): Observable<PageableResponse<OwnerOderBase>> {
    let params = new HttpParams();
    params = params.append('createAt', createAt);
    return this.http.get<PageableResponse<OwnerOderBase>>(
      `${this.BASE_URL}oder/date`,
      {
        params,
      }
    );
  }

  getOdersHistoryByRangeDate(
    startDate: string,
    endDate: string,
    page?: number,
    size?: number
  ): Observable<PageableResponse<OwnerOderBase>> {
    let params = new HttpParams();
    params = params.append('startDate', startDate);
    params.append('endDate', endDate);

    return this.http.get<PageableResponse<OwnerOderBase>>(
      `${this.BASE_URL}/oder/date-range`,
      { params }
    );
  }

  getOdersByCustomerFullName(
    fullName: string
  ): Observable<PageableResponse<OwnerOderBase>> {
    let params = new HttpParams();
    params = params.append('fullName', fullName);
    return this.http.get<PageableResponse<OwnerOderBase>>(
      `${this.BASE_URL}oder/customer/`,
      { params }
    );
  }

  getOdersStatusSummary(
    restaurantId: number
  ): Observable<OrderStatusSummaryResponse> {
    let params = new HttpParams();
    params = params.append('restaurantId', restaurantId);
    return this.http.get<OrderStatusSummaryResponse>(
      `${this.BASE_URL}oder/status-summary`,
      { params }
    );
  }

  getOdersByTotalPrice(
    objFilterPrice: OderFilterPriceOwner
  ): Observable<PageableResponse<OwnerOderBase>> {
    let params = new HttpParams();

    Object.entries(objFilterPrice).forEach(([key, value]) => {
      params = params.append(String(key), value);
    });

    return this.http.get<PageableResponse<OwnerOderBase>>(
      `${this.BASE_URL}oder/price-range`,
      { params }
    );
  }
}
