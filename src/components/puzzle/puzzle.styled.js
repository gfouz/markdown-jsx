import styled from 'styled-components';


const StyledPuzzle = styled.div `
 width: 320px;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;

 .puzzle {
   animation: puzzle 2s;
   animation-fill-mode: forwards;
   animation-delay: 2s;
  

 }
 .puzzle__upside {
 	display: flex;
 	position: relative;
 	top: 11px;
 }
 .puzzle__downside {
 	display: flex;
 	position: relative;
    bottom: 11px;
 }
 .puzzle__one {
   position: relative;
 	left: 9px;
  animation: one 1s;
  animation-fill-mode: forwards;
 }
 .puzzle__two {
 	position: relative;
 	right: 9px;
   animation: two 1s;
  animation-fill-mode: forwards;
 }
 .puzzle__three {
 	position: relative;
 	left: 9px;
   animation: three 1s;
  animation-fill-mode: forwards;
 }
 .puzzle__four {
 	position: relative;
 	right: 9px;
   animation: four 1s;
  animation-fill-mode: forwards;
 }
  @keyframes puzzle {
   from {
      opacity: 1;
   }
   to {
      opacity: 0;
    
   }
 }
 @keyframes one {
   from {
      transform: translateY(-75px);
   }
   to {
       transform: translateY(0);
   }
 }
 @keyframes two {
   from {
      transform: rotate(0);
   }
   to {
       transform: rotate(360deg);
   }
 }
 @keyframes three {
   from {
      transform: rotate(0);
   }
   to {
       transform: rotate(360deg);
   }
 }
 @keyframes four {
   from {
      transform: translateY(75px);
   }
   to {
       transform: translateY(0);
   }
 }
 
`;


export default StyledPuzzle;