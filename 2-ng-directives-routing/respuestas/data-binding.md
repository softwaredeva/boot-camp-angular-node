# Data binding

## Respuesta

Agregar o modificar los siguientes códigos y archivos al proyecto:

```html
<!-- app.component.html -->


<div class="buttonInner">
  <div class="imageContainer">
    <img [src]="product?.image" [alt]="product?.name">
  </div>
  <h1>{{product?.name}}</h1>
  <div class="priceContainer">
    <h2>{{product?.cost}}</h2>
    <mat-icon color="accent">arrow_right_alt</mat-icon>
  </div>
</div>
```

```ts
// app.component.ts

...
import { Product } from './Product';

export class AppComponent implements OnDestroy {
    product: Product;

    constructor() {
      this.product = {id:'1',id: '1', name: 'Mini perfumero', cost: 55, image: 'assets/products/prod1.jpg'};
    }
    ...
}
```

```ts
// Product.ts

export interface Product{
  id: string;
  name: string;
  cost: number;
  image: string;
  description?: string;
}
```

```ts
<!-- app.module.ts -->

import { MatIconModule } from '@angular/material';

@NgModule({
  ...
  imports: [
  ...
  MatIconModule
  ...
})
export class AppModule { }
```

[<--](../data-binding.md)
