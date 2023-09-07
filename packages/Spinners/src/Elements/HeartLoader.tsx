import React from 'react';
import styled, { keyframes } from 'styled-components';

export interface HeartLoaderProps {
  className?: string;
}

const heartbeat = keyframes`
  0% { transform: scale(.85); }
  5% { transform: scale(1); }
  39% { transform: scale(.75); }
  45% { transform: scale(.9); }
  60% { transform: scale(.85); }
  100% { transform: scale(.8); }
`;

const LoaderContainer = styled.div<HeartLoaderProps>`
  width: 200px;
  height: 200px;
  display: inline-block;
  overflow: hidden;
  background: #ffffff;
`;

const HeartWrapper = styled.div<HeartLoaderProps>`
  width: 100%;
  height: 100%;
  position: relative;
  transform: translateZ(0) scale(1);
  backface-visibility: hidden;
  transform-origin: 0 0;
`;

const HeartShape = styled.div<HeartLoaderProps>`
  animation: ${heartbeat} 1s infinite cubic-bezier(0.215, 0.61, 0.355, 1);
  transform-origin: 100px 100px;
`;

const HeartBeforeAfter = styled.div<HeartLoaderProps>`
  top: 72px;
  left: 60px;
  position: absolute;
  width: 80px;
  height: 80px;
  background: #e90c59;
  transform: rotate(45deg);
  &:before,
  &:after {
    content: ' ';
    position: absolute;
    display: block;
    width: 80px;
    height: 80px;
    background: #e90c59;
  }
  &:before {
    left: -52px;
    border-radius: 50% 0 0 50%;
  }
  &:after {
    top: -52px;
    border-radius: 50% 50% 0 0;
  }
`;

const HeartLoader: React.FC<HeartLoaderProps> = ({ className }) => {
  return (
    <LoaderContainer className={className}>
      <HeartWrapper>
        <HeartShape>
          <HeartBeforeAfter />
        </HeartShape>
      </HeartWrapper>
    </LoaderContainer>
  );
};

export default HeartLoader;
