import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, Validators } from '@angular/forms';
import { CartService } from '../../cart/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-items-detail',
  templateUrl: './items-detail.component.html',
  styles: []
})
export class ItemsDetailComponent implements OnInit {

  salePrice: any;
  units: any;
  selectedUnit: any;
  form = this.formBuilder.group({
    salePrice: ['', Validators.required],
    unitId: ['', [
      Validators.required,
      Validators.min(1)
    ]]
  });

  constructor(
    @Inject(MAT_DIALOG_DATA) public item,
    private formBuilder: FormBuilder,
    private cartService: CartService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.units = this.item.units;
  }

  assignUnit(unit) {
    this.selectedUnit = unit;
    this.salePrice = unit.pivot.price;
  }

  submit() {
    let itemCart = {
      itemId: this.item.id,
      itemName: this.item.name,
      unitId: this.form.get('unitId').value,
      unitName: this.selectedUnit.name,
      salePrice: this.form.get('salePrice').value,
    }
    this.cartService.addToCart(itemCart);
    this.router.navigate(['/categories']);
  }

}
