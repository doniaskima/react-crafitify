import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface HoverEffectButtonProps {
  size?: 'small' | 'medium' | 'large';
  textColor?: string;
  backgroundColor?: string;
  hoverColor?: string;
  children:ReactNode,
}

const StyledButton = styled.button<HoverEffectButtonProps>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: ${props => {
    switch (props.size) {
      case 'small':
        return '10px 20px';
      case 'medium':
        return '15px 30px';
      case 'large':
      default:
        return '20px 40px';
    }
  }};
  text-transform: uppercase;
  text-decoration: none;
  color: ${props => props.textColor || '#fff'};
  background: ${props => props.backgroundColor || 'black'};
  border: none;
  letter-spacing: 2px;
  font-size: 17px;
  overflow: hidden;
  cursor: pointer;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${props => props.hoverColor || '#03a'};
    z-index: -1;
    transition: transform 0.5s;
    transform-origin: bottom right;
    transform: scale(0);
  }

  &:hover:before {
    transition: transform 0.5s;
    transform-origin: top left;
    transform: scale(1);
  }

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: transparent;
    border: 2px solid #fff;
    box-sizing: border-box;
    z-index: -1;
    transition: transform 0.5s;
    transform-origin: bottom right;
    transform: scale(1);
  }

  &:hover:after {
    transition: transform 0.5s;
    transform-origin: top left;
    transform: scale(0);
  }
`;

const HoverEffectButton: React.FC<HoverEffectButtonProps> = ({ children, ...rest }) => {
  return <StyledButton {...rest}>{children}</StyledButton>;
};

export default HoverEffectButton;
