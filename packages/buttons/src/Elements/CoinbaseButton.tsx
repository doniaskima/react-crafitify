import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface CoinbaseButtonProps {
  children: ReactNode;
  backgroundColor?: string;
  borderColor?: string;
  textColor?: string;
  fontSize?: number | string;
  width?: number | string;
  className?: string;
  height?: number | string;
  disabled?: boolean;
}

const StyledCoinbaseButton = styled.button<CoinbaseButtonProps>`
  appearance: button;
  background-color: ${(props) => props.backgroundColor || '#1652F0'};
  border: 1px solid ${(props) => props.borderColor || '#1652F0'};
  border-radius: 4px;
  box-sizing: border-box;
  color: ${(props) => props.textColor || '#FFFFFF'};
  cursor: pointer;
  font-family: Graphik, -apple-system, system-ui, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  font-size: ${(props) => props.fontSize || '14px'};
  line-height: 1.15;
  overflow: visible;
  padding: 12px 16px;
  position: relative;
  text-align: center;
  text-transform: none;
  transition: all 80ms ease-in-out;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: ${(props) => props.width || 'fit-content'};
  height: ${(props) => props.height || 'auto'};

  &:disabled {
    opacity: 0.5;
  }

  &:focus {
    outline: 0;
  }

  &:hover {
    background-color: ${(props) => props.backgroundColor || '#0A46E4'};
    border-color: ${(props) => props.borderColor || '#0A46E4'};
  }

  &:active {
    background-color: ${(props) => props.backgroundColor || '#0039D7'};
    border-color: ${(props) => props.borderColor || '#0039D7'};
  }
`;

const CoinbaseButton: React.FC<CoinbaseButtonProps> = ({ children, ...props }) => {
  return <StyledCoinbaseButton {...props}>{children}</StyledCoinbaseButton>;
};

export default CoinbaseButton;
