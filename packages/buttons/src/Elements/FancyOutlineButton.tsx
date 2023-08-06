import React from 'react';
import styled from 'styled-components';

interface FancyOutlineButtonProps {
  size?: 'small' | 'medium' | 'large';
  color?: string;
  hoverColor?: string;
  activeColor?: string;
  children: React.ReactNode;
}

const StyledButton = styled.button<FancyOutlineButtonProps>`
  outline: none;
  color: ${(props) => props.color || '#DAA06D'};
  padding: ${(props) => {
    if (props.size === 'large') return '1.5rem';
    if (props.size === 'small') return '0.5rem';
    return '1rem';
  }};
  border: 2px dashed ${(props) => props.color || '#DAA06D'};
  border-radius: 15px;
  background-color: #EADDCA;
  box-shadow: 0 0 0 4px #EADDCA, 2px 2px 4px 2px rgba(0, 0, 0, 0.5);
  transition: 0.1s ease-in-out, 0.4s color;

  &:hover {
    color: ${(props) => props.hoverColor || props.color || '#DAA06D'};
  }

  &:active {
    transform: translateX(0.1em) translateY(0.1em);
    box-shadow: 0 0 0 4px #EADDCA, 1.5px 1.5px 2.5px 1.5px rgba(0, 0, 0, 0.5);
    color: ${(props) => props.activeColor || props.hoverColor || props.color || '#DAA06D'};
  }
}`;

const FancyOutlineButton: React.FC<FancyOutlineButtonProps> = ({ children, ...props }) => {
  return (
    <StyledButton {...props}>
      {children}
    </StyledButton>
  );
};

export default FancyOutlineButton;
