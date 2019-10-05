# Angular material

Instalar:

```sh
$ ng add @angular/material
>
```

Importar cada uno de los módulos de los componentes que se quieran usar en el respectivo "module":

```ts
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  ...
  imports: [MatButtonModule, MatCheckboxModule],
  ...
})
export class AppModule { }
```

[Referencia](https://material.angular.io/guide/getting-started)

## Actividad

Agregar "material" al proyecto recién creado.

[Ver Respuesta](./respuestas/angular-material.md)

[<--](./README.md)
