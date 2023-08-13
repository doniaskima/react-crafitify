import React from 'react';
import styled, { keyframes } from 'styled-components';

const spinnerFadeAnimation = keyframes`
  0% {
    background-color: #69717d;
  }

  100% {
    background-color: transparent;
  }
`;

const SpinnerContainer = styled.div`
  font-size: 28px;
  position: relative;
  display: inline-block;
  width: 1em;
  height: 1em;

  &.center {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
  }
`;

const SpinnerBlade = styled.div`
  position: absolute;
  left: 0.4629em;
  bottom: 0;
  width: 0.074em;
  height: 0.2777em;
  border-radius: 0.0555em;
  background-color: transparent;
  transform-origin: center -0.2222em;
  animation: ${spinnerFadeAnimation} 1s infinite linear;

  ${props =>
    props.index &&
    `
    animation-delay: ${props.index * 0.083}s;
    transform: rotate(${props.index * 30}deg);
  `}

  ${props =>
    props.color &&
    `
    background-color: ${props.color};
  `}
`;

const CustomSpinner = ({ color, center }) => {
    return (
      <SpinnerContainer className={`spinner ${center ? 'center' : ''}`}>
        {[...Array(12)].map((_, index) => (
          <SpinnerBlade key={index} index={index + 1} style={{ backgroundColor: color }} />
        ))}
      </SpinnerContainer>
    );
  };
  

export default CustomSpinner;
