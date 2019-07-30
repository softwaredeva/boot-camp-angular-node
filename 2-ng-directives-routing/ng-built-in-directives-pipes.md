## Angular built-in directives & pipes

### Directives

Las directivas son propiedades que se definen para extender funcionalidades de elementos del DOM.

Angular cuenta con directiva por defecto.

* ngClass
* ngModel
* \*ngFor
* \*ngIf
* ngSwitch
* ng-template
* ng-container

### Pipes

Se utilizan como "filtro" de como se debe renderiar el contenido de una variable. Se utilizan de la siguiente manera:
```
<p>The client's birthday is {{ birthday | date:"MM/dd/yy" }} </p>
```

* AsyncPipe
* CurrencyPipe
* DatePipe
* DecimalPipe
* I18nPluralPipe
* I18nSelectPipe
* JsonPipe
* KeyValuePipe
* LowerCasePipe
* PercentPipe
* SlicePipe
* TitleCasePipe
* UpperCasePipe

[Referencia](https://angular.io/tutorial/toh-pt1)  
[Referencia](https://angular.io/guide/structural-directives)

#### Actividad

1.- En el proyecto creado con "material", agregar al archivo "app.component" lo necesario para convertir nuestro producto, en una lista de productos usando "\*ngFor" y el siguiente "template".

```
app.component.html

<div class="productsListContainer">
  <div class="productContainer">
    <button mat-button>

      <div class="buttonInner">
        ...
      </div>

    </button>
  </div>
</div>
```

```
app.component.scss

.productsListContainer{
  display: flex;
  flex-wrap: wrap;
  .productContainer{
    flex: 0 1 25%;
    width: 25%;
    display: flex;
    justify-content: center;
    margin: 1em;
    button{
      width: 100%;
      background-color: #c8c8c8;
      .buttonInner{
        ...
      }
    }
  }
}
```


2.- Mostrar el costo de los productos con un formato adecuado.


[Respuesta](./respuestas/ng-built-in-directives-pipes.md)
