import { Injectable } from '@angular/core';
import { ReplaySubject, Observable, of } from 'rxjs';
import { MatSidenav } from '@angular/material';
import { HttpClient } from '@angular/common/http';

import { catchError, tap } from 'rxjs/operators';

import { Product } from './products.service';

export interface CheckoutProduct extends Product {
  quantity: number;
}

export interface CheckoutData {
  customerData: {
    name: string;
    email: string;
    address: string;
    card: string;
    expirationMonth: string;
    expirationYear: string;
    csv: string;
  };
  checkoutProducts: CheckoutProduct[];
}

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  private checkoutUrl = 'api/checkout';  // URL to web api

  products: CheckoutProduct[] = [];
  private productsSubject: ReplaySubject<CheckoutProduct[]> = new ReplaySubject<CheckoutProduct[]>(1);
  get productsObservable(): Observable<CheckoutProduct[]>{ return this.productsSubject.asObservable();};

  matSidenav: MatSidenav;

  constructor(
    private httpClient: HttpClient,
  ) { }

  addToCart(product, quantity) {
    const checkoutProduct: CheckoutProduct = Object.assign({}, product, {quantity}); // Abbreviation = {quantity: quantity}
    this.products.push(checkoutProduct);
    this.productsSubject.next(this.products);

    if (this.matSidenav) {
      this.matSidenav.open();
    }
  }

  sendNewCheckout(checkoutData: CheckoutData) {
    const url = `${this.checkoutUrl}`;
    return this.httpClient.post<Product>(url, checkoutData).pipe(
      tap(_ => this.log(`sended Checkout`)),
      catchError(this.handleError<Product>(`sendNewCheckout`))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  private log(message: string) {
    console.log('log', message);
  }
}
