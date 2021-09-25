import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  url: String = environment.url;

  constructor(private httpClient: HttpClient) { }

  public getItems(categoryId: number): Observable<any> {
    return this.httpClient.get(`${this.url}/category/${categoryId}/items`);
  }
}
