import { Component, OnInit, Input } from '@angular/core';

import { CheckoutProduct } from '../../services/checkout.service';

@Component({
  selector: 'app-checkout-cart-products',
  templateUrl: './checkout-cart-products.component.html',
  styleUrls: ['./checkout-cart-products.component.scss']
})
export class CheckoutCartProductsComponent implements OnInit {
  @Input() products: CheckoutProduct[];

  constructor() { }

  ngOnInit() {
  }

}
