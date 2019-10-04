# 4 Correr js al interactuar con una página

## Pasos

* Crear un index.html con un tag de "script"
* Abrir en el browser

```html
<!-- ./index.html -->

<!DOCTYPE html>
<html lang="es" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>4 js basic</title>
  </head>
  <body>
    <button type="button" name="button" onclick="mostrarMensaje()">Mostrar mensaje</button>
    <div id="mensaje" style="display:none;">
      <p>SoftwareDEVA desarrollo integral</p>
      <button type="button" name="button" onclick="descenderCuenta()">Descender!</button>
      <p id="count">10</p>
    </div>
    <div class="info">
      <p>Coordenada x: <span id="xCoord"></span> </p>
      <p>Coordenada y: <span id="yCoord"></span> </p>
    </div>


    <script type="text/javascript">
      function mostrarMensaje(){
        document.getElementById("mensaje").style.display = 'block';
      }
      function descenderCuenta(){
        var currentVal = document.getElementById('count').innerHTML;
        var newVal = (currentVal>0)?currentVal-1:0;
        document.getElementById('count').innerHTML = newVal;
      }


      let xCoordDisp = document.getElementById('xCoord');
      let yCoordDisp = document.getElementById('yCoord');
      window.addEventListener('mousemove',(event)=>{
        xCoordDisp.innerHTML = event.x;
        yCoordDisp.innerHTML = event.y;
      });
    </script>
  </body>
</html>

```

[<--](../../../web-broswer-js-basico.md)
