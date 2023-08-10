import React from 'react';
import styled from 'styled-components';

interface ConicButtonProps {
  children: React.ReactNode;
  color?: string;
}

const StyledConicButton = styled.button<ConicButtonProps>`
  --b: 3px;
  --s: .45em;
  --color: ${(props) => props.color || '#373B44'};
  
  padding: calc(.5em + var(--s)) calc(.9em + var(--s));
  color: var(--color);
  --_p: var(--s);
  background:
    conic-gradient(from 90deg at var(--b) var(--b),#0000 90deg,var(--color) 0)
    var(--_p) var(--_p)/calc(100% - var(--b) - 2*var(--_p)) calc(100% - var(--b) - 2*var(--_p));
  transition: .3s linear, color 0s, background-color 0s;
  outline: var(--b) solid #0000;
  outline-offset: .6em;
  font-size: 16px;

  border: 0;

  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  &:hover,
  &:focus-visible {
    --_p: 0px;
    outline-color: var(--color);
    outline-offset: .05em;
  }

  &:active {
    background: var(--color);
    color: #fff;
  }
`;

const ConicButton: React.FC<ConicButtonProps> = ({ children, color }) => {
  return <StyledConicButton color={color}>{children}</StyledConicButton>;
};

export default ConicButton;
