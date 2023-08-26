import React from 'react';
import styled, { keyframes } from 'styled-components';

const holderAnimation = keyframes`
  0% {
    transform: translate(-50%, -50%);
  }
  100% {
    transform: translate(-50%, -50%);
  }
`;

const barAnimation = keyframes`
  0% {
    box-shadow: 0px 0px 0 #40ff22,
      0px 0px 4px #30ff1f,
      0px 0px 8px #20ff1b,
      0px 0px 16px #10ff18;
  }
  100% {
    box-shadow: 0px 0px 0px #40ff22,
      0px 0px 4px #30ff1f,
      0px 0px 8px #20ff1b,
      0px 0px 16px #10ff18;
  }
`;

const Holder = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  animation: ${holderAnimation} 2s linear infinite;
  transform: translate(-50%, -50%);
`;

const Bar = styled.div`
  background: #d0f0dd;
  border-radius: 4px;
  position: absolute;
  animation: ${barAnimation} 2s linear infinite;
`;

const LeftBar = styled(Bar)`
  width: 4px;
  height: 100px;
  top: 0;
  left: 0;
`;

const TopBar = styled(Bar)`
  height: 4px;
  width: 100px;
  top: 0;
  left: 0;
`;

const RightBar = styled(Bar)`
  width: 4px;
  height: 100px;
  top: 0;
  left: 96px;
`;

const BottomBar = styled(Bar)`
  height: 4px;
  width: 100px;
  top: 96px;
  left: 0;
`;

const GlowingSpinner: React.FC = () => {
  return (
    <Holder>
      <LeftBar />
      <TopBar />
      <RightBar />
      <BottomBar />
    </Holder>
  );
};

export default GlowingSpinner;
