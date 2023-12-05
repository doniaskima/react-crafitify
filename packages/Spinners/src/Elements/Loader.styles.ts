import styled, { keyframes } from 'styled-components';

const loading = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const rotation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const dotsAnimation = keyframes`
  0% {
    transform: scale(0);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 0;
  }
`;

export const LoaderRingContainer = styled.div`
  display: inline-block;
  position: relative;
  width: ${(props) => `${props.size}px`};
  height: ${(props) => `${props.size}px`};

  & > div {
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    box-sizing: border-box;
    position: absolute;
    width: ${(props) => `${props.size}px`};
    height: ${(props) => `${props.size}px`};
    margin: auto;
    border: ${(props) => `${props.borderSize}px solid ${props.color}`};
    border-radius: 50%;
    animation: ${loading} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: ${(props) =>
      `${props.color} transparent transparent transparent`};
  }

  & > div:nth-of-type(1) {
    animation-delay: -0.45s;
  }

  & > div:nth-of-type(2) {
    animation-delay: -0.3s;
  }

  & > div:nth-of-type(3) {
    animation-delay: -0.15s;
  }
`;

export const LoaderRotateContainer = styled.div`
  width: ${(props) => `${props.size}px`};
  height: ${(props) => `${props.size}px`};
  border-radius: 50%;
  display: inline-block;
  border-top: ${(props) => `${props.borderSize}px solid ${props.color}`};
  border-right: 3px solid transparent;
  box-sizing: border-box;
  animation: ${rotation} 1s linear infinite;
`;

export const LoaderDotsContainder = styled.div`
  width: ${(props) => `${props.size}px`};
  height: ${(props) => `${props.size}px`};
  display: inline-block;
  position: relative;

  &::after,
  &::before {
    content: '';
    box-sizing: border-box;
    width: ${(props) => `${props.size}px`};
    height: ${(props) => `${props.size}px`};
    border-radius: 50%;
    background: ${(props) => props.color};
    position: absolute;
    left: 0;
    top: 0;
    animation: ${dotsAnimation} 2s linear infinite;
  }

  &::after {
    animation-delay: 0.5s;
  }
`;
