import { Component, OnInit } from '@angular/core';

interface products {
  name: string,
  img: string,
  metric: string,
  quantity: number,
  marketPrice: number,
  lastSalePrice: number,
  currentSalePrice: number
}

interface weightType {
 weight?: string,
 count?: string
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products: products[] = [];
  defaultProducts: products[] = [
    {
      name: 'Onion',
      img: 'https://picsum.photos/200',
      metric: 'KG',
      quantity: 1,
      marketPrice: 90,
      lastSalePrice: 50,
      currentSalePrice: 45
    }
  ];

  constructor() { }

  ngOnInit(): void {
    for (let index = 0; index < 20; index++) {
      this.products[index] = this.defaultProducts[0];
    }
  }

}
