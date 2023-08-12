import React from 'react';
import styled from 'styled-components';

interface PrimaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'small' | 'medium' | 'large'; 
  onClick?: () => void;
  disabled?: boolean;
}

const getButtonPadding = (size: string | undefined) => {
  switch (size) {
    case 'small':
      return '6px 12px';
    case 'medium':
      return '8px 16px';
    case 'large':
      return '12px 24px';
    default:
      return '8px 16px';
  }
};

const PrimaryButtonWrapper = styled.button<PrimaryButtonProps>`
  padding: ${props => getButtonPadding(props.size)}; // Use size for padding
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
