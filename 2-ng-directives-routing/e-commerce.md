# E-commerce

Nuestro proyecto consiste en un mini e-commerce, para esto deberemos mejorar nuestra página para que se mas amigable con el usuario
Para esto seguiremos las siguientes actividades o retos.

## Actividad

1.- Agregar un "toolbar" y un "sidenav" de la libería "material" dentro de un div, con el siguiente estilo.

```ts
// app.module.ts

import { ReactiveFormsModule } from '@angular/forms';

import {
  MatSidenavModule, MatButtonModule, MatIconModule, MatListModule,
  MatToolbarModule, MatFormFieldModule, MatInputModule
} from '@angular/material';

...

imports: [
  ReactiveFormsModule,

  MatSidenavModule,
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatInputModule,
],
...


// app.component.ts

import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';

export class AppComponent implements OnDestroy {
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  constructor(
    changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}  

```

```html
<!-- app.component.html -->

<div class="appContainer" [class.appIsMobile]="mobileQuery.matches">
<mat-toolbar color="primary" class="appToolbar">
</mat-toolbar>
<mat-sidenav-container class="appSidenavContainer">
  <mat-sidenav #snav mode="over" position="end"
               [fixedInViewport]="mobileQuery.matches" fixedTopGap="56">
    <!-- Aquí estará el componente del "checkout-cart" -->
  </mat-sidenav>

  <mat-sidenav-content>
    <router-outlet></router-outlet>
  </mat-sidenav-content>
</mat-sidenav-container>
</div>

```

```scss
// app.component.scss

.appContainer{
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  .appSidenavContainer{
    /* When the sidenav is not fixed, stretch the sidenav container to fill the available space. This
       causes `<mat-sidenav-content>` to act as our scrolling element for desktop layouts. */
    flex: 1;
  }

  &.appIsMobile{
    .appSidenavContainer{
      /* When the sidenav is fixed, don't constrain the height of the sidenav container. This allows the
         `<body>` to be our scrolling element for mobile layouts. */
      flex: 1 0 auto;
    }
  }
}
```

2.- Agregar a la "toolbar" un botón con una imagen de un logo y un título y un botón para abrir el menú lateral

```html
<!-- app.component.html -->
...
<mat-toolbar color="primary" class="appToolbar">
  <a mat-button routerLink="/">
    <div class="logoContainer">
      <img src="/assets/logo.png" alt="Logo">
      <h1>Tienda en linea</h1>
    </div>
  </a>
  <button mat-icon-button><mat-icon>shopping_cart</mat-icon></button>

</mat-toolbar>
...
```

```scss
// app.component.scss

...
right: 0;
.appToolbar{
  justify-content: space-between;
  .logoContainer{
    display: flex;
    align-items: center;
    img{
      height: 35px;
      margin-right: 1em;
      border-radius: 25px;
      border: 2px solid white;
    }
  }
}
.appSidenavContainer{

...

&.appIsMobile{
  .appToolbar{
    position: fixed;
    /* Make sure the toolbar will stay on top of the content as it scrolls past. */
    z-index: 2;
  }
...
```

3.- Agregar dentro de la "toolbar" un "Formfield" el cuál deberá mostrar una lista de resultados de búsqueda en caso de que el usuario ingrese un valor

```ts
// app.component.ts

...
import { FormControl } from '@angular/forms';

import { debounceTime, distinctUntilChanged,tap, filter }from 'rxjs/operators';

import { Product } from './views/Product';

...

export class AppComponent implements OnDestroy {
  ...

  searchFormControl: FormControl = new FormControl();
  searchResults: Product[];
  isSearching: boolean;
  searchComplete: boolean;
  searchOpen: boolean = false;

  ...

  searchBlur(){
    this.searchOpen = false;
    this.searchFormControl.setValue('');
    this.searchComplete = false;
    this.isSearching = false;
  }

```

```html
<!-- app.component.html -->

...
</a>
<mat-form-field (click)="snav.close()" [ngClass]="{'focused': searchOpen}">
  <input type="search" matInput autocomplete="off" placeholder="Buscar producto"
  (focus)="searchOpen = true"
  [formControl]="searchFormControl">
  <mat-icon matSuffix>search</mat-icon>
</mat-form-field>
<button mat-icon-button><mat-icon>shopping_cart</mat-icon></button>

...


<mat-sidenav-content>
  <div class="searchResults" *ngIf="searchOpen">
    <h3 *ngIf="isSearching">Buscando...</h3>
    <h3 *ngIf="!isSearching && searchComplete && !searchResults?.length">Sin resultados</h3>
    <mat-nav-list *ngIf="!isSearching && searchComplete && searchResults?.length">
      <a mat-list-item (click)="searchBlur()" [routerLink]="['/producto',result?.id]" *ngFor="let result of searchResults">
        <img [src]="result.image" [alt]="result.name">
        <h3>{{result.name}}</h3>
        <mat-icon>arrow_right_alt</mat-icon>
      </a>
    </mat-nav-list>
    <div class="backdrop" (click)="searchBlur()"></div>
  </div>

  <router-outlet></router-outlet>
...

```

```scss
// app.component.scss

.appToolbar{
  ...
  mat-form-field{
    width: 25%;
    font-size: 0.8em;
    margin-bottom: -15px;
    transition: width 0.3s ease-in-out;
    &.mat-focused,&.focused{
      width: 45%;
    }
  }
}
.searchResults{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  // padding: 1% 21% 2% 34%;
  z-index: 900;
  h3{
    padding: 1% 21% 2% 34%;
    background-color: white;
  }
  mat-nav-list{
    padding: 1% 21% 2% 34%;
    background-color: white;
    a{
      img{
        height: 1em;
      }
    }
  }
  .backdrop{
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
  }
}
.appSidenavContainer{
  ...
```

4.- En la pantalla de "Product" agregaremos lo necesario para:

* Leer el id de la ruta
* Buscar el producto con este id y mostrarlo al usuario

```ts
// views/product/product.component.ts

import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';

import {  Product } from '../Product';

import { PRODUCTS } from '../products';

...

export class ProductComponent implements OnInit {
  productId: string;
  product: Product;

  addCountControl: FormControl = new FormControl(0,[Validators.required,Validators.min(1)]);
  constructor(
    private activatedRoute: ActivatedRoute,
) { }

  ngOnInit() {
    let params: Params = this.activatedRoute.snapshot.params;
    if(params.id){
      this.productId = params.id;
      this.getProduct();
    }
    // this.activatedRoute.params.subscribe((params:Params)=>{
    //   console.log("params",params);
    //   if(params.id){
    //     this.productId = params.id;
    //     this.getProduct();
    //   }
    // });
  }

  getProduct(){
    this.product = PRODUCTS.find(item=>item.id==this.productId);
  }
}

```

```html
<!-- views/product/product.component.html -->

<div class="productContainer">
  <a mat-button>
    <mat-icon>keyboard_arrow_left</mat-icon>
    <span>Átrás</span>
  </a>
  <div class="productsWrapper">
    <div class="productImages">
      <div class="imageContainer">
        <img src="path/to/image" alt="Alt producto">
      </div>
    </div>
    <div class="productInfo">
      <h1>Nombre del producto</h1>
      <h2>$ 664.00</h2>
      <div class="addProduct">
        <mat-form-field appearance="outline">
          <input matInput type="number" [formControl]="addCountControl">
        </mat-form-field>

        <button mat-raised-button color="primary" [disabled]="!addCountControl.valid>AGREGAR AL CARRITO</button>
      </div>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
  </div>
</div>

```

```scss
// views/product/product.component.scss

.productContainer{
  padding: 2% 0;
  .productsWrapper{
    display: flex;
    .productImages,.productInfo{
      flex: 0 0 50%;
      width: 50%;
    }
    .productImages{
      padding: 2em;
      border-right: 0.5px solid lightgray;
      .imageContainer{
        width: 100%;
        img{
          width: 100%;
        }
      }
    }
    .productInfo{
      padding: 2em;
      .addProduct{
        display: flex;
        align-items: center;
        mat-form-field{
          width: 62px;
          margin-right: 1em;
        }
        button[mat-raised-button]{
          height: 59px;
          margin-bottom: 22px;
        }
      }
    }
  }

}
```

[Respuesta](./respuestas/e-commerce.md)

[<--](./README.md)
