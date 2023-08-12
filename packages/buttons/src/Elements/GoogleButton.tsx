import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface GoogleButtonProps {
  children: ReactNode;
  backgroundColor?: string;
  borderColor?: string;
  hoverBorderColor?: string;
  textColor?: string;
  size?: 'small' | 'medium' | 'large' | 'custom';
  customSize?: {
    fontSize?: string;
    height?: string;
    lineHeight?: string;
    minWidth?: string;
  };
  borderWidth?: number;
  className?: string;
}

const StyledGoogleButton = styled.button<GoogleButtonProps>`
  background-color: ${(props) => props.backgroundColor || '#f8f9fa'};
  border: ${(props) =>
    props.borderWidth ? `${props.borderWidth}px solid ${props.borderColor || '#f8f9fa'}` : 'none'};
  border-radius: 4px;
  color: ${(props) => props.textColor || '#3c4043'};
  cursor: pointer;
  font-family: arial, sans-serif;
  font-size: ${(props) => {
    if (props.size === 'small') return '12px';
    if (props.size === 'medium') return '14px';
    if (props.size === 'large') return '18px';
    if (props.size === 'custom' && props.customSize) return props.customSize;
    return '14px'; // Default size
  }};

  height: ${(props) => {
    if (props.size === 'small') return '28px';
    if (props.size === 'medium') return '36px';
    if (props.size === 'large') return '48px';
    if (props.size === 'custom' && props.customSize && props.customSize.height) {
      return props.customSize.height;
    }
    return '36px'; // Default height
  }};

  line-height: ${(props) => {
    if (props.size === 'small') return '20px';
    if (props.size === 'medium') return '27px';
    if (props.size === 'large') return '36px';
    if (props.size === 'custom' && props.customSize && props.customSize.lineHeight) {
      return props.customSize.lineHeight;
    }
    return '27px'; // Default line height
  }};

  min-width: ${(props) => {
    if (props.size === 'small') return '40px';
    if (props.size === 'medium') return '54px';
    if (props.size === 'large') return '72px';
    if (props.size === 'custom' && props.customSize && props.customSize.minWidth) {
      return props.customSize.minWidth;
    }
    return '54px'; // Default min width
  }};

  padding: 0 16px;
  text-align: center;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: pre;
  transition: border-color 300ms ease-in, box-shadow 300ms ease-in, color 300ms ease-in;

  &:hover {
    border-color: ${(props) => props.hoverBorderColor || '#dadce0'};
    box-shadow: rgba(0, 0, 0, 0.1) 0 1px 1px;
    color: #202124;
  }

  &:focus {
    border-color: #4285f4;
    outline: none;
  }
};`


const GoogleButton: React.FC<GoogleButtonProps> = ({ children, ...props }) => {
    return <StyledGoogleButton {...props}>{children}</StyledGoogleButton>;
  };
  
  export default GoogleButton;
