import styled from "styled-components";

const StyledToast = styled.div`
  .toast-container {
    position: absolute;
    z-index: 10;
    width: 300px; 
    height:400px;
    border-radius: 5px;
    margin: 2em auto;
    background-color: #000000;
    color: #ffffff;
    top:0;
    right:0;
    left:0;
    animation: toast 1s;
    animation-fill-mode: forward;
    button {
      position: relative;
      top: 10px;
      left:130px;
      background: none;
      outline: none;
      border: 0;
      color: #ffffff;
    }
  }
  @keyframes toast {
    from {
       height: 0;
    }
    to {
       height: 400px;
    }
  }
`;

export default StyledToast;
