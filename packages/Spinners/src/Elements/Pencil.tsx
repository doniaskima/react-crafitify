import React from 'react';
import styled, { keyframes } from 'styled-components';

// Define the keyframes for the animations
const pencilBody1Animation = keyframes`
  from, to {
    stroke-dashoffset: 351.86;
    transform: rotate(-90deg);
  }
  50% {
    stroke-dashoffset: 150.8;
    transform: rotate(-225deg);
  }
`;

const pencilBody2Animation = keyframes`
  from, to {
    stroke-dashoffset: 406.84;
    transform: rotate(-90deg);
  }
  50% {
    stroke-dashoffset: 174.36;
    transform: rotate(-225deg);
  }
`;

const pencilBody3Animation = keyframes`
  from, to {
    stroke-dashoffset: 296.88;
    transform: rotate(-90deg);
  }
  50% {
    stroke-dashoffset: 127.23;
    transform: rotate(-225deg);
  }
`;

const pencilEraserAnimation = keyframes`
  from, to {
    transform: rotate(-45deg) translate(49px,0);
  }
  50% {
    transform: rotate(0deg) translate(49px,0);
  }
`;

const pencilEraserSkewAnimation = keyframes`
  from, 32.5%, 67.5%, to {
    transform: skewX(0);
  }
  35%, 65% {
    transform: skewX(-4deg);
  }
  37.5%, 62.5% {
    transform: skewX(8deg);
  }
  40%, 45%, 50%, 55%, 60% {
    transform: skewX(-15deg);
  }
  42.5%, 47.5%, 52.5%, 57.5% {
    transform: skewX(15deg);
  }
`;

const pencilPointAnimation = keyframes`
  from, to {
    transform: rotate(-90deg) translate(49px,-30px);
  }
  50% {
    transform: rotate(-225deg) translate(49px,-30px);
  }
`;

const pencilRotateAnimation = keyframes`
  from {
    transform: translate(100px,100px) rotate(0);
  }
  to {
    transform: translate(100px,100px) rotate(720deg);
  }
`;

const PencilWrapper = styled.svg`
  display: block;
  width: 10em;
  height: 10em;
`;

const PencilStroke = styled.circle`
  animation: ${pencilRotateAnimation} 3s linear infinite;
  transform: translate(100px, 100px) rotate(-113deg);
  stroke-linecap: round;
  stroke-dashoffset: 439.82;
  stroke-dasharray: 439.82 439.82;
  stroke-width: 2;
  stroke: currentColor;
  fill: none;
`;

const PencilRotate = styled.g`
  animation: ${pencilRotateAnimation};
`;

const PencilBody1 = styled.circle`
  animation: ${pencilBody1Animation};
`;

const PencilBody2 = styled.circle`
  animation: ${pencilBody2Animation};
`;

const PencilBody3 = styled.circle`
  animation: ${pencilBody3Animation};
`;

const PencilEraser = styled.g`
  animation: ${pencilEraserAnimation};
  transform: rotate(-90deg) translate(49px, 0);
`;

const PencilEraserSkew = styled.g`
  animation: ${pencilEraserSkewAnimation};
  animation-timing-function: ease-in-out;
`;

const PencilPoint = styled.g`
  animation: ${pencilPointAnimation};
  transform: rotate(-90deg) translate(49px, -30px);
`;

const Pencil: React.FC = () => {
  return (
    <PencilWrapper xmlns="http://www.w3.org/2000/svg" height="200px" width="200px" viewBox="0 0 200 200" className="pencil">
      <defs>
        <clipPath id="pencil-eraser">
          <rect height="30" width="30" ry="5" rx="5"></rect>
        </clipPath>
      </defs>
      <PencilStroke r="70" className="pencil__stroke"></PencilStroke>
      <PencilRotate className="pencil__rotate">
        <g fill="none">
          <PencilBody1 transform="rotate(-90)" r="64" className="pencil__body1"></PencilBody1>
          <PencilBody2 transform="rotate(-90)" r="74" className="pencil__body2"></PencilBody2>
          <PencilBody3 transform="rotate(-90)" r="54" className="pencil__body3"></PencilBody3>
        </g>
        <PencilEraser transform="rotate(-90) translate(49,0)" className="pencil__eraser">
          <PencilEraserSkew className="pencil__eraser-skew">
            <rect height="30" width="30" ry="5" rx="5" fill="hsl(223,90%,70%)"></rect>
            <rect clipPath="url(#pencil-eraser)" height="30" width="5" fill="hsl(223,90%,60%)"></rect>
            <rect height="20" width="30" fill="hsl(223,10%,90%)"></rect>
            <rect height="20" width="15" fill="hsl(223,10%,70%)"></rect>
            <rect height="20" width="5" fill="hsl(223,10%,80%)"></rect>
            <rect height="2" width="30" y="6" fill="hsla(223,10%,10%,0.2)"></rect>
            <rect height="2" width="30" y="13" fill="hsla(223,10%,10%,0.2)"></rect>
          </PencilEraserSkew>
        </PencilEraser>
        <PencilPoint transform="rotate(-90) translate(49,-30)" className="pencil__point">
          <polygon points="15 0,30 30,0 30" fill="hsl(33,90%,70%)"></polygon>
          <polygon points="15 0,6 30,0 30" fill="hsl(33,90%,50%)"></polygon>
          <polygon points="15 0,20 10,10 10" fill="hsl(223,10%,10%)"></polygon>
        </PencilPoint>
      </PencilRotate>
    </PencilWrapper>
  );
};

export default Pencil;
