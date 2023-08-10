import React, { ReactNode } from 'react';
import styled, { css } from 'styled-components';

interface StyledButtonProps {
  backgroundColor?: string;
  textColor?: string;
}

const StyledButton = styled.button<StyledButtonProps>`
  background-color: ${(props) => props.backgroundColor || '#43bccc'};
  color: ${(props) => props.textColor || 'green'};
  border-radius: 100px;
  box-shadow: rgba(44, 187, 99, 0.2) 0 -25px 18px -14px inset,
    rgba(44, 187, 99, 0.15) 0 1px 2px, rgba(44, 187, 99, 0.15) 0 2px 4px,
    rgba(44, 187, 99, 0.15) 0 4px 8px, rgba(44, 187, 99, 0.15) 0 8px 16px,
    rgba(44, 187, 99, 0.15) 0 16px 32px;
  color: ${(props) => props.textColor || 'green'};
  cursor: pointer;
  display: inline-block;
  font-family: CerebriSans-Regular, -apple-system, system-ui, Roboto, sans-serif;
  padding: 7px 20px;
  text-align: center;
  text-decoration: none;
  transition: all 250ms;
  border: 0;
  font-size: 16px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  &:hover {
    box-shadow: rgba(44, 187, 99, 0.35) 0 -25px 18px -14px inset,
      rgba(44, 187, 99, 0.25) 0 1px 2px, rgba(44, 187, 99, 0.25) 0 2px 4px,
      rgba(44, 187, 99, 0.25) 0 4px 8px, rgba(44, 187, 99, 0.25) 0 8px 16px,
      rgba(44, 187, 99, 0.25) 0 16px 32px;
    transform: scale(1.05) rotate(-1deg);
  }
`;

interface ElevatedButtonProps {
  children: ReactNode;
  backgroundColor?: string;
  textColor?: string;
}

const ElevatedButton: React.FC<ElevatedButtonProps> = ({
  children,
  backgroundColor,
  textColor,
}) => {
  return (
    <StyledButton backgroundColor={backgroundColor} textColor={textColor}>
      {children}
    </StyledButton>
  );
};

export default ElevatedButton;
