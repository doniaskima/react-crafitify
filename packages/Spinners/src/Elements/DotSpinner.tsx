import React from 'react';
import styled, { keyframes } from 'styled-components';

const pulse0112 = keyframes`
  0%, 100% {
    transform: scale(0);
    opacity: 0.5;
  }
  50% {
    transform: scale(1);
    opacity: 1;
  }
`;

const DotSpinnerContainer = styled.div<{ color?: string }>`
  --uib-size: 2.8rem;
  --uib-speed: 0.9s;
  --uib-color: ${(props) => props.color || '#183153'};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: var(--uib-size);
  width: var(--uib-size);
`;

const Dot = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  width: 100%;

  &::before {
    content: '';
    height: 20%;
    width: 20%;
    border-radius: 50%;
    background-color: var(--uib-color);
    transform: scale(0);
    opacity: 0.5;
    animation: ${pulse0112} calc(var(--uib-speed) * 1.111) ease-in-out infinite;
    box-shadow: 0 0 20px rgba(18, 31, 53, 0.3);
  }
};`

interface DotSpinnerProps {
  className?: string;
  color?: string;
}

const DotSpinner: React.FC<DotSpinnerProps> = ({ className, color }) => {
  return (
    <DotSpinnerContainer className={className} color={color}>
      <Dot></Dot>
      <Dot style={{ transform: 'rotate(45deg)' }}></Dot>
      <Dot style={{ transform: 'rotate(90deg)' }}></Dot>
      <Dot style={{ transform: 'rotate(135deg)' }}></Dot>
      <Dot style={{ transform: 'rotate(180deg)' }}></Dot>
      <Dot style={{ transform: 'rotate(225deg)' }}></Dot>
      <Dot style={{ transform: 'rotate(270deg)' }}></Dot>
      <Dot style={{ transform: 'rotate(315deg)' }}></Dot>
    </DotSpinnerContainer>
  );
};

export default DotSpinner;
