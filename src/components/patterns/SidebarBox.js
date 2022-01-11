import React, { useState } from "react";

const SidebarBox = ({ children }) => {
  const [open, setOpen] = useState(false);

  const childrenList = React.Children.map(children, (child) => {
    const clone = React.cloneElement(child, { open, setOpen });
    return clone;
  });
  return childrenList;
};

export default SidebarBox;
