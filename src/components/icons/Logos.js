import React from "react";
import StyledIcons from "./StyledIcons";
import { icon } from "./LogosList";

const Logos = (props) => {
  return (
    <StyledIcons width={props.width} color={props.color} size={props.size} justify = {props.justify}>
      {icon.map((item, index) => (
        <div key={index} className="react--icons">
          <a href={item.link}>{item.icon}</a>
        </div>
      ))}
    </StyledIcons>
  );
};

export default Logos;
