import React from 'react';
import styled from 'styled-components';

interface IconButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

const IconButtonWrapper = styled.button<IconButtonProps>`
  /* Add your icon button styles here */
  padding: 8px;
  background-color: transparent;
  border: none;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  opacity: ${props => (props.disabled ? 0.5 : 1)};
};`

const IconButton: React.FC<IconButtonProps> = ({ onClick, disabled, className, children }) => {
  return (
    <IconButtonWrapper onClick={onClick} disabled={disabled} className={className}>
      {children}
    </IconButtonWrapper>
  );
};

export default IconButton;
