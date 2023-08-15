import React from 'react';
import styled, { keyframes } from 'styled-components';

const spinnerAnimation = keyframes`
  0%, 10%, 20%, 30%, 50%, 60%, 70%, 80%, 90%, 100% {
    transform: rotate(calc(var(--rotation) * 1deg)) translate(0, calc(var(--translation) * 1%));
  }
  50% {
    transform: rotate(calc(var(--rotation) * 1deg)) translate(0, calc(var(--translation) * 1.5%));
  }
`;

const SpinnerContainer = styled.div`
  position: absolute;
  width: ${(props) => props.size || '9px'};
  height: ${(props) => props.size || '9px'};
`;

const SpinnerDiv = styled.div`
  position: absolute;
  width: 50%;
  height: 150%;
  background: ${(props) => props.color || '#000000'};
  transform: rotate(calc(var(--rotation) * 1deg)) translate(0, calc(var(--translation) * 1%));
  animation: ${spinnerAnimation} 1s calc(var(--delay) * 1s) infinite ease;
`;

interface CircleLoaderProps {
  color?: string;
  size?: string;
  className?: string;
}

const CircleLoader: React.FC<CircleLoaderProps> = ({ color, size, className }) => {
  return (
    <SpinnerContainer className={`spinner ${className}`} size={size}>
      {[...Array(10)].map((_, index) => (
        <SpinnerDiv
          key={index}
          color={color}
          style={{
            '--delay': (index + 1) * 0.1,
            '--rotation': (index + 1) * 36,
            '--translation': 150,
          }}
        ></SpinnerDiv>
      ))}
    </SpinnerContainer>
  );
};

export default CircleLoader;
