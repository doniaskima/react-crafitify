import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  --primary-color: #000000;
  --secondary-color: #ffffff;
  --hover-color: #111;
  --arrow-width: 10px;
  --arrow-stroke: 2px;
  box-sizing: border-box;
  border: 0;
  border-radius: 20px;
  color: var(--secondary-color);
  padding: 1em 1.8em;
  background: var(--primary-color);
  display: flex;
  transition: 0.2s background;
  align-items: center;
  gap: 0.6em;
  font-weight: bold;

  .arrow-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .arrow {
    margin-top: 1px;
    width: var(--arrow-width);
    background: var(--primary-color);
    height: var(--arrow-stroke);
    position: relative;
    transition: 0.2s;
  }

  .arrow::before {
    content: "";
    box-sizing: border-box;
    position: absolute;
    border: solid var(--secondary-color);
    border-width: 0 var(--arrow-stroke) var(--arrow-stroke) 0;
    display: inline-block;
    top: -3px;
    right: 3px;
    transition: 0.2s;
    padding: 3px;
    transform: rotate(-45deg);
  }

  &:hover {
    background-color: var(--hover-color);
  }

  &:hover .arrow {
    background: var(--secondary-color);
  }

  &:hover .arrow:before {
    right: 0;
  }
`;

export default StyledButton;
