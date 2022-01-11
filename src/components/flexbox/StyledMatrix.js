import styled, {css} from 'styled-components';

const StyledMatrix = styled.div`
  width: 100%;
  height: auto;
  width: ${(props)=> props.width};
  height: ${(props)=> props.height};
  display: flex;
  flex-direction: ${(props)=> props.direction};
  justify-content: center;
  align-items: center;
  justify-content: ${(props)=> props.justify};
  align-items: ${(props)=> props.align};
  color: ${(props)=> props.color};
  background-color: ${(props)=> props.bg};
  font-family: ${(props)=> props.font};
  text-transform: ${(props)=> props.text};
  ${(props)=> props.column && css`flex-direction: column;`};
   @media (max-width: 630px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

`;

export default StyledMatrix;