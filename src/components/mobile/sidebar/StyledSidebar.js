import  styled  from "styled-components";


const StyledSidebar = styled.nav`

  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #00000070;
  transition: all 0.5s;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  width: 20%;
  @media (min-width: 550px){
    display: none;
  }

  a {
    display: flex;
    font-size: 1.8rem;
    font-family: literata;
    text-transform: uppercase;
    padding: 2rem 2rem;
    font-weight: bold;
    letter-spacing: 0.3rem;
    color: ${({ theme }) => theme.primaryHover};
    text-decoration: none;
    transition: color 0.3s linear;
     div {
       margin: 0 0.2em;
     }
    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
  }
`;

export default StyledSidebar;