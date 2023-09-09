import React from 'react';
import styled, { keyframes } from 'styled-components';

const loaderAnimation = keyframes`
  100% {
    transform: rotate(calc(var(--s, 1) * 1turn));
  }
`;

const LoaderWrapper = styled.div<{ size?: string }>`
  width: ${(props) => (props.size ? props.size : '60px')};
  height: ${(props) => (props.size ? props.size : '30px')};
  display: grid;
  --c: #0000 calc(100% - 5px), #000 calc(100% - 4px) 96%, #0000;
  background: radial-gradient(farthest-side at bottom, var(--c)) 0 0,
    radial-gradient(farthest-side at top, var(--c)) 100% 100%;
  background-size: calc(50% + 2px) 50%;
  background-repeat: no-repeat;
  animation: ${loaderAnimation} 1.5s infinite linear;

  &::before,
  &::after {
    content: "";
    grid-area: 1/1;
    background: inherit;
    animation: inherit;
    animation-duration: 2s;
  }

  &::after {
    --s: -1;
  }
};`

const Hypnotic: React.FC<{ size?: string }> = ({ size }) => {
  return <LoaderWrapper size={size} />;
};

export default Hypnotic;
