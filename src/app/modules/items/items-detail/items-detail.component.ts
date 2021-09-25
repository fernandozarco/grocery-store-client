import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, Validators } from '@angular/forms';
import { CartService } from '../../cart/cart.service';

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

  // constructor(public dialogRef: MatDialogRef<ItemsDetailComponent>) { }
  constructor(
    @Inject(MAT_DIALOG_DATA) public item,
    private formBuilder: FormBuilder,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.units = this.item.units;
  }

  assignUnit(unit) {
    console.log(unit);
    this.selectedUnit = unit;
    this.salePrice = unit.pivot.price;
  }

  submit() {
    console.log(this.form.value);
    console.log(this.item);
    console.log('getValue');
    console.log(this.form.get('salePrice').value);
    let itemCart = {
      itemId: this.item.id,
      itemName: this.item.name,
      unitId: this.form.get('unitId').value,
      unitName: this.selectedUnit.name,
      salePrice: this.form.get('salePrice').value,
    }
    console.log('itemCart');
    console.log(itemCart);
    this.cartService.addToCart(itemCart);
  }

  // closeDialog() {
  //   this.dialogRef.close('Exit!');
  // }

}