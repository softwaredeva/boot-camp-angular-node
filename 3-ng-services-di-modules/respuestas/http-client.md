# HTTP Client

## Respuesta

Agregar o modificar los siguientes códigos y archivos al proyecto:

```ts
// services/products.service

...
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

...
export class ProductsService {
  private productsUrl = 'api/products';  // URL to web api

  constructor(
    private httpClient: HttpClient,
  ) { }

  getProducts (): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.productsUrl)
      .pipe(
        tap(_ => this.log('fetched products')),
        catchError(this.handleError<Product[]>('getProducts', []))
      );
  }

  getProduct(id: string): Observable<Product> {
    const url = `${this.productsUrl}/${id}`;
    return this.httpClient.get<Product>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Product>(`getProduct id=${id}`))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    console.log("log",message);
  }
}
```

``` ts
// views/home/home.component


...
ngOnInit() {
  this.productsService.getProducts().subscribe((products:Product[])=>{
    this.products = products;
  });
}
```

```ts
// views/product/product.component


...
getProduct(){
  this.productsService.getProduct(this.productId).subscribe(data=>{
    console.log("getProduct",data);
    if(data)
    this.product = data;
  });
}
```

[<--](../http-client.md)
