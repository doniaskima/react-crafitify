import React, { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  bgColor?: string;
  textColor?: string;
  hoverColor?: string;
  shadowColor?: string;
  activeColor?: string;
  width?: string;
  height?: string;
  fontSize?: string;
  className?: string;
}

const StyledButton = styled.button<ButtonProps>`
  width: ${(props) => props.width || '130px'};
  height: ${(props) => props.height || '40px'};
  font-size: ${(props) => props.fontSize || '1.1em'};
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
};`

const AnimatedButton: React.FC<ButtonProps> = ({className, children, ...rest }) => {
  return <StyledButton className={className} {...rest}>{children}</StyledButton>;
};

export default AnimatedButton;
