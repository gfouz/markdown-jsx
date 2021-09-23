import { createGlobalStyle } from "styled-components";

export const NavStyles = createGlobalStyle`
 nav {
    display: flex;
    justify-content: flex-right;
    align-items: center;
    background-color: ${({ theme }) => theme.primaryDark};
    height: 100px;
   a{
      color: ${({ theme }) => theme.primary};
   }
 }

@font-face {
  font-family: "Anglican";
  src: local("Anglican"),
    url("./Anglican.ttf") format("truetype");
  font-weight: normal;
}

`








































