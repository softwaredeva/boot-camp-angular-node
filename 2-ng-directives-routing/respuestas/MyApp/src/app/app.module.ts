import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';


import {
  MatSidenavModule, MatButtonModule, MatIconModule, MatListModule,
  MatToolbarModule, MatFormFieldModule, MatInputModule, MatSelectModule
} from '@angular/material';

import { HomeComponent } from './views/home/home.component';
import { ProductComponent } from './views/product/product.component';

import { ProductsListComponent } from './components/products-list/products-list.component';


@NgModule({
  declarations: [
    AppComponent,

    HomeComponent,
    ProductComponent,

    ProductsListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
