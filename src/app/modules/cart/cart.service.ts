import { Injectable } from '@angular/core';
import { CartItem } from 'src/app/shared/models/cartItem';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private httpClient: HttpClient) { }

  items: CartItem[] = [];
  urlApi: String = environment.url;

  addToCart(item: CartItem) {
    this.items.push(item);
    sessionStorage.setItem('items', JSON.stringify(this.items));
    console.log('CART');
    console.log(this.getItems());
  }

  getItems() {
    let items = JSON.parse(sessionStorage.getItem('items'));
    return items ? items : [];
  }

  clearCart() {
    this.items = [];
    sessionStorage.removeItem('items');
    return this.items;
  }

  public saveCart(data: any): Observable<any> {
    return this.httpClient.post(`${this.urlApi}/cart/store`, data);
  }
}
