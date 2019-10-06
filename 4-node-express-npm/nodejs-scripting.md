# NodeJS scripting

## Actividades

1.- Primer código de javascript - Crear un código que tome n y m como argumentos y haga una suma de todos los argumentos que se ingresen en el proceso.

2.- File system sync - Obtener el número de lineas que contiene un archivo que se defina como argumento del proceso síncronamente.

3.-  File system - Obtener el número de lineas que contiene un archivo que se defina como argumento del proceso asíncronamente.

4.- Filter files - Imprimir una lista de los archivos de una carpeta que se recibe por argumentos filtrando solo los que tengan la extensión indicada en el segundo argumento

5.- Módulos - Crear un archivo que exporte una función que haga lo mismo que el punto 4 pero ejecutando al final una función callback.

6.- HTTP - Escribe un programa que reciba como argumento una URL y realice una petición HTTP GET a la misma. Luego, deberá imprimir por consola el contenido de la petición, uno por línea.

7.- Async - Este ejercicio es similar al anterior puesto que debes usar `http.get()`. Sin embargo, esta vez tu programa recibirá tres URLs como argumentos.

Tu programa deberá imprimir el contenido de cada una de las URLs en consola en el mismo orden que fueron recibidos los argumentos. No deberás imprimir el largo, solo el contenido como String, pero debes respetar el orden de llegada de los argumentos.

8.- Servidor - crear un servidor que escuche conexiones TCP en el puerto indicado por el primer argumento del programa. Para cada conexión debes escribir la fecha actual y la hora en formato 24hs del siguiente modo:

```js
"AAAA-MM-DD hh:mm"
```

seguido por un carácter **newline**('\n'). Tanto el mes, el día como la hora y minuto deben tener un 0 para ocupar 2 espacios, por ejemplo:

```js
"2013-07-06 17:42"
```

9.- Servidor de archivos - Escribe un servidor HTTP que sirva un mismo archivo de texto para todas las peticiones que reciba.

El servidor deberá escuchar en un puerto cuyo número será el primer argumento del programa. Como segundo argumento recibirá la ruta a la ubicación del archivo. Debes usar `fs.createReadStream()` para servir como stream los contenidos del archivo en la respuesta del servicio.

10.- Escribe un servidor de HTTP que sirva datos en formato JSON cuando reciba una petición GET con la ruta (endpoint) '/api/parsetime'. Asume que la petición tiene un parámetro 'iso' cuyo valor es un fecha hora en formato ISO.

Por ejemplo:

  /api/parsetime?iso=2013-08-10T12:10:15.474Z

La respuesta JSON debe contener únicamente los propiedades 'hour', 'minute' y 'second' correspondientes a la fecha recibida. Ejemplo:

```json
{
  "hour": 14,
  "minute": 23,
  "second": 15
}
```

Luego, agrega un segundo endpoint con ruta '/api/unixtime' que reciba los mismos parámetros que la anterior pero que devuelva la fecha en formato UNIX, por ejemplo:

```json
{
  "unixtime": 1376136615474
}
```

El servidor deberá escuchar en un puerto cuyo número será el primer argumento del programa.

[<--](./README.md)
