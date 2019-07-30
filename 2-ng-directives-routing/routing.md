## Routing

Angular utiliza un sistema de enrutamiento interno para manejar el estado de la aplicación con base en las ruta que se tiene en el explorador. Se utilizan componentes para representar una "pantalla" por cada ruta en el url.

Las rutas pueden tener **parámetros** los cuáles nos permitirán personalizar la vista con base en la ruta.


Si nuestro proyecto no cuenta de inicio con un módulo de enrutamiento lo podemos agregar usando el siguiente comando.
```
> ng generate module app-routing --flat --module=app
```

Cada ruta se define dentro de este módulo de la siguiente manera:

```
const routes: Routes = [
  { path: 'inicio', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  ...

```

Aquí es importante tener en cuenta que esta ruta será visible por el usuario y deberá ser amigable para facilitar la navegación dentro de nuestra aplicación usando las herramientas y funciones nativas de los exploradores.

Estas rutas serán cargadas en un componente nativo de angular llamado RouterOutlet el cuál se debe definir en el componente padre o principal del módulo donde se está importando el enrutador

```
<router-outlet></router-outlet>
```

Para movernos en las rutas dentro de nuestra aplicación podemos usar una directiva directamente sobre los botones o links que queremos ligar a esta ruta para que al hacer click el usuario esta cambie

```
<nav>
  <a routerLink="/inicio">Inicio</a>
  <a routerLink="/perfil">Perfil</a>
</nav>
```

ó podemos usar el controlador de las rutas para movernos, este se llama

```
import {Router} from '@angular/router';

constructor(private router: Router) {}

navigateToLogin() {
   this.router.navigate(['/root/login']);
}
```

[Referencia](https://angular.io/tutorial/toh-pt5)

#### Actividad

1.- Crear dos componentes con sus respectivas rutas llamados "Home" y "Product", la ruta de "producto" deberá recibir como parámetro el id del producto

```
> ng generate component views/Home

> ng generate component views/Product
```


2.- Cambiar la lista de productos que tenemos creada al componente "Home" utilizando un div como contenedor y el siguiente estilo.

```
views/home/home.component.html

<div class="homeContainer">
  <app-products-list [products]="products"></app-products-list>
</div>


views/home/home.component.scss

.homeContainer{
  padding: 2.5% 10%;
}
```


3.- Cambiar los archivos "Product" y "products" a la carpeta de "views" y eliminar del app.component cualquier rastro de nuestra lista de productos y solo dejar el tag RouterOutlet

4.- Agregamos la directiva "routerLink" al botón de la lista de productos para navegar a la ruta de "Producto"


[Respuesta](./respuestas/routing.md)
