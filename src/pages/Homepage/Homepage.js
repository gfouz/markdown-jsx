import React, { Fragment } from "react";
//import { FaGithub } from "react-icons/fa";
import { bool, func } from "prop-types";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "../../theme";
import { GlobalStyles } from "../../global";

/*Para centrar una lista desordenada dentro de un contenedor flexbox
  basta con resetear a cero la propiedad (padding) del elemento "ul" 
  de una lista desordenada, para reescibir los valores por defecto */

const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <GlobalStyles />
        <StyledHome>
          <div className="l-grid">
            <section className="l-grid__item">
              <h1 className="l-grid__title">portfolio</h1>
              <div className="l-grid__line"></div>
            </section>
            <nav className="navbar">
              <ul className="navbar__list">
                <li className="navbar__item">
                  <a href="/about" className="navbar__link">
                    ABOUT
                  </a>
                </li>
                <li className="navbar__item">
                  <a href="/work" className="navbar__link">
                    WORK
                  </a>
                </li>
                <li className="navbar__item">
                  <a href="/blog" className="navbar__link">
                    BLOG
                  </a>
                </li>
              </ul>
            </nav>
            <section className="logo">
              <div className="logo__image-container">
                <img src="/images/handshake.svg" alt="gfouz-logo" />
              </div>
              <h6 className="">WEB DEVELOPER</h6>
              <h1>GFOUZ &copy; {new Date().getFullYear()}</h1>
            </section>
          </div>
        </StyledHome>
      </Fragment>
    </ThemeProvider>
  );
};
Home.propTypes = {
  open: bool,
  setOpen: func,
};
export default Home;

const StyledHome = styled.div`
  .l-grid {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 100vh;
    background-color: #222222;
    color: #888888;

    &__item {
      width: 100%;
    }

    &__title {
      margin: 3em 0 0.5em 0;
      text-transform: uppercase;
      font-family: literata;
      font-size: 3em;
      animation: title 1s;
      animation-fill-mode: forwards;
    }
    &__line {
      height: 2px;
      margin: 0 auto;
      animation: line 3s;
      animation-fill-mode: forwards;
    }
  }
  .navbar {
    &__list {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 30px;
      width: 300px;
      padding: 0 !important;
      animation: navbar 1s;
      animation-fill-mode: forwards;
    }
    &__item {
      list-style-type: none;
    }
    &__link {
      margin: 0 1em;
      text-decoration: none;
      color: #fff000;
    }
  }
  .logo__image-container {
    width: 10em;
    height: auto;
  }
  .logo__image {
    max-width: 100%;
    height: auto;
  }

  @keyframes line {
    0% {
      width: 0;
    }

    100% {
      width: 80%;
      background-color: #fff000;
    }
  }
  @keyframes navbar {
    0% {
      transform: translateY(-50px);
      opacity: 0;
    }
    50% {
      transform: translateY(0);
      opacity: 0.1;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
  @keyframes title {
    0% {
      transform: translateY(50px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;
