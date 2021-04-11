import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterEvent, Event } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ProductsService } from './core/products.service';
interface navItems {
  displayName: string,
  route: string,
  isActive: boolean
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  navItems: navItems[] = [
    {
      displayName: 'Home',
      route: 'home',
      isActive: true
    },
    {
      displayName: 'Cart',
      route: 'cart',
      isActive: false
    }
  ];

  constructor(
    private router: Router,
    private productService: ProductsService
  ) {
    this.router.events.pipe(
      filter((e: Event): e is RouterEvent => e instanceof NavigationEnd)
    ).subscribe((e: any) => {
      if (e['urlAfterRedirects']) {
        this.navItems.forEach((i) => {
          if (i.route === e['urlAfterRedirects']) i.isActive = true;
          else i.isActive = false;
        })
      }
    });
  }

  getDisplayName(navItem: any) {
    if(navItem.displayName == 'Cart') 
    return `${navItem.displayName} (${this.productService.noOfCartItems()})`;
    else return navItem.displayName;
  }
}
