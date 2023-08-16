import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import {
  secondaryColorDefaultProps,
  SecondaryColorSpinnerProps,
} from '../helpers';
import { SpinnersProps, withSharedProps } from '../withSharedProps';

export type SpinnerCircularFixedProps = SpinnersProps & SecondaryColorSpinnerProps;

const spinAnimation = keyframes`
  0% {
    stroke-dashoffset: 325;
  }
  100% {
    stroke-dashoffset: 151;
  }
`;

const StyledSvg = styled.svg`
  display: block;
`;

const StyledCircle = styled.circle<SpinnerCircularFixedProps>`
  fill: none;
  stroke: ${props => props.secondaryColor};
  stroke-width: ${props => 4 * (props.thickness / 100)};
`;

const StyledAnimatedCircle = styled(StyledCircle)<SpinnerCircularFixedProps>`
  stroke: currentColor;
  stroke-dasharray: 40, 134;
  stroke-dashoffset: 325;
  stroke-linecap: round;
  animation: ${spinAnimation} ${props =>
    140 / props.speed}s linear infinite;
`;

const Component: React.FC<SpinnerCircularFixedProps> = ({
  secondaryColor,
  speed,
  still,
  thickness,
  ...svgProps
}) => {
  return (
    <StyledSvg fill="none" {...svgProps} viewBox="0 0 66 66">
      <StyledCircle
        cx="33"
        cy="33"
        r="28"
        secondaryColor={secondaryColor}
        thickness={thickness}
      />
      <StyledAnimatedCircle
        cx="33"
        cy="33"
        r="28"
        thickness={thickness}
        speed={speed}
        still={still}
      />
    </StyledSvg>
  );
};

Component.defaultProps = secondaryColorDefaultProps;

export const SpinnerCircularFixed = withSharedProps(Component);
