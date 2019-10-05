# Express Generator

```sh
$ express -h

  Usage: express [options] [dir]

  Options:

    -h, --help          output usage information
        --version       output the version number
    -e, --ejs           add ejs engine support
        --hbs           add handlebars engine support
        --pug           add pug engine support
    -H, --hogan         add hogan.js engine support
        --no-view       generate without view engine
    -v, --view <engine> add view <engine> support (ejs|hbs|hjs|jade|pug|twig|vash) (defaults to jade)
    -c, --css <engine>  add stylesheet <engine> support (less|stylus|compass|sass) (defaults to plain css)
        --git           add .gitignore
    -f, --force         force on non-empty directory
```

## Actividades

1.- Utilizar el generador para crear un proyecto nuevo

```sh
$ npm install -g express-generator

$ express --no-view --git ecommerceapi

$ cd ecommerceapi
$ npm install

$ DEBUG=ecommerceapi:* npm start
>
```

2.- Agregar nodemon

```sh
$ npm i --save-dev nodemon
>
```

> package.json

```json
...
"scripts": {
  "start": "node ./bin/www",
  "start.dev": "nodemon ./bin/www"
},
...
```

3.- Agregar cors

```js
// cors.js

// CORS
var cors = require('cors');
var whitelist = [undefined];
var corsOptions = {
  origin: function (origin, callback) {
    console.log("origin",origin);
    if (whitelist.indexOf(origin) !== -1 || isDevelopment) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}
module.exports = cors(corsOptions);
```

4.- Agregar una router con las rutas de los productos para que lea una base de datos json que tengamos almacenada.

```js
fs.readFile(filePath,callback)

JSON.parse(json);
```

5.- Agregar la imágenes que angular puede utilizar en public

6.- Agregar un router que procese el pedido y lo guarde en un json

```js
JSON.stringify(string, null, 2)

fs.writeFile(filePath,callback)
```

9.- Agregar en la ruta de get products, la validación si existe parámetros de búsqueda para filtrar los productos

8.- Agregar "handler" para 404 y errores.

[<--](./README.md)
