import React from 'react';
import styled from 'styled-components';

interface PrimaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void;
  disabled?: boolean;
}

const PrimaryButtonWrapper = styled.button<PrimaryButtonProps>`
  padding: 8px 16px;
  font-size: 16px;
  background-color: var(--primary-color, #007bff);
  color: var(--button-text-color, white);
  border: none;
  border-radius: 4px;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  opacity: ${props => (props.disabled ? 0.5 : 1)};
`;

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ onClick, disabled, children, ...rest }) => {
  return (
    <PrimaryButtonWrapper onClick={onClick} disabled={disabled} {...rest}>
      {children}
    </PrimaryButtonWrapper>
  );
};

export { PrimaryButton, PrimaryButtonProps };
