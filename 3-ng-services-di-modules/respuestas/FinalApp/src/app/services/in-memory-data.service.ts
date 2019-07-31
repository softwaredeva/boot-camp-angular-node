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

  genId(products: Product[]): string {
    return products.length > 0 ? (Math.max(...products.map(product => parseInt(product.id))) + 1).toString() : '11';
  }
}
