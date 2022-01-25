import styled, { css } from "styled-components";
import { space, layout, typography, color } from "styled-system";

const StyledHeader = styled.div`

  --tallness: ${(props)=>props.height || "60px"};  
  ${space}
  ${layout}
  ${typography}
  ${color}

  
  width: 100%;
  height: var(--tallness);
  top: 0;
  left: 0;
  right: 0;
  background-color: ${(props)=> props.bg || "#444444"};
  position: ${(props)=> props.position};

  .links {
    display: flex;
    justify-content: space-evenly;
    a {
      color: ${(props) => props.color || "#ffffff"};
      text-decoration: none;
      text-transform: uppercase;
      line-height: var(--tallness);
      @media (max-width: 500px){
         display: ${(props)=>props.display || ""};
      }
    }
  }
  .logo {
    width: var(--tallness);
    height: var(--tallness);
    display: ${(props)=>props.logo || "none"};
    justify-content: center;
    align-items: center;
    place-items: center;
    img {
      width: calc(var(--tallness) - 40%);
      display: block;
    }
  }
  .hidden {
    display: none;
  }
  .visible {
    font-family: inherit;
  }

  ${(props) =>
    props.dark &&
    css`
      background: ${({ theme }) => theme.grey800};
      .navbar-links {
        a {
          color: #ffffff;
        }
      }
    `}

    ${(props) =>
    props.mixed &&
    css`
      background-image: linear-gradient(#808080, #000000);
      .navbar-links {
        a {
          color: #ffffff;
        }
      }
    `}

  ${(props) =>
    props.light &&
    css`
      background: ${({ theme }) => theme.grey100};
      .navbar-links {
        a {
          color: ${({ theme }) => theme.cyan900};
        }
      }
    `}

  ${(props) =>
    props.primary &&
    css`
      background: ${({ theme }) => theme.blue500};
      .navbar-links {
        a {
          color: ${({ theme }) => theme.wt};
        }
      }
    `}
`;

export default StyledHeader;
