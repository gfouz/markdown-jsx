import styled from "styled-components";
//import { FaWhatsapp, FaGithub} from "react-icons/fa"
import Slider from "../../components/slider/Slider";
import Card from "../../components/card/index";
import Header from "../../components/header/Header";
import Box from "../../components/container/Box";
import { content } from "./content";

const About = () => {
  return (
    <>
      <StyledAbout>
        <div className="about-container">
          <Header bg="#333333" color="#999999" height="70px"/>
          <article className="main-logo"></article>
          <div>
            <section className="technical">
              <Slider margin="0.5em"/>
              <Box font="0.6em" padding="1em" float="left" margin="0.5em">
                <h4 className="technical__headlines">INMUTABLE O MUTABLE?</h4>
                <p>{content[0].paragraph}</p>
              </Box>
            </section>
            <section className="technical">
              <Box font="0.6em" padding="1em" margin="0.5em" float="left">
                <h4 className="technical__headlines">COMPOSICIÓN FUNCIONAL</h4>
                <p>{content[1].paragraph}</p>
              </Box>
              <Box
                width="320px"
                height="350px"
                display="flex"
              >
                <img src="/images/responsive.jpg" alt="resposive" />
                <h4 className="technical__card-title">RESPONSIVE DESIGN</h4>
              </Box>
            </section>
          </div>
          <div className="technical"> 
              <Card margin="0 1em"/>
              <Box font="0.6em" padding="1em" margin="0.5em" float="left">
                <h4 className="technical__headlines">CONCEPTOS SOBRESALIENTES</h4>
                <p>{content[1].paragraph}</p>
              </Box>
          </div>
          <footer className="bottom-bar">
            {" "}
            Gfouz &copy; {new Date().getFullYear()}{" "}
          </footer>
        </div>
      </StyledAbout>
    </>
  );
};

export default About;

const StyledAbout = styled.div`
  .about-container {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 70px 360px auto auto 70px;
  }
  .main-logo {
    height: 360px;
    background: url("/logo/gfouz-dev.png") no-repeat center;
    background-size: 300px;
  }

  .technical {
    margin: 0.5em 0;
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
    color:var(--grey);
    @media (max-width: 700px) {
      flex-direction: column;
      align-items: center;
    }
  }
  .technical__headlines {
    position: relative;
    top: 10px;
    color: #00b0ff;
  }
  .technical__card {
    margin: 2em 1em;
    width: 320px;
  }
  .technical__card-title {
    margin: 2em 0 0 0;
    color: #4b7d74;
  }
  .technical__image {
    width: 300px;
    height: auto;
  }
  

  
  footer {
    height: 70px;
    background-color: #222222;
    color: #999999;
    text-align: center;
    line-height: 60px;
    font-family: literata;
  }
`;
