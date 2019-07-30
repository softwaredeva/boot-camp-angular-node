import { Component, OnInit, Input } from '@angular/core';
import { CheckoutProduct } from '../../services/checkout.service';

@Component({
  selector: 'app-checkout-cart',
  templateUrl: './checkout-cart.component.html',
  styleUrls: ['./checkout-cart.component.scss']
})
export class CheckoutCartComponent implements OnInit {
  @Input() products: CheckoutProduct[];
  total: number = 0;
  constructor() { }

  ngOnInit() {
  }

}
