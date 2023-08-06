import React from 'react';
import styled from 'styled-components';

interface FancyLetterSpacingButtonProps {
  size?: 'small' | 'medium' | 'large';
  color?: string;
  hoverColor?: string;
  activeColor?: string;
  letterSpacing?: string;
  backgroundColor?: string;
  hoverBackgroundColor?: string; 
  children: React.ReactNode;
}

const StyledButton = styled.button<FancyLetterSpacingButtonProps>`
  padding: ${(props) => {
    if (props.size === 'large') return '1.5rem';
    if (props.size === 'small') return '0.5rem';
    return '1rem';
  }};
  border-radius: 15px;
  font-weight: bold;
  transition: 0.4s ease-in-out;
  box-shadow: inset 2px 5px 10px rgba(0, 0, 0, 0.2);
  border: none;
  letter-spacing: ${(props) => props.letterSpacing || '0.2em'};
  color: ${(props) => props.color || 'black'};
  background-color: ${(props) => props.backgroundColor || 'transparent'};

  &:hover {
    letter-spacing: ${(props) => props.hoverLetterSpacing || '0.5em'};
    transform: translateY(-0.8em);
    background-color: ${(props) => props.hoverBackgroundColor || '#171717'}; // Use the hoverBackgroundColor prop
    color: ${(props) => props.hoverColor || 'white'};
  }

  &:active {
    letter-spacing: ${(props) => props.activeLetterSpacing || '0.4em'};
    transition: 0.1s all;
    transform: translateY(-0.6em);
    background-color: #171717;
    color: ${(props) => props.activeColor || 'white'};
  }
}`;

const FancyLetterSpacingButton: React.FC<FancyLetterSpacingButtonProps> = ({ children, ...props }) => {
  return (
    <StyledButton {...props}>
      {children}
    </StyledButton>
  );
};

export default FancyLetterSpacingButton;
