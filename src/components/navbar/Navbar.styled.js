import styled from "styled-components";

const StyledNavbar = styled.div`
   
  .container {
    margin:${(props)=> props.margin};

    width: 248px;
    box-shadow: 1px 1px 9px #000000;
    z-index: 10;
  }
  .navbar {
    display: none;
    width: 180px;
    height: 130px;
  }
  button {
    width: 248px;
    height: 40px;
    color: #444444;
    background-color: #ffffff;
    border: none;
    outline: none;
  }
  .button-content {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .upwards {
    position: relative;
    left: 20px;
    width: 25px;
    height: 25px;
    transform: rotate(180deg);
  }
  .downwards {
    position: relative;
    left: 20px;
    width: 25px;
    height: 25px;
    transform: rotate(0deg);
  }
  .github-links {
    display: flex;
    flex-direction: column;
    text-align: left;
    width: 180px;
  }
  .github-links__item {
    text-decoration: none;
    margin: 0.2em 0 0.2em 2.5em;
    color: #616161;
  }
`;

export default StyledNavbar;
