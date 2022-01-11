import React from 'react';
import StyledMatrix from './StyledMatrix';

const Matrix = (props) => {
    return (
        <StyledMatrix
            width={props.width}
            height={props.height}
            color={props.color}
            bg={props.bg}
            justify={props.justify}
            align={props.align}
            font={props.font}
            text={props.text}
            direction={props.direction}
        >
           {props.children}
        </StyledMatrix>
    );
};

export default Matrix;