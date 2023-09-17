import React from 'react';
import styled, { keyframes } from 'styled-components';

const ballMoveAnimation = keyframes`
  from {
    left: calc(100% - 40px);
    transform: rotate(360deg);
  }

  to {
    left: calc(0% - 20px);
    transform: rotate(0deg);
  }
`;

const upDownAnimation = keyframes`
  from {
    transform: rotate(-15deg);
  }

  to {
    transform: rotate(15deg);
  }
`;

const BallContainer = styled.div`
  width: 200px;
  height: 12.5px;
  background: #FFDAAF;
  border-radius: 30px;
  transform: rotate(-15deg);
  animation: ${upDownAnimation} 3s ease-in-out 1s infinite alternate;
`;

const Ball = styled.div`
  position: relative;
  bottom: 50px;
  left: calc(100% - 20px);
  width: 50px;
  height: 50px;
  background: #fff;
  border-radius: 50%;
  animation: ${ballMoveAnimation} 3s ease-in-out 1s infinite alternate;

  &::after {
    position: absolute;
    content: '';
    top: 25px;
    right: 5px;
    width: 5px;
    height: 5px;
    background: #000;
    border-radius: 50%;
  }
`;

const BallComponent = () => {
  return (
    <BallContainer>
      <Ball />
    </BallContainer>
  );
};

export default BallComponent;
