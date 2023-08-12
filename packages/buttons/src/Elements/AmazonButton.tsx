import React, { ReactNode } from 'react';
import styled from 'styled-components';

export interface AmazonButtonProps {
  children: ReactNode;
  backgroundColor?: string;
  borderColor?: string;
  textColor?: string;
  fontSize?: number;
  width?: string;
  className?: string;
}

const StyledAmazonButton = styled.button<AmazonButtonProps>`
  background-color: ${(props) => props.backgroundColor || '#fff'};
  border: 1px solid ${(props) => props.borderColor || '#d5d9d9'};
  border-radius: 8px;
  box-shadow: rgba(213, 217, 217, .5) 0 2px 5px 0;
  box-sizing: border-box;
  color: ${(props) => props.textColor || '#0f1111'};
  cursor: pointer;
  display: inline-block;
  font-family: "Amazon Ember", sans-serif;
  font-size: ${(props) => props.fontSize || 13}px;
  line-height: 29px;
  padding: 0 11px;
  position: relative;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
  width: ${(props) => props.width || '100px'};
  transition: background-color 300ms ease-in, border-color 300ms ease-in, box-shadow 300ms ease-in;
  
  &:hover {
    background-color: #f7fafa;
  }
  
  &:focus {
    border-color: #008296;
    box-shadow: rgba(213, 217, 217, .5) 0 2px 5px 0;
    outline: 0;
  }
`;

const AmazonButton: React.FC<AmazonButtonProps> = (props) => {
  return <StyledAmazonButton  {...props}>{props.children}</StyledAmazonButton>;
};

export default AmazonButton;
