import React from 'react';
import styled, { keyframes } from 'styled-components';

export interface GradientSpinner2Props {
  size?: string;
  startColor?: string;
  midColor?: string;
  endColor?: string;
}

const rotateAnimation = keyframes`
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }

  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
`;

const Container = styled.div<GradientSpinner2Props>`
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 50%;
  height: ${(props) => props.size || '96px'};
  width: ${(props) => props.size || '96px'};
  animation: ${rotateAnimation} 1.2s linear infinite;
  background-color: ${(props) => props.startColor || '#9b59b6'};
  background-image: linear-gradient(
    ${(props) => props.startColor || '#9b59b6'},
    ${(props) => props.midColor || '#84cdfa'},
    ${(props) => props.endColor || '#5ad1cd'}
  );
`;

const Span = styled.span<GradientSpinner2Props>`
  position: absolute;
  border-radius: 50%;
  height: 100%;
  width: 100%;
  background-color: ${(props) => props.startColor || '#9b59b6'};
  background-image: linear-gradient(
    ${(props) => props.startColor || '#9b59b6'},
    ${(props) => props.midColor || '#84cdfa'},
    ${(props) => props.endColor || '#5ad1cd'}
  );

  &:nth-of-type(1) {
    filter: blur(5px);
  }

  &:nth-of-type(2) {
    filter: blur(10px);
  }

  &:nth-of-type(3) {
    filter: blur(25px);
  }

  &:nth-of-type(4) {
    filter: blur(50px);
  }
`;

const GradientSpinner2: React.FC<GradientSpinner2Props> = ({ size, startColor, midColor, endColor }) => {
  return (
    <Container size={size} startColor={startColor} midColor={midColor} endColor={endColor}>
      <Span startColor={startColor} midColor={midColor} endColor={endColor}></Span>
      <Span startColor={startColor} midColor={midColor} endColor={endColor}></Span>
      <Span startColor={startColor} midColor={midColor} endColor={endColor}></Span>
      <Span startColor={startColor} midColor={midColor} endColor={endColor}></Span>
    </Container>
  );
};

export default GradientSpinner2;