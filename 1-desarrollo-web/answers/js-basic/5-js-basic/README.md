# 5 Correr js desde un archivo

## Pasos

* Crear un index.html con un tag de "script" y especificar el "src"
* Crear un archivo app.js
* Abrir en el browser

```html
<!-- ./index.html -->

<!DOCTYPE html>
<html lang="es" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>5 js basic</title>

    <script src="./app.js" charset="utf-8" async></script>
    <link rel="stylesheet" type="text/css" href="style.css" />
  </head>
  <body>
    <form action="#" onsubmit="updateImage(event); return false;">
      <input  type="text"   name="fileName" placeholder="Buscar imagen (prueba.png)">
      <button type="submit" name="button">BUSCAR</button>
    </form>
    <div class="imageContainer">
      <img id="testImage" alt="Aquí se cargará la imagen">
    </div>
  </body>
</html>
```

```js
// ./app.js

function updateImage(event){
  let fileName = event.srcElement.elements.fileName.value;
  if(!fileName || !(/.*\.png/).test(fileName))
  return;
  document.getElementById('testImage').src = `../../imgs/${fileName}`;
}
```

[<--](../../../web-broswer-js-basico.md)
