import React from "react";
import StyledIcons from "./StyledIcons";
import { icon } from "./iconsList";

const Icons = (props) => {
  return (
    <StyledIcons width={props.width} color={props.color} size={props.size}>
      {icon.map((item, index) => (
        <div key={index} className="react--icons">
          <a href={item.link}>{item.icon}</a>
        </div>
      ))}
    </StyledIcons>
  );
};

export default Icons;
