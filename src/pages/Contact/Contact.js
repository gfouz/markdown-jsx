import React from "react";
import StyledContact from "./ContactCss";
import { theme } from "../../theme";
import { ThemeProvider } from "styled-components";
import Matrix from "../../components/flexbox/Matrix";
import Header from "../../components/header/Header";
import FormCard from "../../components/formik/FormCard";
import { FaGithub, FaGitAlt } from "react-icons/fa";
import Icons from "../../components/icons/Icons.js";
import Logos from "../../components/icons/Logos";

const Contact = () => {
  return (
    <ThemeProvider theme={theme}>
      <StyledContact>
        <Header bg="#405c4c" color="white" />

        <section className="contact--main">
          <Matrix>
            <div className="contact__image--container">
              <div className="contact__elements--container">
                <img
                  alt="giovani"
                  src="/images/giov.jpg"
                  className="contact__image--personal"
                />
                <div className = "contact__personal--links">
                  <h2>hi, giovani is my name!</h2>
                  <Icons width="200px" color="black" size="20px" />
                </div>
              </div>
            </div>
            <div className="contact__image--container">
              <div className="contact__image--cartoon">
                <img alt="monsters" src="/images/monsters.png" />
              </div>

              <div className="contact__projects--links">
                <a href="http://github.com/gfouz">
                  <h2>see my work here!</h2>
                  <p>Portfolio 2021 Nuxt</p>
                  <p>Markdown to JSX</p>
                  <p>Nuxt 3 CMS</p>
                </a>
                <a href="http://github.com/gfouz">
                  {" "}
                  <FaGithub
                    style={{ fontSize: "20px", color: "#000000" }}
                  />{" "}
                </a>
              </div>
            </div>
          </Matrix>
        </section>

        <section className="form--card">
          <div className="form__card--logo">
            <FaGitAlt style={{ fontSize: "80px", color: "d5d5d5" }} />
            <h3>VISIT GITHUB</h3>
          </div>
          <div className="form-card__container">
            <h3>Write to me!</h3>
            <FormCard />
          </div>
          <div className="form__card--logo">
            <FaGitAlt style={{ fontSize: "80px", color: "d5d5d5" }} />
            <h3>VISIT GITHUB</h3>
          </div>
        </section>

        <article className="other--links">
          <div className="logos">
            <Logos color="#9e9e9e" size="40px" width="100%" justify="center" />
          </div>
          <h3>React and Vue technologies.</h3>
        </article>

        <footer>
          <h4>GFOUZ &copy; {new Date().getFullYear()}</h4>
          <p>Technologies: Html, css, scss, Javascript, styled-components, React.</p>
        </footer>
      </StyledContact>
    </ThemeProvider>
  );
};

export default Contact;
