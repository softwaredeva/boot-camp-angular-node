# 1 AJAX & json

## Pasos

* Crear los archivos index.html, style.css, app.js & data.json
* Correr desde un servidor http (ej. > sudo npm i -g http-server && http-server)
* Abrir en el browser

```html
<!-- ./index.html -->

<!DOCTYPE html>
<html lang="es" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>1 js advanced</title>

    <script src="./app.js" charset="utf-8" async></script>
    <link rel="stylesheet" type="text/css" href="style.css" />
  </head>
  <body>
    <h2>Llamada HTTP - JSON</h2>
    <button onclick="loadData()">Cargar información</button>


    <p><b>Nombre:</b> <span id="name"></span></p>
    <p><b>Apellido:</b> <span id="lastname"></span></p>
    <p><b>Edad:</b> <span id="age"></span></p>
  </body>
</html>
```

```css
/* ./style.css */

html, body{
  height: 100%;
}
```

```js
// app.js

function loadData(url = 'data.json') {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var jsonObj;
      try {
        jsonObj = JSON.parse(this.responseText);
      } catch (error) {
        console.error("Error parsing JSON",error);
        return;
      }
      document.getElementById('name').innerHTML = jsonObj.name;
      document.getElementById('lastname').innerHTML = jsonObj.lastname;
      document.getElementById('age').innerHTML = jsonObj.age;
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}
```

> ./data.json

```json
{
  "name": "Pedro",
  "lastname": "Juarez",
  "age": 25
}
```

[<--](../../../js-avanzado.md)
