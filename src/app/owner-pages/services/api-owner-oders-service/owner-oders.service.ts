import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OwnerOderBase } from 'src/app/models/baseModals/owerOderBase';

@Injectable()
export class OwnerOdersService {
  BASE_URL = 'http://localhost:8080/api/admin/';

  constructor(private http: HttpClient) {}

  getOderHistory(
    oderId: number,
    oder_status: string
  ): Observable<OwnerOderBase> {
    let params = new HttpParams();
    params = params.set('oder_status', oder_status);
    return this.http.get<OwnerOderBase>(
      `${this.BASE_URL}/oder/restaurant/${oderId}`,
      { params }
    );
  }

  updateOderStatus(
    oderId: number,
    oderStatus: string
  ): Observable<OwnerOderBase> {
    return this.http.put<OwnerOderBase>(
      `${this.BASE_URL}/oder/${oderId}/${oderStatus}`,
      {}
    );
  }
}
