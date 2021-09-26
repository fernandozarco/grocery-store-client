import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-index',
  templateUrl: './cart-index.component.html',
  styles: [
  ]
})
export class CartIndexComponent implements OnInit {

  items: any[] = [];
  totalPrice: number = 0;

  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
    this.sumOfCartItems();
  }

  sumOfCartItems() {
    if (this.items.length === 0) return 0;

    this.totalPrice = this.items.map(function (item) {
      return item.salePrice;
    }).reduce(function (previousValue, currentValue) {
      return previousValue + currentValue;
    });
  }

  finishTheSale() {
    let data = {
      items: this.items
    };
    this.cartService.saveCart(data).subscribe(
      response => this.emptyCart(),
      error => console.log(error.message)
    );
  }

  emptyCart() {
    this.cartService.clearCart();
    this.items = [];
    this.totalPrice = 0;
  }

}
