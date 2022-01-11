import StyledHeader from "./StyledHeader";
import { useLocation } from "react-router-dom";

export default function Header(props) {
  const routes = ["/about", "/work", "/blog", "/"];
  const router = useLocation();
  const pathname = router.pathname;
  const currentPathnames = routes.filter((routes) => routes !== pathname);

  return (
    <>
      <StyledHeader
        mixed = {props.mixed}
        dark={props.dark}
        light={props.light}
        primary={props.primary}
        color={props.color}
        bg={props.bg}
        fontFamily={props.font}
        position = {props.position}
        height= {props.height}
      >
        <div className="links">
          {currentPathnames.map((items, index) => (
             <div  key={index} >
              <a className={items === "/" ? "visible" : "hidden"} href="/">
                home
              </a>

              <a className="links__item" href={`${items}`} >
                    {items.slice(1)}
              </a>
            </div>
          ))}
        </div>
      </StyledHeader>
    </>
  );
}
