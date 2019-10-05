import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';

import { ProductsService, Product } from '../../services/products.service';
import { CheckoutService } from '../../services/checkout.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  productId: string;
  product: Product;

  addCountControl: FormControl = new FormControl(0, [Validators.required, Validators.min(1)]);
  constructor(
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService,
    private checkoutService: CheckoutService,
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      if (params.id) {
        this.productId = params.id;
        this.getProduct();
      }
    });
    this.addCountControl.valueChanges.subscribe(value => {
      if (parseInt(value, 10) < 0) {
        this.addCountControl.setValue(0);
      }
    });
  }

  getProduct() {
    this.productsService.getProduct(this.productId).subscribe(data => {
      if (data) {
        this.product = data;
      }
    });
  }

  addToCart() {
    this.checkoutService.addToCart(this.product, this.addCountControl.value);
  }

}
