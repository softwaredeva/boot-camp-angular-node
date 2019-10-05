# HttpClient

Es el mecanismo de angular para comunicarse con servidores remotos utilizando HTTP.

Se debe importar en el "app.module":

```ts
@NgModule({
  imports: [
    HttpClientModule,
  ],
})
```

[Referencia](https://angular.io/tutorial/toh-pt4)

## Actividad

1.- Simular un servidor de datos para poder probar nuestro HttpClient

```sh
$ npm i -s angular-in-memory-web-api
>
```

```ts
// app.module.ts

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

...
NgModule({
  imports: [
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
})
...
```

```sh
$ ng generate service InMemoryData
>
```

```ts
// in-memory-data.service.ts

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
```

2.- Modificar los métodos de "product.service" para hacer una llamada al servidor en lugar de buscar en las constantes.

[Respuesta](./respuestas/http-client.md)

[<--](./README.md)
