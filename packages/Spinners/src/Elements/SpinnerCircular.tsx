import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import {
  secondaryColorDefaultProps,
  SecondaryColorSpinnerProps,
} from '../helpers';
import { SpinnersProps, withSharedProps } from '../withSharedProps';

export type SpinnerCircularProps = SpinnersProps & SecondaryColorSpinnerProps;

const spinAnimation = keyframes`
  0% {
    stroke-dashoffset: 306;
  }
  50% {
    stroke-dasharray: 40, 134;
  }
  100% {
    stroke-dasharray: 1, 174;
    stroke-dashoffset: 132;
  }
`;

const StyledSvg = styled.svg`
  display: block;
`;

const StyledCircle = styled.circle<SpinnerCircularProps>`
  fill: none;
  stroke: ${props => props.secondaryColor};
  stroke-width: ${props => 4 * (props.thickness / 100)};
`;

const StyledAnimatedCircle = styled(StyledCircle)<SpinnerCircularProps>`
  stroke: currentColor;
  stroke-dasharray: 1, 174;
  stroke-dashoffset: 306;
  stroke-linecap: round;
  animation: ${props =>
    !props.still
      ? css`
          ${spinAnimation} ${140 / props.speed}s linear infinite
        `
      : 'none'};
`;

const Component: React.FC<SpinnerCircularProps> = ({
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

export const SpinnerCircular = withSharedProps(Component);
