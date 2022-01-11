import styled from "styled-components";

const StyledIcons = styled.nav`
  display: flex;
  justify-content: space-evenly;
  justify-content: ${(props)=> props.justify};
  align-items: center;
  width: ${(props) => props.width};
  height: 40px;
  .react--icons {
    font-size: ${(props) => props.size};
    a {
      color: ${(props) => props.color};
    }
  }
`;

export default StyledIcons;
