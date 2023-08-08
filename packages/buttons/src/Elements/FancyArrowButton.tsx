import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import styled from 'styled-components';

interface FancyArrowButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'small' | 'medium' | 'large';
  mainBgColor?: string;
  arrowColor?: string;
}

const StyledButton = styled.button<FancyArrowButtonProps>`
  display: inline-block;
  border-radius: 4px;
  background-color: ${(props) => props.mainBgColor || '#560af0'};
  border: none;
  color: #FFFFFF;
  text-align: center;
  font-size: ${(props) => (props.size === 'large' ? '18px' : props.size === 'small' ? '12px' : '14px')};
  font-weight: bold;
  padding: ${(props) => (props.size === 'large' ? '20px' : props.size === 'small' ? '10px' : '16px')};
  width: ${(props) => (props.size === 'large' ? '180px' : props.size === 'small' ? '100px' : '130px')};
  transition: all 0.2s;
  cursor: pointer;
  margin: 5px;

  span {
    cursor: pointer;
    display: inline-block;
    position: relative;
    transition: 0.2s;
  }

  span:after {
    content: '»';
    position: absolute;
    opacity: 0;
    top: 0;
    right: -15px;
    transition: 0.2s;
    color: ${(props) => props.arrowColor || '#FFFFFF'};
  }

  &:hover span {
    padding-right: 15px;
  }

  &:hover span:after {
    opacity: 1;
    right: 0;
  }

  &:hover {
    color: ${(props) => props.mainBgColor || '#560af0'};
    background-color: #FFFFFF;
    box-shadow: 4px 5px 17px -4px ${(props) => props.mainBgColor || '#560af0'};
  }
}`;

const FancyArrowButton: React.FC<FancyArrowButtonProps> = (props) => {
  return (
    <StyledButton {...props}>
      <span>{props.children}</span>
    </StyledButton>
  );
};

export default FancyArrowButton;



