# 3 Correr js al cargar una página

## Pasos

* Crear un index.html con un tag de "script"
* Abrir en el browser

```html
<!-- ./index.html -->

<!DOCTYPE html>
<html lang="es" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>3 js basic</title>
  </head>
  <body>
    <p id="content">El contenido de la página va aquí.</p>
    <script type="text/javascript">
      let pContent = document.getElementById('content');
      setTimeout(()=>{
        pContent.innerHTML = (document.body.clientWidth>600)?'Contenido web':'Contenido móvil';
      },2000);
    </script>
  </body>
</html>
```

[<--](../../../web-broswer-js-basico.md)
