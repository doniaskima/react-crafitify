import React from 'react';
import styled from 'styled-components';

const StyledSVG = styled.svg`
  width: ${(props) => props.size || '3.25em'};
  transform-origin: center;
  animation: rotateAnimation 2s linear infinite;

  @keyframes rotateAnimation {
    100% {
      transform: rotate(360deg);
    }
  }
`;

const StyledCircle = styled.circle`
  fill: none;
  stroke: ${(props) => props.color || 'hsl(214, 97%, 59%)'};
  stroke-width: 2;
  stroke-dasharray: 1, 200;
  stroke-dashoffset: 0;
  stroke-linecap: round;
  animation: dashAnimation 1.5s ease-in-out infinite;

  @keyframes dashAnimation {
    0% {
      stroke-dasharray: 1, 200;
      stroke-dashoffset: 0;
    }

    50% {
      stroke-dasharray: 90, 200;
      stroke-dashoffset: -35px;
    }

    100% {
      stroke-dashoffset: -125px;
    }
  }
`;

interface AnimatedCircleProps {
  color?: string;
  size?: string;
  className?: string;
}

const AnimatedCircle: React.FC<AnimatedCircleProps> = ({ color, size, className }) => {
  return (
    <StyledSVG viewBox="25 25 50 50" size={size} className={className}>
      <StyledCircle r="20" cy="50" cx="50" color={color}></StyledCircle>
    </StyledSVG>
  );
};

export default AnimatedCircle;
