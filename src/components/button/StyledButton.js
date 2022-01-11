import styled from 'styled-components'


const StyledButton = styled.button`
  position: absolute;
  top: 2%;
  left: 2rem;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
  z-index: 10;
  margin: 2em 0;
  &:focus {
     outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background:${({ open }) => (open ? "black" : "white")};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    


    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

export default StyledButton;