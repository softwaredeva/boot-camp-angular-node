### Respuesta

Agregar o modificar los siguientes códigos y archivos al proyecto:

```
app.component.html

<app-products-list></app-products-list>
```

```
app.component.scss


```

```
app.module.ts

import { ProductsListComponent } from './components/products-list/products-list.component';

@NgModule({
  declarations: [
  ...,
  ProductsListComponent,
  ...
})
export class AppModule { }
```

```
components/products-list/products-list.component.ts

import { Component, OnInit } from '@angular/core';
import { Product } from '../../product';
import { PRODUCTS } from '../../products';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  products: Product[] = PRODUCTS;

  constructor() { }

  ngOnInit() {
  }

}
```

```
components/products-list/products-list.component.html


<div class="productsListContainer">
  <div class="productContainer" *ngFor="let product of products">
    <button mat-button>
      <div class="buttonInner">
        <div class="imageContainer">
          <img [src]="product?.image" [alt]="product?.name">
        </div>
        <h1>{{product?.name}}</h1>
        <div class="priceContainer">
          <h2>{{product?.cost | currency}}</h2>
          <mat-icon color="accent">arrow_right_alt</mat-icon>
        </div>
      </div>
    </button>
  </div>
</div>
```

```
components/products-list/products-list.component.scss

.productsListContainer{
  display: flex;
  flex-wrap: wrap;
  .productContainer{
    flex: 0 1 25%;
    width: 25%;
    display: flex;
    justify-content: center;
    margin: 1em;
    button{
      width: 100%;
      background-color: #c8c8c8;
      .buttonInner{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        padding: 1em;

        .imageContainer{
          height: 4em;
          width: auto;
          img{
            height: 100%;
            width: auto;
          }
        }
        h1{
          width: 100%;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .priceContainer{
          display: flex;
          align-items: center;
        }
      }
    }
  }

}
```
