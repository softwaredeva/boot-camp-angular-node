import { Injectable } from '@angular/core';
import { ReplaySubject, Observable } from 'rxjs';

import { Product } from './products.service';

export interface CheckoutProduct extends Product{
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  products: CheckoutProduct[] = [];
  private productsSubject: ReplaySubject<CheckoutProduct[]> = new ReplaySubject<CheckoutProduct[]>(1);
  get productsObservable(): Observable<CheckoutProduct[]>{ return this.productsSubject.asObservable();};

  constructor() { }

  addToCart(product,quantity){
    console.log("addToCart",product,quantity);
    let checkoutProduct: CheckoutProduct = Object.assign(product,{quantity:quantity});
    console.log("addToCart",checkoutProduct);
    this.products.push(checkoutProduct);
    console.log("addToCart",this.products);
    this.productsSubject.next(this.products);

  }
}
