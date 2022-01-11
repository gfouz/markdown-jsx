import React from 'react';
import StyledButton  from './StyledButton';
//import {bool, func} from 'prop-types';


const Button = ({open, setOpen})=> {

	return (
       <StyledButton open ={open} onClick = {()=> setOpen(!open)}>

           <div></div>
           <div></div>
           <div></div>

       </StyledButton>
		);
}
export default Button;

 /*Button.proTypes = {
   open: bool,
   setOpen: func,
 };
*/


