import StyledAbout from "./about.styled";
import { useRef, useEffect } from "react";
import { content } from "./content";
import Header from "../../components/header/Header";
import Contact from "../../components/contactme/Contact";

const About = () => {
  const titleRef = useRef(null);
  const handleDOM = () => {
    const textarray = titleRef.current.textContent.split("");
    titleRef.current.textContent = "";
    textarray.forEach((item, index) => {
      titleRef.current.innerHTML +=
        '<span style="transform:rotate(' +
        (index + 1) * 20 +
        'deg)">' +
        item +
        "</span>";
    });
  };
  useEffect(() => {
    handleDOM();
  }, []);

  return (
    <>
      <StyledAbout>
        <figure className="upperbar">
          <div className="upperbar__title-container">
            <h1 ref={titleRef} className="upperbar__title">
              {" "}
              GFOUZ{" "}
            </h1>
          </div>
          <img
            src="/images/handshake.svg"
            alt="gfouz-logo"
            className="upperbar__image"
          />
        </figure>
        <Header height="100px" bg="#ffffff" color="#ff0000" />
        <section className="outstanding">
          <article className="outstanding__item">
            <div className="outstanding__avatar-container">
              <img
                src="/images/giov.svg"
                alt="giovani"
                className="outstanding__avatar"
              />
            </div>
            <h3 className="outstanding__title">
              A brief introduction about me
            </h3>
            <p className="outstanding__paragraph">{content[2].paragraph}</p>
          </article>
          <article className="outstanding__item">
            <img
              src="/images/laptop.jpg"
              className="outstanding__laptop-image"
              alt="laptop"
            />
            <h4 className="outstanding__image-title">ReactJs developer</h4>
          </article>
        </section>
        <article className="technologies">
          <img src="/images/react.svg" alt="react" />
          <div className="column">
            <img src="/images/next.svg" alt="next" />
            <h3>THIS IS MY STACK</h3>
            <img src="/images/graphql.svg" alt="graphql" />
          </div>
          <img src="/images/redux.svg" alt="redux" />
        </article>
        <section className="outstanding">
          <article className="outstanding__item">
            <div className="outstanding__icon">
             <img src="/images/lamp.svg" alt="developer" />
            </div>
            <h3 className="outstanding__title">Conceptos importantes</h3>
            <p className="outstanding__paragraph">{content[0].paragraph}</p>
          </article>
          <article className="outstanding__item">
            <h3 className="outstanding__title">Tambien importante</h3>
            <p className="outstanding__paragraph">{content[1].paragraph}</p>
            <h5 className="outstanding__title">STACK QUE UTILIZO:</h5>
            <div className="list-group">
              <ul className="list">
                <li>html</li>
                <li>css</li>
                <li>javascript</li>
              </ul>
              <ul className="list">
                <li>ReactJs</li>
                <li>NextJs</li>
                <li>scss</li>
              </ul>
              <ul className="list">
                <li>Redux</li>
                <li>Graphql</li>
                <li>Express</li>
              </ul>
            </div>
          </article>
        </section>
        <Contact height="250px" />
        <footer className="bottom-bar">
          {" "}
          Gfouz &copy; {new Date().getFullYear()}{" "}
        </footer>
      </StyledAbout>
    </>
  );
};

export default About;
