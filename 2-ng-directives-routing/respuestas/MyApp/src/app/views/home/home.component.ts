import { Component, OnInit } from '@angular/core';
import { Product } from '../../interfaces/Product';
import { PRODUCTS } from '../../interfaces/products';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products: Product[] = PRODUCTS;

  constructor(
  ) { }

  ngOnInit() {
  }

}
