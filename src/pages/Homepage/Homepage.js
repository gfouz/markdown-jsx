import React,{ Fragment} from "react";
import { FaGithub } from "react-icons/fa";
import { bool, func } from "prop-types";
import Sidebar from "../../components/sidebar/Sidebar";
import Button from "../../components/button/Button";
import SidebarBox from '../../components/patterns/SidebarBox'
import { ThemeProvider } from "styled-components";
import { theme } from "../../theme";
import { GlobalStyles } from "../../global";
import StyledHome from "../../pages/Homepage/HomeStyled";

const Home = () => {
  //const [open, setOpen] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <GlobalStyles />
        <StyledHome>
          <h1>GFOUZ PORTFOLIO 2021</h1>
          <h3>I love web devlopment .</h3>
          <div className="main__github-link">
            <a href="https://github.com/gfouz">
              <h3>Follow me !</h3>
              <FaGithub
                style={{
                  fontSize: "40px",
                  color: "#1ab601",
                }}
              />
            </a>
          </div>
          <SidebarBox>
          <Sidebar/>
          <Button />
          </SidebarBox>
        </StyledHome>
      </Fragment>
    </ThemeProvider>
  );
};
Home.propTypes = {
  open: bool,
  setOpen: func,
};
export default Home;
