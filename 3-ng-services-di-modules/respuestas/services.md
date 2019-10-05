# Services

## Respuesta

Agregar o modificar los siguientes códigos y archivos al proyecto:

```ts
// services/products.service


import { Injectable } from '@angular/core';

import { PRODUCTS } from './products';

export interface Product{
  id: string;
  name: string;
  cost: number;
  image: string;
  description?: string;
}

@Injectable({
  providedIn: 'root'
})
...

getProducts () {
  return PRODUCTS;
}

getProduct(productId) {
  return PRODUCTS.find(item=>item.id==productId);
}
```

```ts
// views/home/home.component

..
import { ProductsService, Product } from '../../services/products.service';

...

constructor(
  private productsService: ProductsService,
) { }

ngOnInit() {
  this.products = this.productsService.getProducts();
}
```

```ts
// views/product/product.component


constructor(
  private activatedRoute: ActivatedRoute,
  private productsService: ProductsService,
) { }

...

getProduct(){
  this.product = this.productsService.getProduct(this.productId);
}
```

[<--](../observables.md)
