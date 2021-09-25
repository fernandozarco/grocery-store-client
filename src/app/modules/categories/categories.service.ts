import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  url: String = environment.url;

  constructor(private http: HttpClient) { }

  public getCategories(): Observable<any> {
    return this.http.get(`${this.url}/category`);
  }
}
