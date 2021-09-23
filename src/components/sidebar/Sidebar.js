import React, { Fragment } from "react";
import {useRouteMatch } from "react-router-dom";
import { bool } from "prop-types";
import StyledSidebar from "../sidebar/StyledSidebar";
import About from '../../components/about/about';
import Blog from '../../components/blog/blog';
import Contact from '../../components/contact/contact';

const Sidebar = ({ open }) => {
  const { path } = useRouteMatch();
  return (
    <StyledSidebar open={open}>
      <Switch>
        <Route path={`${path}/about`}>
          <a href="http://jw.org">
            <span role="img" aria-label="about us">
              &#x1f481;&#x1f3fb;&#x200d;&#x2642;&#xfe0f;
            </span>
            <About/>
          </a>
        </Route>
        <Route path={`${path}/blog`}>
          <a href="http://jw.org">
            <span role="img" aria-label="price">
              &#x1f4b8;
            </span>
            <Blog/>
          </a>
        </Route>
        <Route path={`${path}/contact`}>
          <a href="http://jw.org">
            <span role="img" aria-label="contact">
              &#x1f4e9;
            </span>
            <Contact/>
          </a>
        </Route>
      </Switch>
    </StyledSidebar>
  );
};

Sidebar.proTypes = {
  open: bool.isRequired,
};

export default Sidebar;
