import React from "react";
import styled from "styled-components";
import { FaCaretRight, FaCaretLeft } from "react-icons/fa";

const Arrows = ({ dispatch }) => {
  return (
    <StyledArrow>
      <div className="arrows">
        <div className="prev" onClick={() => dispatch({ type: "previous" })}>
          <FaCaretLeft style={{ color: "blue" }} />
        </div>
        <h5>SOME TECHNOLOGIES I USE</h5>
        <div className="next" onClick={() => dispatch({ type: "next" })}>
          <FaCaretRight style={{ color: "red" }} />
        </div>
      </div>
    </StyledArrow>
  );
};

export default Arrows;

const StyledArrow = styled.div`
  .arrows {
    position: absolute;
    width: 100%;
    bottom: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #00838f;
  }
  .prev,
  .next {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    font-size: 25px;
    color: #222222;
    text-align: center;
    line-height: 30px;
    cursor: pointer;
    margin: 0 0.5em;
  }
`;
