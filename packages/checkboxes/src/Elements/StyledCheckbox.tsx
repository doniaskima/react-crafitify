import React from 'react';
import styled, { keyframes } from 'styled-components';

const zoomAnimation = keyframes`
  0% {
    transform: scale(0);
  }

  20% {
    transform: scale(1.5);
  }

  40% {
    transform: scale(0.5);
  }

  50% {
    transform: scale(1);
  }

  70% {
    transform: scale(1.2);
  }

  90% {
    transform: scale(0.8);
  }

  100% {
    transform: scale(1);
  }
`;

const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  appearance: none;
  width: 30px;
  aspect-ratio: 1;
  border-radius: 8px;
  border: 2px solid black;
  position: relative;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  
  &:before {
    font-family: "Quicksand", sans-serif;
    position: absolute;
    bottom: -4px;
    left: 1px;
    content: "✔";
    font-size: 40px;
    color: rgb(255, 153, 0);
    transform: scale(0);
    transition: all 0.2s ease-in-out;
  }
  
  &:checked:before {
    animation: ${zoomAnimation} 0.5s ease-in-out;
    transform: scale(1);
  }
`;

const StyledCheckbox: React.FC = () => {
  return <Checkbox />;
};

export default StyledCheckbox;
