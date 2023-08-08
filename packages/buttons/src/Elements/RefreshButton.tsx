import React, { ReactNode } from 'react';
import styled, { keyframes } from 'styled-components';

const spinAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const StyledButton = styled.button`
  color: white;
  background-color: #222;
  font-weight: 500;
  border-radius: 0.5rem;
  font-size: 1rem;
  line-height: 2rem;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 0.7rem;
  padding-bottom: 0.7rem;
  text-align: center;
  margin-right: 0.5rem;
  display: inline-flex;
  align-items: center;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #333;
  }

  svg {
    display: inline;
    width: 1.3rem;
    height: 1.3rem;
    margin-right: 0.75rem;
    color: white;
  }

  &:focus svg {
    animation: ${spinAnimation} 0.5s linear;
  }
`;

const RefreshButton: React.FC<{ children: ReactNode }> = ({ children, ...rest }) => {
  return (
    <StyledButton {...rest}>
      <svg viewBox="0 0 16 16" className="bi bi-arrow-repeat" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"></path>
        <path d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z" fillRule="evenodd"></path>
      </svg>
      {children}
    </StyledButton>
  );
};

export default RefreshButton;
