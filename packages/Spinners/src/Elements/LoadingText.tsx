import React from 'react';
import styled, { keyframes } from 'styled-components';

const GlitchAnimation = keyframes`
  0% {
    transform: translate(0);
  }

  20% {
    transform: translate(-3px, 3px);
  }

  40% {
    transform: translate(-3px, -3px);
  }

  60% {
    transform: translate(3px, 3px);
  }

  80% {
    transform: translate(3px, -3px);
  }

  to {
    transform: translate(0);
  }
`;

const ShiftAnimation = keyframes`
  0%, 40%, 44%, 58%, 61%, 65%, 69%, 73%, 100% {
    transform: skewX(0deg);
  }

  41% {
    transform: skewX(10deg);
  }

  42% {
    transform: skewX(-10deg);
  }

  59% {
    transform: skewX(40deg) skewY(10deg);
  }

  60% {
    transform: skewX(-40deg) skewY(-10deg);
  }

  63% {
    transform: skewX(10deg) skewY(-5deg);
  }

  70% {
    transform: skewX(-50deg) skewY(-20deg);
  }

  71% {
    transform: skewX(10deg) skewY(-10deg);
  }
`;

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #000;
`;

const GlitchText = styled.div`
  position: relative;
  font-size: 25px;
  font-weight: 700;
  line-height: 1.2;
  color: #fff;
  letter-spacing: 5px;
  z-index: 1;
  animation: ${ShiftAnimation} 1s ease-in-out infinite alternate;
`;

const GlitchEffect = styled.div`
  display: block;
  content: attr(data-glitch);
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.8;
`;

const GlitchEffectBefore = styled(GlitchEffect)`
  animation: ${GlitchAnimation} 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite;
  color: #8b00ff;
  z-index: -1;
`;

const GlitchEffectAfter = styled(GlitchEffect)`
  animation: ${GlitchAnimation} 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) reverse both infinite;
  color: #00e571;
  z-index: -2;
`;

const LoadingText = () => {
  return (
    <LoaderWrapper>
      <GlitchText data-glitch="Loading...">
        <GlitchEffectBefore />
        <GlitchEffectAfter />
        Loading...
      </GlitchText>
    </LoaderWrapper>
  );
};

export default LoadingText;
