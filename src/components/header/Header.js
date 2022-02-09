import StyledHeader from "./StyledHeader";
import { useLocation, Link } from "react-router-dom";

export default function Header(props) {
  const properties = {
    bg: props.bg,
    logo: props.logo,
    color: props.color,
    height: props.height,
    fontFamily: props.font,
    position: props.position,
  }
  const paths = ["/about", "/work", "/blog", "/"];
  const params = useLocation();
  const { pathname } = params;
  const currentlinks = paths.filter((path) => path !== pathname);

  return (
    <>
      <StyledHeader {...properties}>
        <div className="links">
          <div className="logo">{props.children}</div>
          {currentlinks.map((link, index) => (
            <div key={link + index}>
              <Link className="links__item" to={`${link}`} >
                {link === "/" ? "home" : link.slice(1)}
              </Link>
            </div>
          ))}
        </div>
      </StyledHeader>
    </>
  );
}
