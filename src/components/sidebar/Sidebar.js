import React from "react";
import { FaPencilAlt, FaEnvelope, FaBookReader  } from "react-icons/fa";
import { bool } from "prop-types";
import StyledSidebar from "../sidebar/StyledSidebar";


const Sidebar = ({ open }) => {
  //const { path } = useRouteMatch();
  return (
    <StyledSidebar open={open}>
      <a href="/about">
        <FaBookReader style={{ color: '#343078'}} />
        <div>ABOUT</div>
      </a>
      <a href="/work">
        <FaPencilAlt style={{ color: '#343078' }} />
        <div>WORKS</div>
      </a>
      <a href="/contact">
        <FaEnvelope style={{ color: '#343078' }} />
        <div>CONTACT</div>
      </a>
    </StyledSidebar>
  );
};

Sidebar.proTypes = {
  open: bool.isRequired,
};

export default Sidebar;
