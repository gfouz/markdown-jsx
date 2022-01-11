import React, { useState } from "react";

const SidebarAncestor = ({ children }) => {
  const [open, setOpen] = useState(false);

  const childrenList = React.Children.map(children, (child) => {
    const clone = React.cloneElement(child, { open, setOpen });
    return clone;
  });
  return childrenList;
};

export default SidebarAncestor;



/*Top level API nos brinda la posibilidad de escribir 
mas legible y ayuda a la rutilización de nuestra lógica 
pues podemos recorrer todos los hijos, clonarlos y tambien
pasarles props a todos de manera simultanea e implicita.

Podemos crear un wrapper con props que puedan ser accesibles
a todos los hijos dentro de dicho wrapper.
 */

