import React, { ReactNode } from 'react';
import styled, { keyframes } from 'styled-components';

interface LovebtnProps {
  children: ReactNode;
  size?: 'small' | 'medium' | 'large';
}

const StyledButton = styled.button<LovebtnProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: ${(props) => {
    if (props.size === 'small') return '10px 15px';
    if (props.size === 'medium') return '20px 25px 20px 22px';
    return '30px 35px 30px 32px';
  }};
  box-shadow: rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  background-color: #e8e8e8;
  border-color: #ffe2e2;
  border-style: solid;
  border-width: 9px;
  border-radius: 35px;
  font-size: 25px;
  font-weight: 900;
  color: rgb(134, 124, 124);
  font-family: monospace;
  transition: transform 400ms cubic-bezier(.68,-0.55,.27,2.5), 
    border-color 400ms ease-in-out,
    background-color 400ms ease-in-out;
  word-spacing: -2px;

  &:hover {
    background-color: #eee;
    transform: scale(1.05);
    animation: ${keyframes`
      0% {
        border-color: #fce4e4;
      }
    
      50% {
        border-color: #ffd8d8;
      }
    
      90% {
        border-color: #fce4e4;
      }
    `} 3s infinite;
  }
`;

const FilledHeart = styled.svg`
  fill: rgb(255, 110, 110);
  transition: opacity 100ms ease-in-out;

  ${StyledButton}:hover & {
    opacity: 1;
  }
`;

const EmptyHeart = styled.svg`
  fill: rgb(255, 110, 110);
  transition: opacity 100ms ease-in-out;

  ${StyledButton}:hover & {
    opacity: 0;
  }
`;

const Lovebtn: React.FC<LovebtnProps> = ({
  children,
  size,
  ...rest
}) => {
  return (
    <StyledButton size={size} {...rest}>
     
      <FilledHeart className="filled" height="32" width="32" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0H24V24H0z" fill="none"></path>
        <path d="M16.5 3C19.538 3 22 5.5 22 9c0 7-7.5 11-10 12.5C9.5 20 2 16 2 9c0-3.5 2.5-6 5.5-6C9.36 3 11 4 12 5c1-1 2.64-2 4.5-2z"></path>
      </FilledHeart>
      {children}
    </StyledButton>
  );
};

export default Lovebtn;
