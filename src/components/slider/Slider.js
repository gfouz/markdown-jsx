import React, { useReducer, useEffect } from "react";
import styled from "styled-components";
import { content } from "./content";
import SliderContent from "./SliderContent";
import Arrows from "./Arrow";

function Slider(props) {
  //const len = images.length - 1;
  const initialState = {
    selected: 0,
    length: content.length - 1,
  };

  function reducer(state, action) {
    switch (action.type) {
      case "next": {
        return {
          ...state,
          selected: state.selected === state.length ? 0 : state.selected + 1,
        };
      }
      case "previous": {
        return {
          ...state,
          selected: state.selected < 1 ? state.length : state.selected - 1,
        };
      }
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StyledSlider margin={props.margin}>
      <div className="slider-container">
        <SliderContent selected={state.selected} content={content} width={props.width}>
          <Arrows dispatch={dispatch} />
        </SliderContent>
      </div>
    </StyledSlider>
  );
}

export default Slider;

const StyledSlider = styled.div`
  --cardwidth: ${(props) => props.width || "320px"};

  .slider-container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--cardwidth);
    height: 350px;
    margin: ${(props)=>props.margin || "0 auto"};
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 1px 1px 9px #000000;
  }
`;

/*const prev = () => {
    setActiveIndex(selected < 1 ? len : selected - 1);
  };
  const next = () => {
    setActiveIndex(selected === len ? 0 : selected + 1);

   useEffect(()=>{
     
   let timer= setInterval(()=>{
       dispatch({type:'timer'})
     },3000)
   return ()=> clearInterval(timer);
  },[state]);
 
  };*/
