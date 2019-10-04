# Ng Built-in directives & pipes

## Respuesta

Agregar o modificar los siguientes códigos y archivos al proyecto:

```html
<!-- app.component.html -->


<div class="productsListContainer">
  <div class="productContainer" *ngFor="let product of products">
    <button mat-button>

      <div class="buttonInner">
        ...
        <div class="priceContainer">
          <h2>{{product?.cost | currency}}</h2>
          ...
        </div>
      </div>
    </button>
  </div>
</div>
```

```ts
// app.component.ts

...
import { PRODUCTS } from '.products';

export class AppComponent implements OnDestroy {
    products: Product[] = PRODUCTS;
    ...
}
```

```ts
// products.ts

import { Product } from './Product';

export const PRODUCTS: Product[] = [
  {
    id: '1', name: 'Mini perfumero', cost: 55, image: 'assets/products/prod1.jpg',
    description: 'los mini botella de pulverizador de perfume es lo suficientemente pequeño y ligero como para guardarlo en su bolsillo o bolso, lo que le permite disfrutar de una fragancia maravillosa en todo momento. Cuando asistes a una fiesta, pases unas vacaciones o en un viaje de negocios, es una gran herramienta para mantenerte fresco y darte confianza.' },
  {
    id: '2'
    ....

];

```

```ts
// app.module.ts

import { ..., MatButtonModule } from '@angular/material';

@NgModule({
  ...
  imports: [
  ...,
  MatButtonModule
  ...
})
export class AppModule { }
```

[<--](../ng-built-in-directives-pipes.md)
