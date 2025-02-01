import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) {}

  public saveDiscountData(data: any): Observable<any> {
    return this.http.post(`http://localhost:9595/Billing/DiscountRule/DiscountRule`, data);
  }

  public getDiscountDetails(): Observable<any> {
    return this.http.get(`http://localhost:9595/Billing/DiscountRule/DiscountRule`);
  }

  public getdisruleDetailsBySchemaId(id: number): Observable<any> {
    return this.http.get(`http://localhost:9595/Billing/DiscountRule/bydiscountschemeid/${id}`);
  }

}