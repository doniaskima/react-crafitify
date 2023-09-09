import React from 'react';
import styled, { keyframes } from 'styled-components';

const settingLoaderAnimation = keyframes`
  100% {
    transform: rotate(1turn);
  }
`;

const SettingLoaderContainer = styled.div<{ size?: string; color?: string }>`
  width: ${(props) => props.size || '50px'};
  aspect-ratio: 1;
  display: grid;
  color: ${(props) => props.color || '#854f1d'};
  background: radial-gradient(farthest-side, currentColor calc(100% - 6px), #0000 calc(100% - 5px) 0);
  -webkit-mask: radial-gradient(farthest-side, #0000 calc(100% - 13px), #000 calc(100% - 12px));
  border-radius: 50%;
  animation: ${settingLoaderAnimation} 2s infinite linear;
`;

const SettingLoaderBeforeAfter = styled.div`
  content: "";
  grid-area: 1/1;
  background:
    linear-gradient(currentColor 0 0) center,
    linear-gradient(currentColor 0 0) center;
  background-size: 100% 10px, 10px 100%;
  background-repeat: no-repeat;
`;

const SettingLoaderAfter = styled(SettingLoaderBeforeAfter)`
  transform: rotate(45deg);
`;

const SettingLoader: React.FC<{ size?: string; color?: string }> = ({ size, color }) => {
  return (
    <SettingLoaderContainer size={size} color={color}>
      <SettingLoaderBeforeAfter></SettingLoaderBeforeAfter>
      <SettingLoaderAfter></SettingLoaderAfter>
    </SettingLoaderContainer>
  );
};

export default SettingLoader;
