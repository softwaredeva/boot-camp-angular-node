import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
import { PRODUCTS } from '../products';

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
