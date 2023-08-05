import React from 'react';
import styled from 'styled-components';

interface SecondaryButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

const SecondaryButtonWrapper = styled.button<SecondaryButtonProps>`
  padding: 8px 16px;
  font-size: 16px;
  background-color: #f0f0f0;
  color: #007bff;
  border: 1px solid #007bff;
  border-radius: 4px;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  opacity: ${props => (props.disabled ? 0.5 : 1)};
`;

const SecondaryButton: React.FC<SecondaryButtonProps> = ({ onClick, disabled, className, children }) => {
  return (
    <SecondaryButtonWrapper onClick={onClick} disabled={disabled} className={className}>
      {children}
    </SecondaryButtonWrapper>
  );
};

export default SecondaryButton;
