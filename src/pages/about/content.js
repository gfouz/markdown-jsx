const aboutconstants = `
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
`;
const aboutFunctions = `
  La composición es la piedra angular que nos permitirá a partir de 
  funciones puras genéricas crear funciones más específicas para al 
  final construir nuestros programas.Similar a como en la música las notas 
  (funciones puras) conforman acordes (funciones de dominio compuestas)
   y los acordes conforman obras (pieza de software), la composición será 
   el pegamento que nos permitirá desarrollar nuestros programas.
`;
const introduction = `
  I use modern JavaScript frameworks such as React and Vue to create
  single page application or full static sites so that among my
  skills are HTML, CSS, SCSS and JAVASCRIPT. And i am not afraid of
  getting out of the comfort zone and trying out new things. I began
  learning C plus plus in 2017 in order to write firmwares for
  micro-controllers. I was studying this language for more than a
  year but eventually i realized that i needed to learn technologies
  that afford a job, so that i have been wagering on ReactJs as my
  favourite choosing.
`;

export const content = [
  {
    title: "Constantes de JavaScript",
    paragraph: aboutconstants,
  },
  {
    title: "Composición funcional",
    paragraph: aboutFunctions,
  },
  {
    title: "introduction",
    paragraph: introduction,
  },
];
