import { useReducer } from "react";
import styled from "styled-components";

const Card = (props) => {

  const initialState = {
    open: true
  }
  function reducer(state, action){

    switch (action.type) {
       case 'toggle':
       return {
         ...state,
         open:!state.open 
       }
       
       default: return state;
    }

  }
  const [state, dispatch] = useReducer(reducer, initialState);
 
  const content1 = (
    <div className={state.open ? "card__item1" : "hidden"}>
     <img src="/images/children.jpg" className="card__image" />
     <h2>Imagination & Creativity</h2>
    </div>
  );
  const content2 = (
    <div className={state.open ? "hidden" : "card__item2"}>
      <h4>Imagination is the key to innovation.</h4>
      <p>The ability to imagine things pervades our entire existence. 
         It influences everything we do, think about and create. 
         It leads to elaborate theories, dreams and inventions in any 
         profession from the realms of academia to engineering and the arts. 
         Ultimately, imagination influences everything we do regardless 
         of our profession.
      </p>   
    </div>
  );
  const content = state.open ? content1 : content2;
  const buttonText = state.open ? "Read More" : "Back";

  function toggleCard() {
   dispatch({type:'toggle', value: initialState})
   
  }

  return (
    <>
      <StyledCard width={props.width} height={props.height} margin={props.margin}>
        <div className="card">
        <div className={state.open ? "card__item1": "card__item2"}>
          {content}
        </div>

          <button className="card__button" onClick={() => toggleCard()}>
            {buttonText}
          </button>
        </div>
      </StyledCard>
    </>
  );
};

const StyledCard = styled.div`
    
   --widths: ${(props)=>props.width || "320px"};
   --heights: ${(props)=>props.height || "350px"};

  .card {
    position: relative;
    width: var(--widths);
    height: var(--heights);
    margin: ${(props)=>props.margin || "0 auto"};
    border-radius: 5px;
    text-align: center;
    color: #555555;
    background-color:#ffffff;
    box-shadow: 1px 1px 9px #000000;
  }
  .card__item1 {
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    animation: dropdown1 0.5s;
    animation-fill-mode: forwards;
    h2 {
      margin: 1em 0;
    }
  }
  .card__item2 {
    border-radius: 5px; 
    animation: dropdown2 0.5s;
    animation-fill-mode: forwards;
    animation-direction: reverse;
    background-color: #222222;
    p {
      text-align: left;
      margin: 2.5em 1em;
      color: #666666;
    }
    h4 {
      text-align: left;
      position: relative;
      top: 2em;
      left:1em;
    }
  }
  .hidden {
    display: none;
  }
  .card__button {
    position: absolute;
    bottom: 40px;
    transform: translate(-50%, 50%);
    background-color: #00b0ff;
    color: #ffffff;
    width: 120px;
    padding: 0.5em 1em;
    border-radius: 5px;
    border: 0;
    cursor: pointer;
    z-index: 10;
  }
  .card__image {
    max-width: 100%;
    height: auto;
  }
  @keyframes dropdown1 {
    0% {
      height: 0;
    
    }
    
    100% {
       height: var(--heights);
       background-color: #222222;
       color: #999999;
    }
  }
  @keyframes dropdown2 {
    0% {
      height: 0;
    
    }
    
    100% {
       height: var(--heights);
       background-color: #222222;
       color: #888888;
       
    }
  }

  
`;

export default Card;
