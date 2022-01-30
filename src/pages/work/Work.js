import React from "react";
import {} from "react-icons/fa";
import { theme } from "../../theme";
import styled, { ThemeProvider } from "styled-components";
import Logo from "../../components/logo/Logo";
import Project from "../../components/github/Projects";
import Profile from '../../components/github/Profile'
import Header from '../../components/header/Header'
import Form from '../../components/useform/Form'

const Work = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <StyledWork>
          <div className="l-grid">
            <Logo />
            <Project />
            <Profile />
            <Form />
            <Header bg="#071919"/>
            <footer className="l-grid__footer">
                 <h4 className="l-grid__title">
                   Gfouz &copy; {new Date().getFullYear()} Made with ReactJs
                 </h4>
            </footer>
          </div>
        </StyledWork>
      </ThemeProvider>
    </>
  );
};

export default Work;

const StyledWork = styled.div`
  .l-grid {
    min-height: 100vh;
    display: grid;
    grid-template-column: 1fr;
    grid-template-rows: 300px auto auto 400px 60px 70px;
    background-image: linear-gradient(#071919, #173535);
    &__footer {
       height: 70px;
       display: grid;
       place-items: center;
       color: #ffffff;
       background-color: #071919;
       font-family: literata;
    }
    &__title {
       margin: 1em;
       font-size: 0.7em;
    }
  }
`;
