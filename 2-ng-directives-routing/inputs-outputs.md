# Inputs & Ouputs (data-binding)

Los componentes pueden interactuar con la vista "padre" utilizando el data-binding, esto se hace defininendo en la clase del componente que variables estarán "ligadas" de entrada, de salida o ambas.

Para esto se utiliza el decorador "@Input()":

```ts
import { Input } from '@angular/core';

@Input() user: User;
```

Esto nos permitirá que en la vista del componente padre definamos lo siguiente:

```html
<app-my-component [user]="userData"></my-component>
```

Así el componente hijo podrá **recibir** el valor de la variable "userData" que se encuentra en la clase del componente padre.

Para poder **emitir** un valor, que en este caso le llamaremos "evento", utilizaremos el decorador "@Output()", así como una instancia del objeto "EventEmitter", el cuál nos dará control sobre los eventos emitidos

```ts
import { Output, EventEmitter } from '@angular/core';

@Output() userValue: EventEmitter<User> = new EventEmitter<User>();
```

Esto nos permitirá que en la vista del componente padre definamos lo siguiente:

```html
<app-my-component (userValue)="userValueChange($event)"></my-component>
```

También podemos establecer que una misma variable tenga "entrada" y "salida" de la siguiente manera:

```ts
import { Input, Output, EventEmitter } from '@angular/core';

@Input() user: User;
@Output() userChange: EventEmitter<User> = new EventEmitter<User>();
```

Esto nos permitirá que en la vista del componente padre definamos lo siguiente:

```html
<app-my-component [(user)]="userData"></my-component>
```

[Referencia](https://angular.io/tutorial/toh-pt3)

## Actividad

Agregar a nuestro componente la propiedad de entrada "products" para que se actualice desde la vista padre la lista de productos.

[Respuesta](./respuestas/inputs-outputs.md)

[<--](./README.md)
