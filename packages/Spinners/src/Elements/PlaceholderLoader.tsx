import React from 'react';
import styled, { keyframes } from 'styled-components';

interface PlaceholderLoaderProps {
  width: string;
  height: string;
}

const PlaceholderAnimation = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
`;

const LoaderWrapper = styled.div<PlaceholderLoaderProps>`
  position: relative;
  width: ${props => props.width} || 250px;
  height: ${props => props.height} || 130px;
  margin-bottom: 10px;
  border: 1px solid #d3d3d3;
  padding: 15px;
  background-color: #e3e3e3;
  overflow: hidden;

  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: linear-gradient(
      110deg,
      rgba(227, 227, 227, 0) 0%,
      rgba(227, 227, 227, 0) 40%,
      rgba(227, 227, 227, 0.5) 50%,
      rgba(227, 227, 227, 0) 60%,
      rgba(227, 227, 227, 0) 100%
    );
    animation: ${PlaceholderAnimation} 1.2s linear infinite;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const Circle = styled.div`
  background-color: #cacaca;
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Line = styled.div`
  background-color: #cacaca;
  position: absolute;
  height: 10px;
  width: 100%;
`;

const Line1 = styled(Line)`
  top: 11px;
  left: 58px;
  width: 100px;
`;

const Line2 = styled(Line)`
  top: 34px;
  left: 58px;
  width: 150px;
`;

const Line3 = styled(Line)`
  top: 57px;
`;

const Line4 = styled(Line)`
  top: 80px;
  width: 92%;
`;

const PlaceholderLoader: React.FC<PlaceholderLoaderProps> = ({ width, height }) => {
  return (
    <LoaderWrapper width={width} height={height}>
      <Wrapper>
        <Circle />
        <Line1 />
        <Line2 />
        <Line3 />
        <Line4 />
      </Wrapper>
    </LoaderWrapper>
  );
};

export default PlaceholderLoader;
