import React from 'react';
import styled, { keyframes } from 'styled-components';

interface RotatingCirclesLoaderProps {
  color?: string;
  className?: string;
}

const rotateAnimation = keyframes`
  to {
    transform: rotate(1turn);
  }
`;

const LoaderContainer = styled.div`
  width: 6em;
  height: 6em;
  font-size: 10px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Face = styled.div`
  position: absolute;
  border-radius: 50%;
  border-style: solid;
  animation: ${rotateAnimation} 3s linear infinite;
`;

const Circle = styled.div`
  position: absolute;
  width: 50%;
  height: 0.1em;
  top: 50%;
  left: 50%;
  background-color: transparent;
  transform: rotate(var(--deg));
  transform-origin: left;

  &::before {
    position: absolute;
    top: -0.5em;
    right: -0.5em;
    content: '';
    width: 1em;
    height: 1em;
    background-color: currentColor;
    border-radius: 50%;
    box-shadow: 0 0 2em,
      0 0 4em,
      0 0 6em,
      0 0 8em,
      0 0 10em,
      0 0 0 0.5em rgba(255, 255, 0, 0.1);
  }
`;

const RotatingCirclesLoader: React.FC<RotatingCirclesLoaderProps> = ({ color = 'currentColor', className }) => {
  return (
    <LoaderContainer className={className}>
      <Face style={{ width: '100%', height: '100%', color, borderColor: `${color} transparent transparent currentColor` }}>
        <Circle />
      </Face>
      <Face style={{ width: '70%', height: '70%', color, borderColor: `currentColor ${color} transparent transparent` }}>
        <Circle style={{ '--deg': '-135deg' }} />
      </Face>
    </LoaderContainer>
  );
};

export default RotatingCirclesLoader;
