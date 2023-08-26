import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  to {
    transform: rotate(1turn);
  }
`;

interface CommetLoaderProps {
  color1: string;
  color2: string;
  size1: string;
  size2: string;
}

const LoaderContainer = styled.div`
  width: 20em;
  height: 20em;
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
  animation: ${spin} 3s linear infinite;
`;

const Face1 = styled(Face)<{ color: string; size: string }>`
  width: 100%;
  height: 100%;
  color: ${(props) => props.color};
  border-color: currentColor transparent transparent currentColor;
  border-width: 0.2em 0.2em 0em 0em;
  --deg: -45deg;
  animation-direction: normal;
  transform: scale(${(props) => props.size});
`;

const Face2 = styled(Face)<{ color: string; size: string }>`
  width: 70%;
  height: 70%;
  color: ${(props) => props.color};
  border-color: currentColor currentColor transparent transparent;
  border-width: 0.2em 0em 0em 0.2em;
  --deg: -135deg;
  animation-direction: reverse;
  transform: scale(${(props) => props.size});
`;

const Circle = styled.div<{ deg: string }>`
  position: absolute;
  width: 50%;
  height: 0.1em;
  top: 50%;
  left: 50%;
  background-color: transparent;
  transform: rotate(var(--deg));
  transform-origin: left;
`;

const CircleBefore = styled.div`
  position: absolute;
  top: -0.5em;
  right: -0.5em;
  content: '';
  width: 1em;
  height: 1em;
  background-color: currentColor;
  border-radius: 50%;
  box-shadow: 0 0 2em, 0 0 4em, 0 0 6em, 0 0 8em, 0 0 10em, 0 0 0 0.5em rgba(255, 255, 0, 0.1);
`;

const CommetLoader: React.FC<CommetLoaderProps> = ({
  color1,
  color2,
  size1,
  size2,
}) => {
  return (
    <LoaderContainer>
      <Face1 color={color1} size={size1}>
        <Circle deg="-45deg" />
        <CircleBefore />
      </Face1>
      <Face2 color={color2} size={size2}>
        <Circle deg="-135deg" />
        <CircleBefore />
      </Face2>
    </LoaderContainer>
  );
};

export default CommetLoader;
