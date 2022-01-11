import styled from 'styled-components';


const StyledWork = styled.div`
   min-height: 100vh;
   display: grid;
   grid-template-rows: 90px 300px auto 200px 120px;
  grid-template-columns: 1fr;
   color: #ffffff;
   background-color: #263238;
   
   .first--stage {
   	 display: flex;
   	 justify-content: center;
   	 align-items: flex-start;
   }
   .first__stage--icon-container {
   	   width: 100%;
         
   }
   .first__stage--links-container {
        text-align: left;
        display: inline-block;
      a {
         color: #ffffff;
         text-decoration: none;
          display: block;
          padding: 0.3em 0;
          display: block;
       }
   }
   .second--stage {
   	 display: flex;
       flex-wrap: wrap;
   	 justify-content: space-evenly;
   	 align-items: center;
   }
   .second__stage--image-container {
   	 width: 320px;
   	 height: 400px;
   	  p,h4 {
         text-align: left;
         margin: 0.5em 0.5em;
       }
   }
   .second__stage--image1 {
      width: 100%;
      height: 200px;
      background-image: url('/images/stars.jpg');
       background-repeat: no-repeat;
       background-position: bottom;
       background-size: cover;
   }
   .second__stage--image2 {
      width: 100%;
      height: 200px;
      background-image: url('/images/matrix.jpg');
       background-repeat: no-repeat;
       background-position: center;
       background-size: cover;
   }
   .second__stage--image3 {
      width: 100%;
      height: 200px;
      background-image: url('/images/paisaje.jpg');
       background-repeat: no-repeat;
       background-position: top;
       background-size: cover;
   }
.technologies--description {
   display: flex;
   justify-content: center;
   align-items: center;
   h5 {
      margin: 0 1rem;
   }
}

   footer {
      display: flex;
      flex-direction: column;
      justify-content:center;
      align-items: center;
      text-transform: uppercase;
      h6 {
         margin: -1em 0 3em 0;
      }
   }

`;

export default StyledWork;