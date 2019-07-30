import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Product } from './products.service';
import { Injectable } from '@angular/core';

import { PRODUCTS } from './products';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const products = PRODUCTS;
    return {products};
  }

  // Overrides the genId method to ensure that a product always has an id.
  // If the products array is empty,
  // the method below returns the initial number (11).
  // if the products array is not empty, the method below returns the highest
  // product id + 1.
  genId(products: Product[]): string {
    return products.length > 0 ? (Math.max(...products.map(product => parseInt(product.id))) + 1).toString() : '11';
  }
}
