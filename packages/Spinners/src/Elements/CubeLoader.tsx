import React from 'react';
import styled, { keyframes } from 'styled-components';

export interface CubeLoaderProps {
  color?: string;
  borderColor?: string;
  className?: string;
}

const spinnerAnimation = keyframes`
  0%, 100% {
    transform: rotate(45deg) rotateX(-25deg) rotateY(25deg);
  }

  50% {
    transform: rotate(45deg) rotateX(-385deg) rotateY(25deg);
  }
`;

const SpinnerContainer = styled.div<CubeLoaderProps>`
  width: 44px;
  height: 44px;
  animation: ${spinnerAnimation} 2s infinite ease;
  transform-style: preserve-3d;
  display: flex;
  align-items: center;
  justify-content: center;

  & > div {
    background-color: ${(props) => props.color || 'rgba(221, 0, 213, 1)'};
    height: 100%;
    position: absolute;
    width: 100%;
    border: 2px solid ${(props) => props.borderColor || 'rgba(49, 13, 90, 1)'};
  }

  & > div:nth-of-type(1) {
    transform: translateZ(-22px) rotateY(180deg);
  }

  & > div:nth-of-type(2) {
    transform: rotateY(-270deg) translateX(50%);
    transform-origin: top right;
  }

  & > div:nth-of-type(3) {
    transform: rotateY(270deg) translateX(-50%);
    transform-origin: center left;
  }

  & > div:nth-of-type(4) {
    transform: rotateX(90deg) translateY(-50%);
    transform-origin: top center;
  }

  & > div:nth-of-type(5) {
    transform: rotateX(-90deg) translateY(50%);
    transform-origin: bottom center;
  }

  & > div:nth-of-type(6) {
    transform: translateZ(22px);
  }
`;

const CubeLoader: React.FC<CubeLoaderProps> = ({ color, borderColor, className }) => {
  return (
    <SpinnerContainer color={color} borderColor={borderColor} className={className}>
      {[...Array(6)].map((_, index) => (
        <div key={index}></div>
      ))}
    </SpinnerContainer>
  );
};

export default CubeLoader;
