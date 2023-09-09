import React from 'react';
import styled, { keyframes } from 'styled-components';

export interface ArcadeLoaderProps {
  size?: string;
  color?: string;
}

const loaderAnimation = keyframes`
  0% {
    clip-path: polygon(50% 50%, 100% 0, 100% 0, 0 0, 0 100%, 100% 100%, 100% 100%);
  }
  100% {
    clip-path: polygon(50% 50%, 100% 65%, 100% 0, 0 0, 0 100%, 100% 100%, 100% 35%);
  }
`;

const LoaderWrapper = styled.div<ArcadeLoaderProps>`
  width: ${(props) => props.size || '50px'};
  aspect-ratio: 1;
  border-radius: 50%;
  background: radial-gradient(farthest-side, ${(props) => props.color || '#000'} 98%, #0000) 55% 20%/8px 8px no-repeat,
    #ffcc00;
  box-shadow: 2px -6px 12px 0px inset rgba(0, 0, 0, 0.7);
  animation: ${loaderAnimation} 0.5s infinite steps(5) alternate;
`;

const ArcadeLoader: React.FC<ArcadeLoaderProps> = ({ size, color }) => {
  return <LoaderWrapper size={size} color={color} />;
};

export default ArcadeLoader;
