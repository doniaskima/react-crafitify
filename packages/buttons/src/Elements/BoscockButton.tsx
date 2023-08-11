import React from 'react';
import styled, { css } from 'styled-components';

const BoscockButton = styled.button`
  font-size: ${({ fontSize }) => fontSize || '16px'};
  font-weight: 200;
  letter-spacing: 1px;
  padding: 13px 20px 13px;
  outline: 0;
  border: 1px solid black;
  cursor: pointer;
  position: relative;
  background-color: rgba(0, 0, 0, 0);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  /* Use css helper to conditionally apply styles */
  ${({ width }) =>
    width &&
    css`
      width: ${width};
    `}

  ${({ height }) =>
    height &&
    css`
      height: ${height};
    `}

  &:after {
    content: "";
    background-color: ${({ backgroundColor }) => backgroundColor || '#ffe54c'};
    width: 100%;
    z-index: -1;
    position: absolute;
    height: 100%;
    top: 7px;
    left: 7px;
    transition: 0.2s;
  }

  &:hover:after {
    top: 0px;
    left: 0px;
  }

  @media (min-width: 768px) {
    padding: 13px 50px 13px;
  }
`;

export default BoscockButton;
