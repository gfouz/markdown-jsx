---
title: Inmutabilidad
author: Giovani Fouz Jiménez
description: Que significa inmutabilidad y porque es tan importante
img: react.png
date: febraury 21, 2022
---
![react wallpaper](/images/react.png)
## Mutable o Inmutable.

El desarrollo con datos inmutables es un principio fundamental de la
programación funcional que se está extendiendo también en la
programación orientada a objeto. Su planteamiento básico es muy
sencillo: un dato u objeto, una vez creado, no puede ser cambiado,
manteniendo su estado original en todo momento. Si por algún motivo se
tuviera que cambiar el dato, entonces se obtendría una copia con los
datos modificados, pero nunca se cambian los valores originales. Lo
contrario a la inmutabilidad es la mutabilidad, es decir, la capacidad
para cambiar el valor o el estado de los elementos de un lenguaje de
programación. Cuando cambiamos el valor de una propiedad, o la
referencia de una variable, estamos haciendo uso de mutabilidad, es
decir, de la capacidad de cambiar.

## Utilidad de 'const' en JavaScript.

'const' nos va ayudar a declarar variables inmutables, esto es, a
declarar variables cuyo valor no pueda ser cambiado a lo largo del
ciclo de vida de una variable. si intentamos asignar un nuevo valor a
la constante, se nos lanzará una excepción con el error provocado.
Tenemos que tener cuidado cuando deseemos almacenar un objeto JSON en
una constante de JavaScript. cuando asignamos un objeto a una
variable, no estamos almacenando el objeto en si en esa variable, si
no que se está almacenando una referencia al objeto. Se almacena el
puntero con la posición donde se encuentra el objeto real. Por tanto,
si seguimos esta lógica, lo que ‘const’ está convirtiendo en inmutable
no es el objeto en si, si no la referencia a ese objeto.

```js
(() => {
  const url = "https://gist.github.com/";
  url = "http://www.as.com"; // Lanza un error!
})();
```

#### Sin embargo, no se produce error al asignar nuevos valores a la propiedades de un objeto:

```js
(() => {
  const objeto = {
    nombre: "Giovani",
  };
  objeto.apellidos = "creo nueva propiedad, cuyo valor es mutable";
  objeto.nombre = "cambio el valor, no se lanza ninguna excepción";

  console.log(any);
})();
```

Reitero lo anterior respecto a JavaScript, cuando asignamos un objeto a una variable, no estamos almacenando el objeto en si en esa variable, si no que se está almacenando una referencia del objeto. Se almacena el puntero con la posición en memoria donde se encuentra el objeto real.

