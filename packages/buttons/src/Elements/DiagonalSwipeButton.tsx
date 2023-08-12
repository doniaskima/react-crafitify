import React, { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';

// Define an interface for the button element props
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  textColor?: string;
  borderColor?: string;
  borderRadius?: string;
  hoverColor?: string;
  width?: string; 
  fontSize?: string;
  height?: string; 
  
}

// Use the defined interface in the styled component
const StyledButton = styled.button<ButtonProps>`
  color: ${(props) => props.textColor || 'purple'};
  text-transform: uppercase;
  text-decoration: none;
  border: 2px solid ${(props) => props.borderColor || 'purple'};
  padding: 10px 20px;
  font-size: ${(props) => props.fontSize || '17px'};
  font-weight: bold;
  background: transparent;
  position: relative;
  transition: all 1s;
  overflow: hidden;
  border-radius: ${(props) => props.borderRadius || '0'};
  cursor: pointer;
  width: ${(props) => props.width || 'auto'}; 
  height: ${(props) => props.height || 'auto'};  
  &:hover {
    color: white;
  }

  &::before {
    content: '';
    position: absolute;
    height: 100%;
    width: 0%;
    top: 0;
    left: -40px;
    transform: skewX(45deg);
    background-color: ${(props) => props.hoverColor || 'purple'};
    z-index: -1;
    transition: all 1s;
  }

  &:hover::before {
    width: 160%;
  }
};`

const DiagonalSwipeButton: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return <StyledButton {...rest}>{children}</StyledButton>;
};

export default DiagonalSwipeButton;
