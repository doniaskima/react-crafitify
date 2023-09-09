import React from 'react';
import styled, { keyframes } from 'styled-components';

const eyesAnimation = keyframes`
  0%, 70% {
    background-size: 100% 40%, 8px 8px;
  }
  85% {
    background-size: 100% 120%, 8px 8px;
  }
  100% {
    background-size: 100% 40%, 8px 8px;
  }
`;

const EyesLoaderContainer = styled.div`
  display: inline-flex;
  gap: 10px;
`;

const Eye = styled.div<{ size?: string }>`
  content: "";
  height: ${(props) => props.size || '20px'};
  aspect-ratio: 1;
  border-radius: 50%;
  background:
    linear-gradient(#222 0 0) top/100% 40% no-repeat,
    radial-gradient(farthest-side, #000 95%, #0000) 50%/8px 8px no-repeat #fff;
  animation: ${eyesAnimation} 1.5s infinite alternate ease-in;
`;

const EyesLoader: React.FC<{ size?: string }> = ({ size }) => {
  return (
    <EyesLoaderContainer>
      <Eye size={size}></Eye>
      <Eye size={size}></Eye>
    </EyesLoaderContainer>
  );
};

export default EyesLoader;
