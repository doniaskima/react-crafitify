import React, { ReactNode, useRef, useEffect } from 'react';
import styled from 'styled-components';

interface DuolingoButtonProps {
  children: ReactNode;
  disabled?: boolean;
  backgroundColor?: string;
  borderColor?: string;
  hoverBackgroundColor?: string;
  textColor?: string;
  fontSize?: number;
  width?: string; 
  height?: string;  
}

const StyledDuolingoButton = styled.button<DuolingoButtonProps>`
  background-color: ${(props) => props.backgroundColor || '#1899D6'};
  border: solid transparent;
  border-radius: 16px;
  border-width: 0 0 4px;
  box-sizing: border-box;
  display:flex;
  justify-content:center;
  align-items:center;
  color: ${(props) => props.textColor || '#FFFFFF'};
  cursor: ${(props) => (props.disabled ? 'auto' : 'pointer')};
  display: inline-block;
  font-family: din-round, sans-serif;
  font-size: ${(props) => `${props.fontSize}px`};
  font-weight: 700;
  letter-spacing: 0.8px;
  line-height: 20px;
  margin: 0;
  outline: none;
  overflow: visible;
  padding: 13px 16px;
  text-align: center;
  text-transform: uppercase;
  touch-action: manipulation;
  transform: translateZ(0);
  transition: filter 0.2s;
  user-select: none;
  -webkit-user-select: none;
  vertical-align: middle;
  white-space: nowrap;
  position: relative;
  width: ${(props) => props.width || 'auto'};  
  height: ${(props) => props.height || 'auto'}; 

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    border-radius: 16px;
    border-width: 0 0 4px;
    border: solid transparent;
    background-color: ${(props) =>
      props.hoverBackgroundColor || '#1CB0F6'};
  }

  &:hover:not(:disabled) {
    filter: brightness(1.1);
    -webkit-filter: brightness(1.1);
  }

  &:disabled {
    cursor: auto;
  }
`;

const DuolingoButton: React.FC<DuolingoButtonProps> = ({
  children,
  disabled,
  ...props
}) => {
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (buttonRef.current) {
      const textWidth = buttonRef.current.getBoundingClientRect().width;
      buttonRef.current.style.width = `${textWidth}px`;
    }
  }, [children]);

  return (
    <StyledDuolingoButton ref={buttonRef} disabled={disabled} {...props}>
      {children}
    </StyledDuolingoButton>
  );
};

export default DuolingoButton;
