import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface LinkedinButtonProps {
  children: ReactNode;
  disabled?: boolean;
  backgroundColor?: string;
  hoverBackgroundColor?: string;
  activeBackgroundColor?: string;
  textColor?: string;
  fontSize?: number;
  height?: number;
  minWidth?: number;
}

const StyledLinkedinButton = styled.button<LinkedinButtonProps>`
  align-items: center;
  background-color: ${(props) => props.disabled ? 'rgba(0, 0, 0, 0.08)' : props.backgroundColor || '#0A66C2'};
  border: 0;
  border-radius: 100px;
  box-sizing: border-box;
  color: ${(props) => props.disabled ? 'rgba(0, 0, 0, 0.3)' : props.textColor || '#ffffff'};
  cursor: ${(props) => props.disabled ? 'not-allowed' : 'pointer'};
  display: inline-flex;
  font-family: -apple-system, system-ui, system-ui, "Segoe UI", Roboto, "Helvetica Neue", "Fira Sans", Ubuntu, Oxygen, "Oxygen Sans", Cantarell, "Droid Sans", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Lucida Grande", Helvetica, Arial, sans-serif;
  font-size: ${(props) => props.fontSize ? `${props.fontSize}px` : '16px'};
  font-weight: 600;
  justify-content: center;
  line-height: 20px;
  max-width: 480px;
  min-height: ${(props) => props.height ? `${props.height}px` : '40px'};
  min-width: ${(props) => props.minWidth ? `${props.minWidth}px` : '0px'};
  overflow: hidden;
  padding: 0px;
  padding-left: 20px;
  padding-right: 20px;
  text-align: center;
  touch-action: manipulation;
  transition: background-color 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s, box-shadow 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s, color 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s;
  user-select: none;
  -webkit-user-select: none;
  vertical-align: middle;
  
  &:hover,
  &:focus {
    background-color: ${(props) => props.disabled ? 'rgba(0, 0, 0, 0.08)' : props.hoverBackgroundColor || '#16437E'};
    color: ${(props) => props.disabled ? 'rgba(0, 0, 0, 0.3)' : props.textColor || '#ffffff'};
  }
  
  &:active {
    background: ${(props) => props.disabled ? 'rgba(0, 0, 0, 0.08)' : props.activeBackgroundColor || '#09223b'};
    color: ${(props) => props.disabled ? 'rgba(0, 0, 0, 0.7)' : 'rgba(255, 255, 255, 0.7)'};
  }
`;

const LinkedinButton: React.FC<LinkedinButtonProps> = ({ children, disabled, ...props }) => {
  return (
    <StyledLinkedinButton disabled={disabled} {...props}>
      {children}
    </StyledLinkedinButton>
  );
};

export default LinkedinButton;
