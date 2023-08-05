import React, { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';

// Define an interface for the button element props
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  bgColor?: string;
  textColor?: string;
  hoverColor?: string;
  shadowColor?: string;
  activeColor?: string;
}

// Use the defined interface in the styled component
const StyledButton = styled.button<ButtonProps>`
  width: 130px;
  height: 40px;
  font-size: 1.1em;
  cursor: pointer;
  background-color: ${(props) => props.bgColor || '#171717'};
  color: ${(props) => props.textColor || '#fff'};
  border: none;
  border-radius: 5px;
  transition: all 0.4s;

  &:hover {
    border-radius: 5px;
    transform: translateY(-10px);
    box-shadow: ${(props) =>
      `0 7px 0 -2px ${props.hoverColor || '#f85959'},
       0 15px 0 -4px ${props.shadowColor || '#39a2db'},
       0 16px 10px -3px ${props.shadowColor || '#39a2db'}`};
  }

  &:active {
    transition: all 0.2s;
    transform: translateY(-5px);
    box-shadow: ${(props) =>
      `0 2px 0 -2px ${props.activeColor || '#f85959'},
       0 8px 0 -4px ${props.shadowColor || '#39a2db'},
       0 12px 10px -3px ${props.shadowColor || '#39a2db'}`};
  }
`;

const AnimatedButton: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return <StyledButton {...rest}>{children}</StyledButton>;
};

export default AnimatedButton;
