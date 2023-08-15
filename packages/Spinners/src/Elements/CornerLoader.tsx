import React from 'react';
import styled, { keyframes } from 'styled-components';

interface CornerLoaderProps {
  color?: string;
  size?: string;
  className?: string;
}

const spin988 = keyframes`
  0% {
    transform: scale(1) rotate(0);
  }
  20%, 25% {
    transform: scale(1.3) rotate(90deg);
  }
  45%, 50% {
    transform: scale(1) rotate(180deg);
  }
  70%, 75% {
    transform: scale(1.3) rotate(270deg);
  }
  95%, 100% {
    transform: scale(1) rotate(360deg);
  }
`;

const LoaderContainer = styled.div<CornerLoaderProps>`
  --dim: ${(props) => props.size || '3rem'};
  width: var(--dim);
  height: var(--dim);
  position: relative;
  animation: ${spin988} 2s linear infinite;
`;

const Circle = styled.div<CornerLoaderProps>`
  --dim: ${(props) => props.size || '1.2rem'};
  width: var(--dim);
  height: var(--dim);
  background-color: ${(props) => props.color || '#333'};
  border-radius: 50%;
  position: absolute;
`;

const TopLeftCircle = styled(Circle)`
  top: 0;
  left: 0;
`;

const TopRightCircle = styled(Circle)`
  top: 0;
  right: 0;
`;

const BottomLeftCircle = styled(Circle)`
  bottom: 0;
  left: 0;
`;

const BottomRightCircle = styled(Circle)`
  bottom: 0;
  right: 0;
`;

const CornerLoader: React.FC<CornerLoaderProps> = ({ color, size, className }) => {
  return (
    <LoaderContainer className={className}>
      <TopLeftCircle color={color} size={size}></TopLeftCircle>
      <TopRightCircle color={color} size={size}></TopRightCircle>
      <BottomLeftCircle color={color} size={size}></BottomLeftCircle>
      <BottomRightCircle color={color} size={size}></BottomRightCircle>
    </LoaderContainer>
  );
};

export default CornerLoader;
