## ExpressJS

Express es un framework de desarrollo para NodeJS minimalístico y rápido.

Implementan el concepto de middleware para la facilidad de cración de APIs (Endpoints)

Otros frameworks de desarrollo utilizan como base Express


### Actividades

1.- Escribir un código "hola mundo" con express para que responda a la ruta '/'.

```
const express = require('express');
const app = express();
const port = process.argv[2] || 3000;

app.get('/', funcionCallback);

app.listen(port, funcionCallback);
```

2.- Utilizar la siguiente estructura para declarar 4 rutas con diferentes métodos que solo respondan que método se está utilizando.

```
app.METHOD(PATH, CALLBACK)
```

3.- Servir una carpeta con archivos estáticos

```
express.static(root, [options])
```
