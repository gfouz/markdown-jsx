import styled from "styled-components";
import { icons } from "./icons";


const Contact = (props) => {
  return (
    <>
      <StyledContact height={props.height}>
        <nav className="navbar">
          <ul className="navbar__list">
            {icons.map((icon) => (
              <li className="navbar__item">
                <a href={icon.url} className="navbar__link">
                  {icon.icon}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </StyledContact>
    </>
  );
};

export default Contact;

const StyledContact = styled.div`
  .navbar {
    height: ${(props) => props.height || "70px"};
  }
  .navbar__list {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .navbar__item {
    list-style-type: none;
    margin: 2em;
  }
  .navbar__link {
    padding: 0;
    margin: 0;
  }
`;
