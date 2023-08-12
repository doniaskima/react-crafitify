import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface AirbnbButtonProps {
  children: ReactNode;
  disabled?: boolean;
  backgroundColor?: string;
  borderColor?: string;
  hoverBackgroundColor?: string;
  hoverBorderColor?: string;
  textColor?: string;
  fontSize?: number;
  width?: number;
  height?: number;
  borderRadius?: number;
  borderWidth?: number;
  className?: string;
}

const calculateFontSize = (width?: number, height?: number) => {
  const baseSize = 16; // Default font size
  const buttonSize = width || height || baseSize; // Use width or height if available, otherwise default
  return Math.max(buttonSize / 8, baseSize); // Ensure font size is proportional but not too small
};

const StyledAirbnbButton = styled.button<AirbnbButtonProps>`
  background-color: ${(props) => props.backgroundColor || '#FFFFFF'};
  border: ${(props) => props.borderWidth || 1}px solid ${(props) => props.borderColor || '#222222'};
  border-radius: ${(props) => props.borderRadius || 8}px;
  box-sizing: border-box;
  color: ${(props) => props.textColor || '#222222'};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  display: inline-block;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
  font-size: ${(props) => props.fontSize || calculateFontSize(props.width, props.height)}px;
  font-weight: 600;
  line-height: 20px;
  margin: 0;
  outline: none;
  padding: 13px 23px;
  position: relative;
  text-align: center;
  text-decoration: none;
  touch-action: manipulation;
  transition: box-shadow 0.2s, -ms-transform 0.1s, -webkit-transform 0.1s, transform 0.1s;
  user-select: none;
  -webkit-user-select: none;
  width: ${(props) => (props.width ? `${props.width}px` : 'auto')};
  height: ${(props) => (props.height ? `${props.height}px` : 'auto')};
  
  &:focus-visible {
    box-shadow: #222222 0 0 0 2px, rgba(255, 255, 255, 0.8) 0 0 0 4px;
    transition: box-shadow 0.2s;
  }

  &:hover {
    background-color: ${(props) => props.hoverBackgroundColor || '#F7F7F7'};
    border-color: ${(props) => props.hoverBorderColor || '#000000'};
  }

  &:active {
    background-color: #F7F7F7;
    border-color: #000000;
    transform: scale(0.96);
  }

  &:disabled {
    border-color: #DDDDDD;
    color: #DDDDDD;
    cursor: not-allowed;
    opacity: 1;
  }
`;

const AirbnbButton: React.FC<AirbnbButtonProps> = ({ children, className , disabled, ...props }) => {
  return (
    <StyledAirbnbButton disabled={disabled} className={className} {...props}>
      {children}
    </StyledAirbnbButton>
  );
};

export default AirbnbButton;

 
