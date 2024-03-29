import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  urlApi: String = environment.url;
  constructor(private httpClient: HttpClient) { }

  public todaySalesReport(): Observable<any> {
    return this.httpClient.get(`${this.urlApi}/reports/sales/today`);
  }
}
