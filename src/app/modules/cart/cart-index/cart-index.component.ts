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
    console.log('length cart');
    console.log(this.items);
  }

  ngOnInit(): void {
    console.log(this.items);
    console.log(this.cartService.getItems());
    this.items = this.cartService.getItems();
    console.log('after');
    console.log(this.items);
    console.log('totalPrice');
    this.sumOfCartItems();
    console.log(this.totalPrice);
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
    console.log('finished sale');
    this.cartService.saveCart(data).subscribe(
      response => {
        console.log(response);
        console.log('crat finished');
        this.emptyCart();
      },
      error => console.log(error)
    );
  }

  emptyCart() {
    this.cartService.clearCart();
    this.items = [];
    this.totalPrice = 0;
  }

}
