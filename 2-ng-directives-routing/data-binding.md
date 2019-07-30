## Data binding

En angular utilizamos {{ variable }} (Interpolation) dentro de la sintaxis del html para que angular "renderee" el valor de una variable.

```
component.html

   <h1>{{title}}</h1>
   <h2>My favorite food is: {{myFood}}</h2>


component.ts

  title: string = 'Tour of Heroes';
  myFood: string = 'Sushi';
```

Podemos hacer llamadas a funciones de la siguiente forma:

```
<p>The sum of 1 + 1 is not {{1 + 1 + getVal()}}.</p>
```

Cuando buscamos ligar una variable al valor de una propiedad de un tag html:

```
<img [src]="itemImageUrl2">
```

Podemos acceder directamente desde el html a la instancia "typescript" de los elementos HTML usando las variables de referencia:

```
<label>Type something:
  <input #customerInput>{{customerInput.value}}
</label>
```

También podemos ejecutar funciones que respondan a eventos
```
<button (click)="deleteHero()">Delete hero</button>
```
[Referencia (template-syntax)](https://angular.io/guide/template-syntax)  
[Referencia](https://angular.io/tutorial/toh-pt1)

#### Actividad

En nuetro archivo "app.component" agregar los elementos necesarios para que se pueda mostrar el valor de un objeto de tipo "Producto" con las propiedades: id, name, cost e image, declarado en el controlador de la vista, usando el siguiente estilo y html.

```
app.component.html


<div class="buttonInner">
  <div class="imageContainer">
    <img src="link/a/la/imagen" alt="texto alternativo">
  </div>
  <h1>Nombre del producto</h1>
  <div class="priceContainer">
    <h2>345</h2>
    <mat-icon color="accent">arrow_right_alt</mat-icon>
  </div>
</div>
```

```
app.component.scss

.buttonInner{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 1em;

  .imageContainer{
    height: 4em;
    width: auto;
    img{
      height: 100%;
      width: auto;
    }
  }
  h1{
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .priceContainer{
    display: flex;
    align-items: center;
  }
}
```

[Respuesta](./respuestas/data-binding.md)
