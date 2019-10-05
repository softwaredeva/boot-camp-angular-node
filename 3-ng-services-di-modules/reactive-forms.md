# Reactive forms

Para hacer control y validación de formas de información utilizamos "FormControl".

Se debe importar el módulo "ReactiveForms" en el módulo donde lo usaremos

```ts
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  ...
  imports: [
    ...
    ReactiveFormsModule,
    ...
```

## Actividades

1.- Agregar a views/product/product.component un controlador de forma con validador para que solo se pueda hacer click en el botón de agregar producto cuando se seleccionen 1 o más productos.

```html
<button mat-button [disabled]="condition">Button</button>
```

[Ver Respuesta](./respuestas/reactive-forms.md)

[<--](./README.md)
