import React from 'react';
import styled, { keyframes } from 'styled-components';

const wobbleAnimation = keyframes`
  100% {
    transform: rotate(1deg);
  }
`;

const WobblingLoaderContainer = styled.div<{ size?: string }>`
  width: ${(props) => props.size || '20px'};
  aspect-ratio: 1;
  border-radius: 50%;
  position: relative;
  transform-origin: 50% -200%;
  background: radial-gradient(at 30% 30%, #0000, #000a) red;
  animation: ${wobbleAnimation} 1s cubic-bezier(0.5, -200, 0.5, 200) infinite;
`;

const GrayCircle = styled.div`
  content: "";
  position: absolute;
  inset: -200% 8px 100%;
  background: #ddd;
`;

const WobblingLoader: React.FC<{ size?: string }> = ({ size }) => {
  return (
    <WobblingLoaderContainer size={size}>
      <GrayCircle></GrayCircle>
    </WobblingLoaderContainer>
  );
};

export default WobblingLoader;
