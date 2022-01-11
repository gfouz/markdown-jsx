import React from 'react';
import { FaGitAlt, FaReact, FaVuejs} from "react-icons/fa";
import { theme } from "../../theme";
import { ThemeProvider } from 'styled-components';
import StyledWork from './StyledWork';
import Header from "../../components/header/Header";

const Work = () => {

   return (
      <ThemeProvider theme={theme}>
         <StyledWork>
            <Header bg="#263238" color="#ffffff" />

            <section className="first--stage">
               <div className="first__stage--icon-container">
                  <FaGitAlt style={{ fontSize: "80px", color: "red", marginTop: "0.5em" }} />
                  <h3>TAKE A LOOK AT MY WORK!</h3>
                  <div className="first__stage--links-container">
                     <a href="http://github.com/gfouz">-- CMS with Next JS</a>
                     <a href="http://github.com/gfouz">-- Portfolio 2021 Nuxt JS</a>
                     <a href="http://github.com/gfouz">-- Markdown to JSX React JS</a>
                  </div>
               </div>
            </section>

            <article className="second--stage">
               <div className="second__stage--image-container">
                  <div className="second__stage--image1"></div>
                  <h4>Awesome Universe!</h4>
                  <p>
                     DigitalOcean is a cloud services platform delivering the simplicity
                     developers love and businesses trust to run production applications at scale.
                     It provides highly available, secure and scalable compute, storage and
                     networking solutions that help developers build great software faster.

                      </p>
               </div>
               <div className="second__stage--image-container">
                         <div className="second__stage--image2"></div>
                  <h4>Science Ficcion imagination has no limits!</h4>
                  <p>
                     DigitalOcean is a cloud services platform delivering the simplicity
                     developers love and businesses trust to run production applications at scale.
                     It provides highly available, secure and scalable compute, storage and
                     networking solutions that help developers build great software faster.

                      </p>
               </div>
               <div className="second__stage--image-container">
                           <div className="second__stage--image3"></div>
                  <h4>Creation or evolution!</h4>
                  <p>
                     DigitalOcean is a cloud services platform delivering the simplicity
                     developers love and businesses trust to run production applications at scale.
                     It provides highly available, secure and scalable compute, storage and
                     networking solutions that help developers build great software faster.

                      </p>
               </div>
            </article>
            <article className="technologies--description"> 
                  <FaReact style={{ fontSize: "40px", color: "lightblue", marginTop: "0.5em" }} />
                  <h5>Made with React!</h5>
                  <FaVuejs style={{ fontSize: "40px", color: "lightblue", marginTop: "0.5em" }} />
            </article>
            <footer>
               <h4>gfouz &copy; {new Date().getFullYear()}</h4>
               <h6>Technologies: html css scss javascript react styled-components .</h6>
            </footer>
         </StyledWork>
      </ThemeProvider>
   );
}

export default Work;