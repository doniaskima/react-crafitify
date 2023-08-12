import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface PinturaButtonProps {
  children: ReactNode;
  background?: string;
  hoverBackground?: string;
  borderColor?: string;
  textColor?: string;
  fontSize?: string | number;
  width?: string | number;
  height?: string | number;
  boxShadow?: string;
  boxShadowColor?: string;
  disabled?: boolean;
  className?: string;
}

const StyledPinturaButton = styled.button<PinturaButtonProps>`
  background: ${(props) => props.background || 'linear-gradient(to bottom right, #EF4765, #FF9A5A)'};
  border: 0;
  border-radius: 12px;
  color: ${(props) => props.textColor || '#FFFFFF'};
  cursor: pointer;
  display: inline-block;
  font-family: -apple-system, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: ${(props) => props.fontSize || '16px'};
  font-weight: 500;
  line-height: 2.5;
  outline: transparent;
  padding: 0 1rem;
  text-align: center;
  text-decoration: none;
  transition: box-shadow 0.2s ease-in-out, background-color 0.2s ease-in-out;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  width: ${(props) => props.width || 'auto'};
  height: ${(props) => props.height || 'auto'};
  box-shadow: ${(props) => props.boxShadow || 'none'};
  box-shadow-color: ${(props) => props.boxShadowColor || 'rgba(0, 0, 0, 0.5)'}; // Use the boxShadowColor prop

  &:not([disabled]):focus {
    box-shadow: 0 0 0.25rem ${(props) => props.boxShadowColor || 'rgba(0, 0, 0, 0.5)'}, -0.125rem -0.125rem 1rem rgba(239, 71, 101, 0.5), 0.125rem 0.125rem 1rem rgba(255, 154, 90, 0.5);
  }

  &:not([disabled]):hover {
    box-shadow: 0 0 0.25rem ${(props) => props.boxShadowColor || 'rgba(0, 0, 0, 0.5)'}, -0.125rem -0.125rem 1rem rgba(239, 71, 101, 0.5), 0.125rem 0.125rem 1rem rgba(255, 154, 90, 0.5);
    background: ${(props) => props.hoverBackground || props.background || 'linear-gradient(to bottom right, #EF4765, #FF9A5A)'};
  }
};`

const PinturaButton: React.FC<PinturaButtonProps> = ({ children, ...props }) => {
  return <StyledPinturaButton {...props}>{children}</StyledPinturaButton>;
};

export default PinturaButton;
