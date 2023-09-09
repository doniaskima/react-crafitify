import React from 'react';
import styled, { keyframes } from 'styled-components';

const pulsingAnimation = keyframes`
  100% {
    box-shadow: 0 0 0 30px transparent;
  }
`;

const LoaderWrapper = styled.div<{ color?: string; size?: string }>`
  width: ${(props) => (props.size ? props.size : '20px')};
  height: ${(props) => (props.size ? props.size : '20px')};
  aspect-ratio: 1;
  border-radius: 50%;
  background: ${(props) => (props.color ? props.color : '#000')};
  box-shadow: 0 0 0 0 ${(props) => (props.color ? props.color + '4' : '#0004')};
  animation: ${pulsingAnimation} 1s infinite;

  &:not(:last-child) {
    margin-right: 8px;
  }
`;

const Pulsing: React.FC<{ color?: string; size?: string }> = ({
  color,
  size,
}) => {
  return <LoaderWrapper color={color} size={size} />;
};

export default Pulsing;
