import { Component, OnInit } from '@angular/core';
import { ProductsService, Product } from '../../services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products: Product[];

  constructor(
    private productsService: ProductsService,
  ) { }

  ngOnInit() {
    this.productsService.getProducts().subscribe((products:Product[])=>{
      this.products = products;
    });
  }

}
