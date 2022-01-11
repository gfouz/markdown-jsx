import styled from "styled-components";
import { useRef, useEffect, useState } from "react";
import { links } from "../../constants/links/index";

const Links = (props) => {
  useEffect(() => {
    navRef.current.style.display = props.open ? "none" : "block";
  }, [props.open]);

  const navRef = useRef();

  return (
    <>
      <StyledLink>
        <section className="nav" ref={navRef}>
          <ul className="nav__list">
            {links.map((item) => (
              <li className="nav__item">
                <a href={item.url} className="nav__link">
                  {item.project}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </StyledLink>
    </>
  );
};

const StyledLink = styled.div`
  .nav {
    background-color: #ffffff;
  }
  .nav__list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 248px;
    height: 130px;
    margin: 0;
    padding: 0;
  }
  .nav__item {
    list-style-type: none;
    margin: 0.2em 1em;
  }
  .nav__link {
    text-decoration: none;
    color: #404040;
  }
`;

export default Links;
