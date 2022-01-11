import styled from "styled-components";

const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #242526;
  /* background-image: url('/images/purple.jpg'); */
  h1 {
    color: ${({theme})=> theme.primary};
    font-size: 3em;
    font-family:  literata;
    padding: 0 0.5em;
    @media (max-width: 580px) {
      font-size: 1.5em;
    }
  }
  h3 {
    font-family: gabriola;
    color: #ffffff;
    border-radius: 20px;
    padding: 0 1em;
    @media (max-width: 580px) {
      font-size: 1em;
    }
  }
  .main__github-link {
    a {
      text-decoration: none;
    }
  }
`;

export default StyledHome;
