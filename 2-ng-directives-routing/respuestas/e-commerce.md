### Respuesta

Agregar o modificar los siguientes códigos y archivos al proyecto:

```
app.component.ts

import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';

import { debounceTime, distinctUntilChanged,tap, filter }from 'rxjs/operators';

import { Product } from './views/Product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  searchFormControl: FormControl = new FormControl();
  searchResults: Product[];
  isSearching: boolean;
  searchComplete: boolean;
  searchOpen: boolean = false;
  constructor(
    changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);

    this.searchFormControl.valueChanges.pipe(
      filter(value=>!!value),
      debounceTime(300),
      distinctUntilChanged(),
      tap(()=>{this.isSearching = true;this.searchComplete = false;}),
    ).subscribe(value=>{
      console.log("searchFormControl value",value);
      // TODO: buscar en productos y filtrar resultados
      // this.searchResults = results;
      this.isSearching = false;
      this.searchComplete = true;
    });
  }

  searchBlur(){
    this.searchOpen = false;
    this.searchFormControl.setValue('');
    this.searchComplete = false;
    this.isSearching = false;
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
```

```
app.component.html

<div class="appContainer" [class.appIsMobile]="mobileQuery.matches">
  <mat-toolbar color="primary" class="appToolbar">
    <a mat-button routerLink="/">
      <div class="logoContainer">
        <img src="/assets/logo.png" alt="Logo">
        <h1>Tienda en linea</h1>
      </div>
    </a>
    <mat-form-field (click)="snav.close()" [ngClass]="{'focused': searchOpen}">
      <input type="search" matInput placeholder="Buscar producto"
      (focus)="searchOpen = true"
      [formControl]="searchFormControl">
      <mat-icon matSuffix>search</mat-icon>
    </mat-form-field>
    <button mat-icon-button (click)="snav.toggle()"><mat-icon>shopping_cart</mat-icon></button>
  </mat-toolbar>
  <mat-sidenav-container class="appSidenavContainer">
    <mat-sidenav #snav mode="over" position="end"
                 [fixedInViewport]="mobileQuery.matches" fixedTopGap="56">
      <!-- Aquí estará el componente del "checkout-cart" -->
    </mat-sidenav>

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

    </mat-sidenav-content>
  </mat-sidenav-container>
</div>

```

```
app.component.scss

.appContainer{
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
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
    /* When the sidenav is not fixed, stretch the sidenav container to fill the available space. This
       causes `<mat-sidenav-content>` to act as our scrolling element for desktop layouts. */
    flex: 1;
  }

  &.appIsMobile{
    .appToolbar{
      position: fixed;
      /* Make sure the toolbar will stay on top of the content as it scrolls past. */
      z-index: 2;
    }
    .appSidenavContainer{
      /* When the sidenav is fixed, don't constrain the height of the sidenav container. This allows the
         `<body>` to be our scrolling element for mobile layouts. */
      flex: 1 0 auto;
    }
  }
}
```

```
app.module.ts

...
import { ReactiveFormsModule } from '@angular/forms';

import {
  MatSidenavModule, MatButtonModule, MatIconModule, MatListModule,
  MatToolbarModule, MatFormFieldModule, MatInputModule, MatSelectModule
} from '@angular/material';

...

@NgModule({
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
    MatSelectModule,
  ],
  ...
})
export class AppModule { }
```


```
views/product/product.component.ts

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
    this.activatedRoute.params.subscribe((params:Params)=>{
      console.log("params",params);
      if(params.id){
        this.productId = params.id;
        this.getProduct();
      }
    });
  }

  getProduct(){
    this.product = PRODUCTS.find(item=>item.id==this.productId);
  }
}
```

```
views/product/product.component.html

<div class="productContainer">
  <a mat-button routerLink="/">
    <mat-icon>keyboard_arrow_left</mat-icon>
    <span>Átrás</span>
  </a>
  <div class="productsWrapper">
    <div class="productImages">
      <div class="imageContainer">
        <img [src]="product?.image" [alt]="product?.name">
      </div>
    </div>
    <div class="productInfo">
      <h1>{{product?.name}}</h1>
      <h2>{{product?.cost | currency}}</h2>
      <div class="addProduct">
        <mat-form-field appearance="outline">
          <input matInput type="number" [formControl]="addCountControl">
        </mat-form-field>

        <button mat-raised-button color="primary" [disabled]="!addCountControl.valid" (click)="addToCart()">AGREGAR AL CARRITO</button>
      </div>
      <p>{{product?.description}}</p>
    </div>
  </div>
</div>

```
```
views/product/product.component.scss
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
