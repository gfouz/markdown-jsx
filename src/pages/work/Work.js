import React from "react";
import {} from "react-icons/fa";
import { theme } from "../../theme";
import styled, { ThemeProvider } from "styled-components";
import Logo from "../../components/logo/Logo";
import Project from "../../components/github/Projects";

const Work = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <StyledWork>
          <div className="l-grid">
            <Logo />
            <Project />
          </div>
        </StyledWork>
      </ThemeProvider>
    </>
  );
};

export default Work;

const StyledWork = styled.div`
  .l-grid {
    min-height: 100vh;
    display: grid;
    grid-template-column: 1fr;
    grid-template-rows: 300px auto;
    background-image: linear-gradient(#071919, #173535);
  }
`;
