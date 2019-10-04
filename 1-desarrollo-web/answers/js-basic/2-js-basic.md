# 2 Ejecutar js que modifique una página en consola

## Pasos

* Abrir cualquier explorador web en cualquier página
* Abrir menú de desarrollador
* Abrir inspector web
* Seleccionar "Consola"
* En la linea de entrada de comandos ">" ingresar código js

```js
// https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Object/prototype

var DOMmods = function() {
  this.body = document.getElementsByTagName('body')[0];
};

DOMmods.prototype.deleteChild = function(childIndex = 0) {
  if(this.body.children[childIndex] && this.body.children[childIndex].remove)
  this.body.children[childIndex].remove()
};

DOMmods.prototype.getChild = function(childIndex = 0) {
  return this.body.children[childIndex];
};

let myDOMmods = new DOMmods();

myDOMmods.deleteChild(4);
```

[<--](../../web-broswer-js-basico.md)
