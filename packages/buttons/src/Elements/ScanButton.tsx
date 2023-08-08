import React, { ReactNode } from 'react';
import styled, { keyframes } from 'styled-components';

const MoveBackground = keyframes`
  0% {
    background-position-x: 0;
  }
  100% {
    background-position-x: -165px;
  }
`;

const Scaning = keyframes`
  0% {
    width: 0%;
  }
  30% {
    width: 10%;
  }
  70% {
    width: 40%;
  }
  100% {
    width: 100%;
  }
`;

const StyledScanButton = styled.button`
  background: none;
  font-size: 20px;
  font-weight: 700;
  color: black;
  text-transform: uppercase;
  padding: 10px 30px;
  position: relative;
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  transition-duration: 300ms;
  border: none;
  max-width: 1370px;
  width: fit-content;

  &:hover {
    color: white;
    border: 4px black solid;
    max-width: 170px;
    padding: 5px 30px;

    .progress {
      display: block;
      user-select: none;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      pointer-events: none;
      transition-duration: 600ms;
      overflow: hidden;
      animation: ${Scaning} 3s linear;
    }
  }

  &:active {
    background: none;
    color: white;
    border: 4px #1F8A70 solid;
    background-color: #1F8A70;
    max-width: 170px;
  }

  .progress {
    display: none;
  }

  .progress .progress-bar {
    width: 165px;
    height: 100%;
    background-image: repeating-linear-gradient(
      -25deg,
      transparent,
      transparent 31px,
      #000000 19px,
      #000000ee 70px
    );
    animation: ${MoveBackground} 2s linear infinite reverse;
  }

  &:before {
    /* content: "<d"; */
    background-color: white;
    height: 100%;
    width: 100%;
  }

  &:hover .before-scan,
  .complete,
  .scaning {
    display: none;
  }

  &:hover .scaning {
    display: block;
    mix-blend-mode: difference;
    padding: 0px 0px;
  }

  &:active .scaning {
    display: none;
  }

  &:active .complete {
    display: block;
  }
`;

const ScanButton: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <StyledScanButton>
      <div className="progress">
        <div className="progress-bar"></div>
      </div>
      <p className="before-scan">Find aliens</p>
      <p className="scaning">Scanning</p>
      <p className="complete">No aliens found</p>
      {children}
    </StyledScanButton>
  );
};

export default ScanButton;
