import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { ProductComponent } from './views/product/product.component';
import { CheckoutComponent } from './views/checkout/checkout.component';

const routes: Routes = [
  { path: '',   redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: HomeComponent },
  { path: 'producto/:id', component: ProductComponent },
  { path: 'pedido', component: CheckoutComponent },
  { path: '**', redirectTo: '/inicio', pathMatch: 'prefix' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
