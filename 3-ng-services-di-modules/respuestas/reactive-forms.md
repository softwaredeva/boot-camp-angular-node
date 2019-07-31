### Respuesta

Agregar o modificar los siguientes códigos y archivos al proyecto:


```
app.module.ts


import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  ...
  imports: [
    ...
    ReactiveFormsModule,
    ...
    


views/product/product.component.ts

...
import { FormControl, Validators } from '@angular/forms';

...

export class ProductComponent implements OnInit {
  ...

  addCountControl: FormControl = new FormControl(0,[Validators.required,Validators.min(1)]);



views/product/product.component.html


<div class="addProduct">
  <mat-form-field appearance="outline">
    <input matInput type="number" [formControl]="addCountControl">
  </mat-form-field>

  <button mat-raised-button color="primary" [disabled]="!addCountControl.valid" (click)="addToCart()">AGREGAR AL CARRITO</button>
</div>
```
