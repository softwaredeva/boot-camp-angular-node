import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

export interface Product {
  id: string;
  name: string;
  cost: number;
  image: string;
  description?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private productsUrl = 'api/products';  // URL to web api

  constructor(
    private httpClient: HttpClient,
  ) { }

  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.productsUrl)
      .pipe(
        tap(_ => this.log('fetched products')),
        catchError(this.handleError<Product[]>('getProducts', []))
      );
  }


  searchProducts(term: string): Observable<Product[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.httpClient.get<Product[]>(`${this.productsUrl}/?name=${term}`).pipe(
      tap(_ => this.log(`found products matching "${term}"`)),
      catchError(this.handleError<Product[]>('searchProducts', []))
    );
  }

  getProduct(id: string): Observable<Product> {
    const url = `${this.productsUrl}/${id}`;
    return this.httpClient.get<Product>(url).pipe(
      tap(_ => this.log(`fetched product id=${id}`)),
      catchError(this.handleError<Product>(`getProduct id=${id}`))
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
