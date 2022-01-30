import StyledHeader from "./StyledHeader";
import { useLocation } from "react-router-dom";

export default function Header(props) {
  const links = ["/about", "/work", "/blog","/contact", "/"];
  const router = useLocation();
  const { pathname } = router;
  const currentlinks = links.filter((link) => link !== pathname);

  return (
    <>
      <StyledHeader
        color={props.color}
        bg={props.bg}
        fontFamily={props.font}
        position={props.position}
        height={props.height}
        logo={props.logo}
      >
        <div className="links">
        <div className="logo">{props.children}</div>
          {currentlinks.map((link, index) => (
            <div key={link + index}>
              <a className="links__item" href={`${link}`}>
                {link === "/" ? "home" : link.slice(1)}
              </a>
            </div>
          ))}
        </div>
      </StyledHeader>
    </>
  );
}
