import React from 'react';
import styled, { keyframes } from 'styled-components';

const spinnerAnimation = keyframes`
  100% {
    transform: rotate(1turn);
  }
`;

const Spinner = styled.div`
  width: ${props => props.size || '56px'};
  height: ${props => props.size || '56px'};
  display: grid;
  border: 4px solid #0000;
  border-radius: 50%;
  border-right-color: ${props => props.color || '#004dff'};
  animation: ${spinnerAnimation} 1s infinite linear;
`;

const BeforeAfterSpinner = styled.div`
  content: "";
  grid-area: 1/1;
  margin: 2px;
  border: inherit;
  border-radius: 50%;
  animation: ${spinnerAnimation} 2s infinite;
`;

const AfterSpinner = styled(BeforeAfterSpinner)`
  margin: 8px;
  animation-duration: 3s;
`;

const BluLoader = ({ color, size }) => {
  return (
    <Spinner className="spinner" color={color} size={size}>
      <BeforeAfterSpinner />
      <AfterSpinner />
    </Spinner>
  );
};

export default BluLoader;
