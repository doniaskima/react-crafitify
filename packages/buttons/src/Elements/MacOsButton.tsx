import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface MacOsButtonProps {
  children: ReactNode;
  size?: 'small' | 'medium' | 'large';
  backgroundColor?: string;
  textColor?: string;
  borderColor?: string;
  borderWidth?: number;
  boxShadow?: string;
  width?: number | string;
  height?: number | string;
}

const StyledMacOsButton = styled.button<MacOsButtonProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6px 14px;
  font-family: -apple-system, BlinkMacSystemFont, 'Roboto', sans-serif;
  border-radius: 6px;
  color: ${(props) => props.textColor || '#3D3D3D'};
  background: ${(props) => props.backgroundColor || '#fff'};
  border: ${(props) =>
    `${props.borderWidth || 0}px solid ${props.borderColor || 'transparent'}`};
  box-shadow: ${(props) =>
    props.boxShadow || '0px 0.5px 1px rgba(0, 0, 0, 0.1)'};
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  cursor: pointer;
  outline: none;
  width: ${(props) => props.width || 'auto'};
  height: ${(props) => {
    if (props.size === 'small') return '30px';
    if (props.size === 'medium') return '40px';
    if (props.size === 'large') return '50px';
    return props.height || 'auto';
  }};

  &:focus {
    box-shadow: ${(props) =>
      `${props.boxShadow || '0px 0.5px 1px rgba(0, 0, 0, 0.1)'}, 0px 0px 0px 3.5px rgba(58, 108, 217, 0.5)`};
  }
`;

const MacOsButton: React.FC<MacOsButtonProps> = ({ children, ...props }) => {
  return <StyledMacOsButton {...props}>{children}</StyledMacOsButton>;
};

export default MacOsButton;
