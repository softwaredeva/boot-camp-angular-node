# 3 JAX & Clases

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
    <title>3 js advanced</title>

    <script src="./app.js" charset="utf-8" async></script>
    <link rel="stylesheet" type="text/css" href="style.css" />
  </head>
  <body>
    <h2>Llamada HTTP - Clases</h2>
    <button onclick="asyncLoadData()">Cargar información</button>


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
class UserModel{
  constructor(name, lastname, age) {
    this.name = name;
    this.lastname = lastname;
    this.age = age;
    this.updateDOM();
  }

  updateDOM() {
    document.getElementById('name').innerHTML = this.name;
    document.getElementById('lastname').innerHTML = this.lastname;
    document.getElementById('age').innerHTML = this.age;
  }
}

function httpRequest(url, method = "GET"){
  method = method.toUpperCase();
  return new Promise((resolve,reject)=>{
    if(!url)
    reject(new Error('Falta el url'));

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
      if (this.readyState == 4 && this.status == 200){
        var jsonObj;
        try {
          jsonObj = JSON.parse(this.responseText);
        } catch (error) {
          reject(new Error(error));
        }
        resolve(jsonObj);
      }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
  });
}

async function asyncLoadData(url = 'data.json') {
  let jsonResponse = await httpRequest(url);
  let user = new UserModel(jsonResponse.name,jsonResponse.lastname,jsonResponse.age);
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
