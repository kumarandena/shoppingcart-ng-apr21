import { Component, OnInit } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';

interface products {
  name: string,
  img: string,
  metric: string,
  quantity: number,
  marketPrice: number,
  lastSalePrice: number,
  currentSalePrice: number,
  count: number
}
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  products: products[] = [];
  defaultProducts: products[] = [
    {
      name: 'Onion',
      img: 'https://picsum.photos/200',
      metric: 'KG',
      quantity: 1,
      marketPrice: 90,
      lastSalePrice: 50,
      currentSalePrice: 45,
      count: 1
    }
  ];

  constructor(
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    for (let index = 0; index < 5; index++) {
      this.products[index] = { ...this.defaultProducts[0] }
    }
  }

  incrementCount(product: products) {
    return product.count++;
  }

  decrementCount(product: products) {
    return product.count--;
  }

  get getGrandTotal() {
    return this.products.map(i => i.currentSalePrice * i.count).reduce((acc, cur) => acc + cur);
  }

  ngAfterViewChecked(): void {
    // https://github.com/angular/angular/issues/36173#issuecomment-681282309 
    this.cdr.detectChanges();
  }

}
