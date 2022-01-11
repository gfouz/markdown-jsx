import styled from "styled-components";

const StyledContact = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 100px auto auto auto 100px;
  grid-template-columns: 1fr;
  @media (max-width: 630px) {
    grid-template-rows: 60px auto auto auto  70px;
  }
  .contact--main {
    background-color: ${({ theme }) => theme.greenBase};
  }
  
  .contact__image--container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 200px;
    color: ${({ theme }) => theme.darkGray};

    h2 {
      margin: 0 0.5em;
      text-transform: uppercase;
      font-family: gabriola;
      color: darkgreen;
    }
  }
  .contact__image--personal {
    width: 100px;
    height: 100px;
    border: 5px solid #405c4c;
    border-radius: 5px;
    transform: rotate(-5deg);
    transition: all 0.5s;
    transform-origin: -1px;
    &:hover {
      transform: rotate(0deg);
    }
    img {
      max-width: 100%;
      height: auto;
    }
  }
  .contact__personal--links {
     h2 {color: #405c4c;}
  }
  .contact__image--cartoon {
    width: 150px;
    height: 150px;

    img {
      max-width: 100%;
      height: auto;
      animation: 1s cartoon  ease-out;
      animation-delay: 1s;
      animation-fill-mode: forward;
    }
  }
  .contact__elements--container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 1.5em;
  }
  .contact__projects--links {
    border: 1px solid lightgreen;
    border-radius: 5px;
    width: 150px;
    height: 160px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p {
      margin: 0;
      padding: 0;
    }

    h2 {
      font-family: gabriola;
      color: #405c4c;
    }
    a {
      padding: 0;
      margin: 0;
      color: black;
      text-decoration: none;
    }
  }
  
  .navbar-contact {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .navbar__contact--list {
    margin: 0.5em 1em;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    list-style-type: none;
    width: 200px;
    div {
      width: 33%;
    }
  }

  .form--card {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height: fit-content;
    @media (max-width: 500px){
      .form__card--logo {
        display: none;
      }
    }
  }
  .form-card__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 320px;
    height: fit-content;
    color: ${({theme})=> theme.grey800 };
    h3 {
      font-family: gabriola;
      color: red;
    }
    
  }
  .form__card--logo {
    color: #d5d5d5;
  }
  .other--links {
    color: ${({theme})=> theme.grey500};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 200px;
  }
  .logos {
    margin-top: 2em;
  }
  footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #405c4c;
    color: white;
    height:auto;
    p {
      text-transform: uppercase;
      margin: 0 1em;
      font-size: 10px;
    }
    h4 {
      margin: 0 1em;
    }
  }

   @keyframes cartoon {
     0% {
       transform: rotateY(360deg)
    }
     30% { 
        transform: rotateY(0deg);
    }
    60% {
       transform: translateX(-10px);
    }
    70% {
       transform: translateX(10px);
    }
    80% {
       transform: translateX(-20px);
    }
    90% {
       transform: rotate(360deg);
    }
   }
`;

export default StyledContact;
