import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../core/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    public productService: ProductsService
  ) { }

  ngOnInit(): void {
    if(!this.productService.products.length)
    this.productService.initProducts();
  }

  addToCart(index: number) {
    this.productService.addToCart(index);
  }

}
