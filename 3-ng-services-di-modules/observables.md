# Observables

Los observadores se utilizan para mandar mensajes entre un emisor y varios suscriptores en la aplicación. Proveen herramientas para el manejo de eventos, programación asíncrona y manejo de múltiples valores.

Los observadores son declarativos lo cual significa que se define una función que no será ejecutada hasta que se suscriban los consumidores.

[rxmarbles](https://rxmarbles.com)  
[Referencia](https://angular.io/guide/observables)

## Actividad

1.- Agregar una subscripción al observador del cambio de valor del input utilizado para buscar productos para que se pueda reaccionar ante el cambio de entrada del usuario. Deberá filtrar los valores vacíos. (filter, debounceTime, distinctUntilChanged, tap)

```ts
app.component

constructor(
  ...
){
  ...
  this.searchFormControl.valueChanges. ...
}
```

2.- Des comentar la subscripción a los parámetros de la ruta en "views/product/product.component" y eliminar la otra forma de obtener los parámetros.

[Ver Respuesta](./respuestas/observables.md)

[<--](./README.md)
