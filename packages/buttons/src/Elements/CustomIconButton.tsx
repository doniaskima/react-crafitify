import React from 'react';
import styled from 'styled-components';

interface CustomIconButtonProps {
  size?: 'small' | 'medium' | 'large';
  textColor?: string;
  backgroundColor?: string;
  hoverColor?: string;
  activeColor?: string;
}

const StyledButton = styled.button<CustomIconButtonProps>`
  position: relative;
  background: ${props => props.backgroundColor || '#6a92ef'};
  color: ${props => props.textColor || 'white'};
  padding: ${props => {
    switch (props.size) {
      case 'small':
        return '0.9rem 2rem';
      case 'medium':
        return '1.2rem 2.5rem';
      case 'large':
      default:
        return '1.5rem 3rem';
    }
  }};
  border-radius: 2rem;
  transition: 0.5s;
  border: none;

  &:after {
    content: '';
    width: 80%;
    height: 40%;
    background: linear-gradient(
      80deg,
      ${props => props.hoverColor || 'hsl(217, 77%, 71%)'} 10%,
      ${props => props.activeColor || 'hsl(218, 76%, 84%)'} 48%
    );
    position: absolute;
    left: 0;
    right: 0;
    bottom: -5px;
    margin: 0 auto;
    border-radius: 2rem;
    filter: blur(8px);
    z-index: -9;
    opacity: 0;
    transition: opacity 0.4s;
  }

  .text {
    position: relative;
    z-index: 10;
  }

  svg {
    position: absolute;
    inset: 0;
    margin: auto;
    pointer-events: none;
    transition: 0.6s;
    opacity: 0;
  }

  svg.star {
    width: 18px;
    transform: translate(-25px, -6px) rotate(55deg);
    filter: blur(0.4px);
    color: ${props => props.activeColor || 'hsl(210, 40%, 47%)'};
  }

  svg.moon {
    width: 18px;
    transform: translate(7px, -14px) rotate(80deg);
    filter: blur(0.5px);
    color: ${props => props.activeColor || 'hsl(210, 40%, 47%)'};
  }

  svg.meteor {
    width: 16px;
    transform: translate(34px, -4px) rotate(-45deg);
    filter: blur(0.4px);
    color: ${props => props.activeColor || 'hsl(210, 40%, 47%)'};
  }

  &:active {
    color: #ffffff;
    transform: scale(1.2);
  }

  &:hover::after {
    opacity: 1;
  }

  &:hover {
    transform: scale(1.3);
  }

  &:hover svg {
    opacity: 1;
  }

  &:hover svg.star {
    transform: translate(-55px, -20px) rotate(55deg) scale(1.8);
  }

  &:hover svg.moon {
    transform: translate(50px, -32px) rotate(0deg) scale(1.4);
  }

  &:hover svg.meteor {
    transform: translate(28px, 30px) rotate(260deg) scale(2);
  }
`;

const CustomIconButton: React.FC<CustomIconButtonProps> = ({ ...rest }) => {
  return <StyledButton {...rest} />;
};

export default CustomIconButton;