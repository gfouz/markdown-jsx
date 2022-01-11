import { useState, useRef } from "react";
import StyledNavbar from "./Navbar.styled";
import { FaSortDown } from "react-icons/fa";
import { iconcss } from "./constants";
import Links from "../../components/links/Links";

const Navbar = (props) => {
  const arrow = <FaSortDown style={iconcss} />;
  const [open, setOpen] = useState(false);

  function toggleMenu() {
    setOpen((prev) => !prev);
  }
  return (
    <>
      <StyledNavbar margin={props.margin}>
        <div className="container">
          <button onClick={() => toggleMenu()}>
            <div className="button-content">
              <strong>GITHUB´S PROJECTS</strong>
              <div className={open ? "upwards" : "downwards"}>{arrow}</div>
            </div>
          </button>
          <Links open={open} />
        </div>
      </StyledNavbar>
    </>
  );
};

export default Navbar;
