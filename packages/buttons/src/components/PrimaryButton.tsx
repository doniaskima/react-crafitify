// src/components/PrimaryButton.tsx

import React from 'react';
import styled from 'styled-components';

interface PrimaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

const PrimaryButtonWrapper = styled.button<PrimaryButtonProps>`
  padding: 8px 16px;
  font-size: 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  opacity: ${props => (props.disabled ? 0.5 : 1)};
`;

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ onClick, disabled, className, children }) => {
  return (
    <PrimaryButtonWrapper onClick={onClick} disabled={disabled} className={className}>
      {children}
    </PrimaryButtonWrapper>
  );
};

export { PrimaryButton, PrimaryButtonProps }; // Export the PrimaryButton and PrimaryButtonProps
