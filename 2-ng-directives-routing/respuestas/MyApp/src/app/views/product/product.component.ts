import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';

import {  Product } from '../Product';

import { PRODUCTS } from '../products';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
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

  addToCart(){
    console.log("addToCart",this.product,this.addCountControl.value);
  }

}
