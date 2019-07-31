import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import {  Product } from '../../interfaces/Product';

import { PRODUCTS } from '../../interfaces/products';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  productId: string;
  product: Product;

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

  addToCart(){
    console.log("addToCart",this.product);
  }

}
