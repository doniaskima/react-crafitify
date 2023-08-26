import React from 'react';
import styled, { keyframes } from 'styled-components';

const whirlpool = keyframes`
  0% {
    transform: translateY(10px);
    animation-timing-function: cubic-bezier(0.455, 0.030, 0.515, 0.955);
  }
  50% {
    transform: translateY(60px);
    animation-timing-function: cubic-bezier(0.455, 0.030, 0.515, 0.955);
  }
  100% {
    transform: translateY(10px);
    animation-timing-function: cubic-bezier(0.455, 0.030, 0.515, 0.955);
  }
`;

const WhirlpoolContainer = styled.div`
  width: 100px;
  height: 100px;
  margin: 100px auto;
  position: relative;
`;

const Ring = styled.div`
  &:before {
    content: '';
    border-radius: 50%;
    border: 1px solid #555;
    height: 30px;
    width: 100px;
    position: absolute;
  }
`;

const Ring1 = styled(Ring)`
  &:before {
    left: 40px;
    width: 20px;
    top: 12px;
    height: 6px;
    animation: 2.5s ease 0s infinite ${whirlpool};
  }
`;

const Ring2 = styled(Ring)`
  &:before {
    left: 35px;
    width: 30px;
    top: 10.5px;
    height: 9px;
    animation: 2.5s ease 0.1s infinite ${whirlpool};
  }
`;

const Ring3 = styled(Ring)`
  &:before {
    left: 30px;
    width: 40px;
    top: 9px;
    height: 12px;
    animation: 2.5s ease 0.2s infinite ${whirlpool};
  }
`;

const Ring4 = styled(Ring)`
  &:before {
    left: 25px;
    width: 50px;
    top: 7.5px;
    height: 15px;
    animation: 2.5s ease 0.3s infinite ${whirlpool};
  }
`;

const Ring5 = styled(Ring)`
  &:before {
    left: 20px;
    width: 60px;
    top: 6px;
    height: 18px;
    animation: 2.5s ease 0.4s infinite ${whirlpool};
  }
`;

const Ring6 = styled(Ring)`
  &:before {
    left: 15px;
    width: 70px;
    top: 4.5px;
    height: 21px;
    animation: 2.5s ease 0.5s infinite ${whirlpool};
  }
`;

const Ring7 = styled(Ring)`
  &:before {
    left: 10px;
    width: 80px;
    top: 3px;
    height: 24px;
    animation: 2.5s ease 0.6s infinite ${whirlpool};
  }
`;

const Ring8 = styled(Ring)`
  &:before {
    left: 5px;
    width: 90px;
    top: 1.5px;
    height: 27px;
    animation: 2.5s ease 0.7s infinite ${whirlpool};
  }
`;

const Ring9 = styled(Ring)`
  &:before {
    width: 100px;
    height: 30px;
    animation: 2.5s ease 0.8s infinite ${whirlpool};
  }
`;

const Jellyfish: React.FC = () => {
  return (
    <WhirlpoolContainer>
      <Ring1 />
      <Ring2 />
      <Ring3 />
      <Ring4 />
      <Ring5 />
      <Ring6 />
      <Ring7 />
      <Ring8 />
      <Ring9 />
    </WhirlpoolContainer>
  );
};

export default Jellyfish;
