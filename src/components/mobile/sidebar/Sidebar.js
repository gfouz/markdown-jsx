import React from "react";
import {FaEnvelope, FaHome } from "react-icons/fa";
//import { bool } from "prop-types";
import StyledSidebar from "../sidebar/StyledSidebar";


const Sidebar = ({ open }) => {
  //const { path } = useRouteMatch();
  return (

    <StyledSidebar open={open} >
       <a href="/">
        <FaHome style={{ color: '#000000'}} />
        
      </a>
      <a href="/blog">
        <img src="/icons/blog.svg" width={30}  alt="blog"/>
        
      </a>
      <a href="/about">
        <img src="/icons/about.svg" width={30} alt="about"/>
        
      </a>
      
      <a href="/contact">
        <FaEnvelope style={{ color: '#000000' }} />
       
      </a>
    </StyledSidebar>
  );
};

export default Sidebar;

/*Sidebar.proTypes = {
  open: bool,
};

export default Sidebar;*/
