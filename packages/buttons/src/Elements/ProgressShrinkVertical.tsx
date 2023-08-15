import React from 'react';
import styled, { keyframes } from 'styled-components';


const textReset = keyframes`
  0% {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const borderReset = keyframes`
  0% {
    height: 2rem !important;
  }

  to {
    height: 100% !important;
  }
`;

const progressBar = keyframes`
  0% {
    opacity: 1;
    width: 0;
  }

  10% {
    opacity: 1;
    width: 15%;
  }

  25% {
    opacity: 1;
    width: 25%;
  }

  40% {
    opacity: 1;
    width: 35%;
  }

  55% {
    opacity: 1;
    width: 75%;
  }

  60% {
    opacity: 1;
    width: 100%;
  }

  to {
    opacity: 0;
    width: 100%;
  }
`;


const Button = styled.button`
  background: none;
  border-radius: 999px;
  box-sizing: border-box;
  display: block;
  overflow: hidden;
  padding: 1.2rem 3rem;
  position: relative;
  text-transform: uppercase;
  -webkit-tap-highlight-color: transparent;
  -webkit-appearance: button;
  background-color: #000;
  background-image: none;
  color: #ff1f71;
  cursor: pointer;
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
    Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif,
    Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
  font-size: 100%;
  font-weight: 900;
  line-height: 1.5;
  margin: 0;
  -webkit-mask-image: -webkit-radial-gradient(#000, #ff1f71);
  padding: 0;

  :disabled {
    cursor: default;
  }

  :-moz-focusring {
    outline: auto;
  }

  svg {
    display: block;
    vertical-align: middle;
  }

  [hidden] {
    display: none;
  }

  span {
    font-weight: 900;
    mix-blend-mode: difference;
    transition: opacity 0.2s;
  }

  :hover span {
    animation: ${textReset} 0.2s 0.8s forwards;
    opacity: 0;
  }

  :after,
  :before {
    border: 4px solid #ff1f71;
    border-radius: 999px;
    content: '';
    height: 100%;
    left: 0;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    transition: height 0.2s;
    width: 100%;
  }

  :after {
    background: #ff1f71;
    border: none;
    height: 2rem;
    width: 0;
    z-index: -1;
  }

  :hover:before {
    animation: ${borderReset} 0.2s linear 0.78s forwards;
    height: 2rem;
  }

  :hover:after {
    animation: ${progressBar} 1s;
  }
`;
 
const ProgressShrinkVertical = () => {
  return (
    <Button className="btn-82">
      <span>Button</span>
    </Button>
  );
};

export default ProgressShrinkVertical;
