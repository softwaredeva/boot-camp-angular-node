# NodeJS history & V8

NodeJS nació para resolver un problema en específico, manejar múltiples llamadas http de usuarios de forma asíncrona, sin bloquear el sistema en un solo hilo, a diferencia de los modelos más comunes usados que están basado en el uso de muchos hilos, donde cada hilo maneja una llamada y estos hilos son conocidos por la saturación de la memoria al tener que hacer una copia del proceso original en el nuevo hilo para poder ejecutarlo.

NodeJS está enfocado en el desarrollo de aplicaciones web que sean escalables y busquen una arquitectura con poco procesamiento ligero. Este está basado en el motor de javascript "V8" el cuál está escrito en C++ y es el motor de Chromium, Google Chrome y en Microsoft Edge a partir del 2019, y es corre en la mayoría de las plataformas de escritorio.

Su funcionamiento se basa en algo llamado el "event loop" el cuál se ejecuta de una forma que no bloquea el sistema, parecido al funcionamiento de javascript en el browser

[Referencia](https://nodejs.org/en/about/)  
[API DOCS](https://nodejs.org/api/)

[<--](./README.md)
