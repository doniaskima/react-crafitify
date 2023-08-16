import React, { CSSProperties } from 'react';
import { defaultProps, SpinnerProps } from '../helpers';
import { SpinnersProps, withSharedProps } from '../withSharedProps';
import styled, { keyframes } from 'styled-components';

const coords = [
  { x: 22, y: -20 },
  { x: 29, y: 0 },
  { x: 22, y: 20 },
  { x: 0, y: 30 },
  { x: -23, y: 20 },
  { x: -30, y: 0 },
  { x: -23, y: -20 },
  { x: 0, y: -30 },
];

export type SpinnerDottedProps = SpinnersProps & SpinnerProps;

const spinAnimationCenter = keyframes`
  0%, 15%, 85%, 100% {
    transform: scale(0);
  }
  40%, 50% {
    transform: scale(1);
  }
  84% {
    transform: scale(0.45);
  }
`;

const spinAnimationShrink = keyframes`
  50% {
    transform: translate(0, 0);
  }
`;

const generateCircleStyle = (i: number, duration: number): CSSProperties => ({
  animation: `spinners-react-dotted-shrink ${duration}s cubic-bezier(0, 0.9, 0, 0.9) ${(duration / 20) * i}s infinite`,
});

const centerStyle: CSSProperties = {
  animation: `spinners-react-dotted-center ${duration}s ease-out infinite`,
  transformOrigin: 'center',
};

const StyledSvg = styled.svg`
  fill: none;
`;

const StyledCircle = styled.circle<SpinnerDottedProps>`
  fill: currentColor;
  transform: translate(${props => props.x}px, ${props => props.y}px);
`;

const StyledCenterCircle = styled(StyledCircle)<SpinnerDottedProps>`
  transform: translate(${props => props.x}px, ${props => props.y}px);
  animation: ${spinAnimationCenter} ${props => props.duration}s ease-out infinite;
  transform-origin: center;
  display: ${props => (props.still ? 'none' : 'initial')};
`;

const StyledAnimatedCircle = styled(StyledCircle)<SpinnerDottedProps>`
  transform: translate(${props => props.x}px, ${props => props.y}px);
  animation: ${props =>
    !props.still ? css`spinners-react-dotted-shrink ${props.duration}s cubic-bezier(0, 0.9, 0, 0.9) ${(props.duration / 20) * props.index}s infinite` : 'none'};
`;

const Component: React.FC<SpinnerDottedProps> = ({
  speed,
  still,
  thickness,
  ...svgProps
}: SpinnerDottedProps) => {
  const duration = 200 / speed;

  return (
    <StyledSvg fill="none" viewBox="0 0 66 66" {...svgProps}>
      {coords.map((c, i) => (
        <StyledAnimatedCircle
          key={`${c.x}-${c.y}`}
          cx="33"
          cy="33"
          r={3 * (thickness / 100)}
          x={c.x}
          y={c.y}
          duration={duration}
          index={i}
          still={still}
        />
      ))}
      <StyledCenterCircle
        cx="33"
        cy="33"
        r={6 * (thickness / 100)}
        x={0}
        y={0}
        duration={duration}
        still={still}
      />
    </StyledSvg>
  );
};

Component.defaultProps = defaultProps;

export const SpinnerDotted = withSharedProps(Component);
