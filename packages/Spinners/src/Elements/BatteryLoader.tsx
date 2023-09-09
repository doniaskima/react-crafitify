import React from 'react';
import styled, { keyframes } from 'styled-components';

const batteryLoaderAnimation = keyframes`
  100% {
    background-size: 120%;
  }
`;

const BatteryLoaderContainer = styled.div<{ size?: string; color?: string }>`
  width: ${(props) => props.size || '80px'};
  height: ${(props) => props.size ? parseInt(props.size) / 2 + 'px' : '40px'};
  color: ${(props) => props.color || '#000'};
  border: 2px solid currentColor;
  border-right-color: transparent;
  padding: 3px;
  background: repeating-linear-gradient(
    90deg,
    currentColor 0 10px,
    #0000 0 15px
  ) 0/0% no-repeat content-box content-box;
  position: relative;
  animation: ${batteryLoaderAnimation} 2s infinite steps(6);
`;

const BatteryLoaderBefore = styled.div`
  content: "";
  position: absolute;
  top: -2px;
  bottom: -2px;
  left: 100%;
  width: 10px;
  background: linear-gradient(
      #0000 calc(50% - 7px),
      currentColor 0 calc(50% - 5px),
      #0000 0 calc(50% + 5px),
      currentColor 0 calc(50% + 7px),
      #0000 0
    )
    left / 100% 100%,
    linear-gradient(
      currentColor calc(50% - 5px),
      #0000 0 calc(50% + 5px),
      currentColor 0
    )
    left / 2px 100%,
    linear-gradient(
      #0000 calc(50% - 5px),
      currentColor 0 calc(50% + 5px),
      #0000 0
    )
    right / 2px 100%;
  background-repeat: no-repeat;
`;

const BatteryLoader: React.FC<{ size?: string; color?: string }> = ({ size, color }) => {
  return (
    <BatteryLoaderContainer size={size} color={color}>
      <BatteryLoaderBefore></BatteryLoaderBefore>
    </BatteryLoaderContainer>
  );
};

export default BatteryLoader;
