### Respuesta

Agregar o modificar los siguientes códigos y archivos al proyecto:


```
app.component.html

<app-products-list [products]="products"></app-products-list>
```


```
components/products-list/products-list.component.ts

import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../product';

@Component({
...
export class ProductsListComponent implements OnInit {
  @Input() products: Product[] ;
  ...
}
```
