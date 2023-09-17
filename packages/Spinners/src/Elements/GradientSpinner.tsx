import React from 'react';
import styled, { keyframes } from 'styled-components';

const spinningAnimation = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const SpinnerContainer = styled.div`
  background-image: ${(props) => `linear-gradient(${props.startColor} 35%, ${props.endColor})`};
  width: ${(props) => props.size || '100px'};
  height: ${(props) => props.size || '100px'};
  animation: ${spinningAnimation} 1.7s linear infinite;
  text-align: center;
  border-radius: 50px;
  filter: blur(1px);
  box-shadow: 0px -5px 20px 0px ${(props) => props.startColor}, 0px 5px 20px 0px ${(props) => props.endColor};
`;

const InnerSpinner = styled.div`
  background-color: ${(props) => props.innerColor || 'rgb(36, 36, 36)'};
  width: 100%;
  height: 100%;
  border-radius: 50px;
  filter: blur(10px);
`;

const GradientSpinner = ({ startColor, endColor, innerColor, size }) => {
  return (
    <SpinnerContainer startColor={startColor} endColor={endColor} size={size}>
      <InnerSpinner innerColor={innerColor} />
    </SpinnerContainer>
  );
};

export default GradientSpinner;
