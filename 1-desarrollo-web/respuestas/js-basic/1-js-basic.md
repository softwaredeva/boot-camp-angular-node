# 1 Ejecutar js en consola

## Pasos

* Abrir cualquier explorador web en cualquier página
* Abrir menú de desarrollador
* Abrir inspector web
* Seleccionar "Consola"
* En la linea de entrada de comandos ">" ingresar código js

```js
// Retorna un entero aleatorio entre min (incluido) y max (excluido)
// ¡Usando Math.round() te dará una distribución no-uniforme!
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

let str = "Una frase";
let count = 0;
let arr = [];

while(count <= str.length){
  arr.push(getRandomInt(0,10));
  count++;
}

console.log("arr",arr);

let arr2 = [];
for(let i in arr){
  if(i<=5)
  arr2.push(arr[i]);
}

console.log("arr2",arr2);

let arr3 = arr2.filter((i)=>{
  return ( (arr2[i]%2) == 0 );
});

console.log("arr3",arr3);

// https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Math/randoms
```

[<--](../../web-broswer-js-basico.md)
