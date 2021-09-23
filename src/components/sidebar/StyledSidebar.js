import  styled  from "styled-components";
import '../../App.css';

const StyledSidebar = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: white;
  transition: all 0.5s;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  @media (max-width: 400px) {
     transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
     width:100%;
  }

  a {
    font-size: 1.8rem;
    font-family: gabriola;
    text-transform: uppercase;
    padding: 2rem 2rem;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: ${({ theme }) => theme.primaryDark};
    text-decoration: none;
    transition: color 0.3s linear;

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