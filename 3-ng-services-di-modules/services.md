# Services

Los componentes no deben almacenar u obtener directamente la información o los datos, y tampoco se encargarán de validar los datos, los componentes deben enfocarse en solo presentar la información y el acceso de la información lo hará un servicio.

Estos son instancias **singleton** las cuáles nos permiten mantener un estado de datos integro a lo largo de nuestra aplicación.

Estos servicios se deben "injectar" a los componentes a través del constructor. Así como declararlos como "providers" en el módulo que se utilizarán.

Podemos generar estos servicios utilizando el siguiente comando.

```sh
ng g service services/MyService
```

[Referencia](https://angular.io/tutorial/toh-pt4)

## Actividad

1.- Agregar un servicio de productos para obtener la lista de productos desde este, agregar a este servicio la interfaz "product"

2.- Modificar la vista de producto para que obtenga desde el servicio la información

[Ver Respuesta](./respuestas/observables.md)

[<--](./README.md)
