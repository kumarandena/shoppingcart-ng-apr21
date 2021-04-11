import { Injectable } from '@angular/core';
import { Products } from './products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: Products[] = [];

  defaultProducts: Products[] = [
    {
      name: 'Apple',
      img: 'https://picsum.photos/200',
      metric: 'KG',
      quantity: 1,
      marketPrice: 90,
      lastSalePrice: 50,
      currentSalePrice: 45,
      addToCart: false,
      count: 1
    }
  ];

  constructor() { }

  incrementCount(product: Products) {
    return product.count++;
  }

  decrementCount(product: Products) {
    return product.count--;
  }

  getGrandTotal() {
    return this.products.filter(i => i.addToCart).map(i => i.currentSalePrice * i.count).reduce((acc, cur) => acc + cur);
  }

  addToCart(index: number) {
    this.products[index].addToCart = true;
  }

  cartHasItems() {
    return this.products.some(item => item.addToCart == true);
  }

  noOfCartItems() {
    return this.products.filter(item => item.addToCart == true).length;
  }

  initProducts() {
    for (let index = 0; index < 20; index++) {
      this.products[index] = {...this.defaultProducts[0]};
    }
  }

  removeItemfromCart(index: number) {
    this.products[index].addToCart = false;
  }
}
