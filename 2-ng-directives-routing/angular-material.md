## Angular material

Instalar:

```
> ng add @angular/material
```

Importar cada uno de los módulos de los componentes que se quieran usar en el respectivo "module":

```
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

#### Actividad

Agregar "material" al proyecto recién creado.
