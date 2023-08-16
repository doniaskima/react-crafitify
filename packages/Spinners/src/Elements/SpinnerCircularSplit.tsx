import React, { CSSProperties } from 'react';
import styled, { keyframes, css } from 'styled-components';
import {
  secondaryColorDefaultProps,
  SecondaryColorSpinnerProps,
} from '../helpers';
import { SpinnersProps, withSharedProps } from '../withSharedProps';

export type SpinnerCircularSplitProps = SpinnersProps & SecondaryColorSpinnerProps;

const spinAnimation = keyframes`
  0% {
    stroke-dashoffset: 1;
    stroke-dasharray: 5, 170;
  }
  10% {
    stroke-dashoffset: 13;
    stroke-dasharray: 30, 145;
  }
  13% {
    stroke-dashoffset: -11;
    stroke-dasharray: 5, 145;
  }
  50% {
    stroke-dasharray: 5, 0, 5, 165;
    stroke-dashoffset: -82;
  }
  51% {
    stroke-dasharray: 2, 0, 2, 139;
    stroke-dashoffset: -85;
  }
  61% {
    stroke-dasharray: 15, 0, 15, 165;
    stroke-dashoffset: -72;
  }
  64% {
    stroke-dasharray: 5, 20, 5, 145;
    stroke-dashoffset: -72;
  }
`;

const StyledSvg = styled.svg`
  display: block;
`;

const StyledCircle = styled.circle<SpinnerCircularSplitProps>`
  fill: none;
  stroke: ${props => props.secondaryColor};
  stroke-width: ${props => 4 * (props.thickness / 100)};
`;

const StyledAnimatedCircle = styled(StyledCircle)<SpinnerCircularSplitProps>`
  stroke: currentColor;
  stroke-dasharray: 5, 170;
  stroke-dashoffset: 1;
  stroke-linecap: round;
  transform: rotate(-90deg);
  animation: ${props =>
    !props.still
      ? css`
          ${spinAnimation} ${140 / props.speed}s linear infinite
        `
      : 'none'};
`;

const Component: React.FC<SpinnerCircularSplitProps> = ({
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

export const SpinnerCircularSplit = withSharedProps(Component);
