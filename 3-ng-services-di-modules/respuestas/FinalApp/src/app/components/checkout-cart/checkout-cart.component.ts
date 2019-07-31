import { Component, OnInit, Input } from '@angular/core';
import { CheckoutProduct } from '../../services/checkout.service';

@Component({
  selector: 'app-checkout-cart',
  templateUrl: './checkout-cart.component.html',
  styleUrls: ['./checkout-cart.component.scss']
})
export class CheckoutCartComponent implements OnInit {
  _products: CheckoutProduct[];
  @Input() set products(value: CheckoutProduct[]){
    this._products = value;
    this.calculateTotal();
  }; get products(): CheckoutProduct[]{return this._products;};
  total: number = 0;
  constructor() { }

  ngOnInit() {
  }

  calculateTotal(){
    if(this.products)
    this.total = this.products.map(prod=>prod.cost*prod.quantity)
    .reduce((preVal, currVal)=>{
      return preVal+currVal;
    },0);
  }

}
