import styled from 'styled-components';

const StyledCard = styled.div`
 color: ${({theme})=> theme.darkGray};
 border: 1px solid lightgrey;
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: space-evenly;
 width: 320px;
 height: 290px;
 border-radius: 5px;

 .form__btn--submit {
   padding: 0.5rem 1.5rem;
   border: none;
   outline: none;
   color: ${({theme})=> theme.primary};
   background-color: ${({theme})=> theme.grey800};
   border-radius: 5px;
   &:hover {
      background-color: ${({theme})=> theme.greenA700};
      color: ${({theme})=> theme.primary};
 }
 
`;


export default StyledCard;