import React from 'react';
import styled from 'styled-components';

const BlobButtonContainer = styled.button`
  font-family: 'Open Sans', Helvetica, Arial, sans-serif;
  position: relative;
  padding: ${({ padding }) => padding || '20px 46px'};
  margin-bottom: 30px;
  text-align: center;
  text-transform: uppercase;
  font-size: ${({ fontSize }) => fontSize || '16px'};
  font-weight: bold;
  background-color: transparent;
  outline: none;
  border: none;
  transition: color 0.5s;
  cursor: pointer;
  border-radius: ${({ borderRadius }) => borderRadius || '30px'};
  color: ${({ textColor }) => textColor || '#0505a9'};

  &:before {
    content: '';
    z-index: 1;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border: ${({ borderSize }) => borderSize || '2px'} solid ${({ borderColor }) => borderColor || '#0505a9'};
    border-radius: ${({ borderRadius }) => borderRadius || '30px'};
  }

  &:after {
    content: '';
    z-index: -2;
    position: absolute;
    left: ${({ borderSize }) => borderSize || '2px'};
    top: ${({ borderSize }) => borderSize || '2px'};
    width: 100%;
    height: 100%;
    transition: all 0.3s 0.2s;
    border-radius: ${({ borderRadius }) => borderRadius || '30px'};
  }

  &:hover {
    color: ${({ hoverTextColor }) => hoverTextColor || '#ffffff'};
    border-radius: ${({ borderRadius }) => borderRadius || '30px'};

    &:after {
      transition: all 0.3s;
      left: 0;
      top: 0;
      border-radius: ${({ borderRadius }) => borderRadius || '30px'};
    }
  }
`;

const BlobButtonInner = styled.span`
  z-index: -1;
  overflow: hidden;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  border-radius: ${({ borderRadius }) => borderRadius || '30px'};
  background: ${({ innerBackgroundColor }) => innerBackgroundColor || '#ffffff'};
`;

const BlobsContainer = styled.span`
  position: relative;
  display: block;
  height: 100%;
`;

const Blob = styled.span`
  position: absolute;
  top: ${({ borderSize }) => borderSize || '2px'};
  width: ${({ blobWidth }) => blobWidth || '25%'};
  height: 100%;
  background: ${({ blobColor }) => blobColor || '#0505a9'};
  border-radius: 100%;
  transform: translate3d(0, 150%, 0) scale(1.7);
  transition: transform 0.45s;

  @supports (filter: url('#goo')) {
    transform: translate3d(0, 150%, 0) scale(1.4);
  }

  &:nth-child(1) {
    left: 0;
    transition-delay: 0s;
  }

  &:nth-child(2) {
    left: ${({ blobWidth }) => blobWidth || '25%'};
    transition-delay: 0.08s;
  }

  &:nth-child(3) {
    left: ${({ blobWidth }) => blobWidth || '25%'} * 2;
    transition-delay: 0.16s;
  }

  &:nth-child(4) {
    left: ${({ blobWidth }) => blobWidth || '25%'} * 3;
    transition-delay: 0.24s;
  }

  ${BlobButtonContainer}:hover & {
    transform: translateZ(0) scale(1.7);

    @supports (filter: url('#goo')) {
      transform: translateZ(0) scale(1.4);
    }
  }
`;

const BlobButton = ({
  children,
  padding,
  fontSize,
  textColor,
  hoverTextColor,
  borderColor,
  borderSize,
  borderRadius,
  innerBackgroundColor,
  blobColor,
  blobWidth,
  className
}) => {
  return (
    <BlobButtonContainer
      padding={padding}
      fontSize={fontSize}
      textColor={textColor}
      hoverTextColor={hoverTextColor}
      borderColor={borderColor}
      borderSize={borderSize}
      borderRadius={borderRadius}
      className={className}
    >
      {children}
      <BlobButtonInner borderRadius={borderRadius} innerBackgroundColor={innerBackgroundColor}>
        <BlobsContainer>
          <Blob
            borderSize={borderSize}
            blobColor={blobColor}
            blobWidth={blobWidth}
          />
          <Blob
            borderSize={borderSize}
            blobColor={blobColor}
            blobWidth={blobWidth}
          />
          <Blob
            borderSize={borderSize}
            blobColor={blobColor}
            blobWidth={blobWidth}
          />
          <Blob
            borderSize={borderSize}
            blobColor={blobColor}
            blobWidth={blobWidth}
          />
        </BlobsContainer>
      </BlobButtonInner>
    </BlobButtonContainer>
  );
};

export default BlobButton;
