import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../interfaces/Product';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  @Input() products: Product[];

  constructor() { }

  ngOnInit() {
  }

}
