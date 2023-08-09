import React from 'react';
import styled, { css } from 'styled-components';

export interface GradienButtonProps {
  gradientColor: string;
}

const GradienButton = styled.button<GradienButtonProps>`
  display: inline-block;
  padding: 6px 12px;
  margin-right: 10px;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  align-items: middle;
  transition: all 0.3s ease-in-out;
  border-radius: 0.5rem;
  cursor: pointer;
  font-size: 10px;
  border: none;

  ${props =>
    props.gradientColor &&
    css`
      background-image: ${props.gradientColor};
      color: white;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    `}

  &:hover {
    transform: scale(1.02);
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  }

  &:active {
    opacity: 0.85;
  }
`;

export default GradienButton;
