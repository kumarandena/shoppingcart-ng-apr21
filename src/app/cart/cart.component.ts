import { Component, OnInit } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { Products } from '../core/products';
import { ProductsService } from '../core/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(
    public productService: ProductsService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {}

  incrementCount(product: Products) {
    this.productService.incrementCount(product)
  }

  decrementCount(product: Products) {
    this.productService.decrementCount(product)
  }

   get getGrandTotal() {
    return this.productService.getGrandTotal()
  }

  ngAfterViewChecked(): void {
    // https://github.com/angular/angular/issues/36173#issuecomment-681282309 
    this.cdr.detectChanges();
  }

}
