import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './services/in-memory-data.service';

import {
  MatSidenavModule, MatButtonModule, MatIconModule, MatListModule,
  MatToolbarModule, MatFormFieldModule, MatInputModule, MatSelectModule
} from '@angular/material';

import { HomeComponent } from './views/home/home.component';
import { CheckoutComponent } from './views/checkout/checkout.component';
import { ProductComponent } from './views/product/product.component';

import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductsListItemComponent } from './components/products-list-item/products-list-item.component';
import { CheckoutCartComponent } from './components/checkout-cart/checkout-cart.component';
import { CheckoutCartProductsComponent } from './components/checkout-cart-products/checkout-cart-products.component';
import { CheckoutFormComponent } from './components/checkout-form/checkout-form.component';


@NgModule({
  declarations: [
    AppComponent,

    HomeComponent,
    CheckoutComponent,
    ProductComponent,

    ProductsListComponent,
    ProductsListItemComponent,
    CheckoutCartComponent,
    CheckoutCartProductsComponent,
    CheckoutFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false, delay: 300 }
    ),

    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
