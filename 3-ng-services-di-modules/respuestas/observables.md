### Respuesta

Agregar o modificar los siguientes códigos y archivos al proyecto:


```
app.component

constructor(
  ...
){
  ...
  this.searchFormControl.valueChanges.pipe(
    filter(value=>!!value),
    debounceTime(300),
    distinctUntilChanged(),
    tap(()=>{this.isSearching = true;this.searchComplete = false;}),
  ).subscribe(value=>{
    console.log("value",value);
    this.isSearching = false;
    this.searchComplete = true;
  });
}
```

```
views/product/product.component

ngOnInit() {
  this.activatedRoute.params.subscribe((params:Params)=>{
    console.log("params",params);
    if(params.id){
      this.productId = params.id;
      this.getProduct();
    }
  });
}
```
