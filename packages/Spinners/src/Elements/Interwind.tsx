import React from 'react';
import styled, { keyframes } from 'styled-components';

export interface InterwindLoaderProps {
  className?: string;
}

const rotate = keyframes`
  0%, 100% {
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 0.8);
  }
  50% {
    animation-timing-function: cubic-bezier(0.2, 0.2, 0.8, 1);
  }
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const scale = keyframes`
  0%, 100% {
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 0.8);
  }
  50% {
    animation-timing-function: cubic-bezier(0.2, 0.2, 0.8, 1);
  }
  0% {
    transform: translate(-30px, -30px) scale(0);
  }
  50% {
    transform: translate(-30px, -30px) scale(1);
  }
  100% {
    transform: translate(-30px, -30px) scale(0);
  }
`;

const LoaderContainer = styled.div<InterwindLoaderProps>`
  width: 200px;
  height: 200px;
  display: inline-block;
  overflow: hidden;
  background: #ffffff;
`;

const InterwindWrapper = styled.div<InterwindLoaderProps>`
  width: 100%;
  height: 100%;
  position: relative;
  transform: translateZ(0) scale(1);
  backface-visibility: hidden;
  transform-origin: 0 0;
`;

const InnerDiv = styled.div<InterwindLoaderProps>`
  transform: translate(0px, -15px);
`;

const Spinner = styled.div<InterwindLoaderProps>`
  animation: ${rotate} 1s linear infinite;
  transform-origin: 100px 100px;
`;

const Circle = styled.div<InterwindLoaderProps>`
  position: absolute;
  transform: translate(100px, 82px);
`;

const SmallCircle = styled.div<InterwindLoaderProps>`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #fe718d;
  animation: ${scale} 1s linear infinite;
`;

const InterwindLoader: React.FC<InterwindLoaderProps> = ({ className }) => {
  return (
    <LoaderContainer className={className}>
      <InterwindWrapper>
        <InnerDiv>
          <Spinner>
            <Circle>
              <SmallCircle />
            </Circle>
            <Circle>
              <SmallCircle style={{ background: '#46dff0' }} />
            </Circle>
          </Spinner>
        </InnerDiv>
      </InterwindWrapper>
    </LoaderContainer>
  );
};

export default InterwindLoader;
