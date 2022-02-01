import React from 'react';
import StyleCard from './StyledCard'
import { useFormik } from 'formik';

const FormCard = () => {
 // Pass the useFormik() hook initial form values and a submit function that will
 // be called when the form is submitted
 const formik = useFormik({
   initialValues: {
      email: '',
      message: '',
      action: "http://formspree.io/gfouz1975@gmail.com",
      method: "POST"
   },
   onSubmit: values => {
     alert(JSON.stringify(values, null, 2));
   },
 });
 
 return (
   <form onSubmit={formik.handleSubmit} action={formik.values.action} method={formik.values.method}>
     <StyleCard>
     <label htmlFor="email">Email Address</label>
     <input
       id="email"
       name="email"
       type="email"
       onChange={formik.handleChange}
       value={formik.values.email}
     />
     <label htmlFor="user-message">Message</label>
     <input
       style = {{height:"50px"}}
       id="user-message"
       name="message"
       type="text"
       onChange={formik.handleChange}
       value={formik.values.message}
     />

     <button type="submit" className = "form__btn--submit">Submit</button>
     </StyleCard>
   </form>
 );
};

export default FormCard;