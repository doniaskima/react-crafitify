import React from 'react';
import styled, { keyframes } from 'styled-components';

const swingAnimation = keyframes`
  0% {
    transform: rotate(0deg);
    animation-timing-function: ease-out;
  }

  25% {
    transform: rotate(70deg);
    animation-timing-function: ease-in;
  }

  50% {
    transform: rotate(0deg);
    animation-timing-function: linear;
  }
`;

const swing2Animation = keyframes`
  0% {
    transform: rotate(0deg);
    animation-timing-function: linear;
  }

  50% {
    transform: rotate(0deg);
    animation-timing-function: ease-out;
  }

  75% {
    transform: rotate(-70deg);
    animation-timing-function: ease-in;
  }
`;

interface NewtonsCradleProps {
  color?: string;
  className?: string;
}

const NewtonsCradleContainer = styled.div<NewtonsCradleProps>`
  --uib-size: 50px;
  --uib-speed: 1.2s;
  --uib-color: ${(props) => props.color || '#474554'};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: var(--uib-size);
  height: var(--uib-size);
`;

const NewtonsCradleDot = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
  width: 25%;
  transform-origin: center top;

  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 25%;
    border-radius: 50%;
    background-color: var(--uib-color);
  }

  &:first-child {
    animation: ${swingAnimation} var(--uib-speed) linear infinite;
  }

  &:last-child {
    animation: ${swing2Animation} var(--uib-speed) linear infinite;
  }
};`


const NewtonsCradle: React.FC<NewtonsCradleProps> = ({ color, className }) => {
  return (
    <NewtonsCradleContainer className={className} color={color}>
      <NewtonsCradleDot></NewtonsCradleDot>
      <NewtonsCradleDot></NewtonsCradleDot>
      <NewtonsCradleDot></NewtonsCradleDot>
      <NewtonsCradleDot></NewtonsCradleDot>
    </NewtonsCradleContainer>
  );
};

export default NewtonsCradle;
