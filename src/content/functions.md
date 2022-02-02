---
title: Concepto de inmutabilidad
author: Giovani Fouz Jiménez
description: Que significa inmutabilidad y porque es tan importante...
date: febraury 3, 2022
---

  ## Mutable or Inmutable
  'const' nos va ayudar a declarar variables inmutables, 
  esto es, a declarar variables cuyo valor no pueda ser 
  cambiado a lo largo del ciclo de vida de una variable.
  si intentamos asignar un nuevo valor a la constante, 
  se nos lanzará una excepción con el error provocado.
  Tenemos que tener cuidado cuando deseemos almacenar 
  un objeto JSON en una constante de JavaScript.
  cuando asignamos un objeto a una variable, no estamos 
  almacenando el objeto en si en esa variable, si no que
  se está almacenando una referencia al objeto. Se almacena 
  el puntero con la posición donde se encuentra el objeto real.
  Por tanto, si seguimos esta lógica, lo que ‘const’ está convirtiendo 
  en inmutable no es el objeto en si, si no la referencia a ese objeto. 