# Routing

## Respuesta

Agregar o modificar los siguientes códigos y archivos al proyecto:

```html
<!-- app.component.html -->

<router-outlet></router-outlet>
```

```ts
// app.module.ts

import { AppRoutingModule } from './app-routing.module';

import { HomeComponent } from './views/home/home.component';
import { ProductComponent } from './views/product/product.component';

@NgModule({
  declarations: [
    ...,
    HomeComponent
    ProductComponent,
  ],
  import: [
    ...
    AppRoutingModule
  ]
  ...
})
export class AppModule { }
```

```ts
// app-routing.module.ts

import { HomeComponent } from './views/home/home.component';
import { ProductComponent } from './views/product/product.component';

const routes: Routes = [
  { path: '',   redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: HomeComponent },
  { path: 'producto/:id', component: ProductComponent },
  { path: '**', redirectTo: '/inicio', pathMatch: 'prefix' }
];
```

```ts
// views/home/home.component.ts


import { Product } from '../Product';
import { PRODUCTS } from '../products';

...
export class HomeComponent implements OnInit {
  products: Product[] = PRODUCTS;
  ...
```

```sh
products.ts -> views/products.ts
Product.ts -> views/Product.ts
```

```html
<!-- components/products-list/products-list.component.html -->

...
<div class="productContainer" *ngFor="let product of products">
  <button mat-button [routerLink]="['/producto',product?.id]">
    <div class="buttonInner">
      ...
```

[<--](../routing.md)
