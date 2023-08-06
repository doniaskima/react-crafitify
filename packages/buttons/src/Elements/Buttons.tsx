import React from 'react';
import styled, { css } from 'styled-components';

const buttonVariantStyles = {
  primary: css`
    background-color: #1a202c;
    color: #fff;
    &:hover {
      background-color: #4a5568;
    }
  `,
  secondary: css`
    background-color: #a0aec0;
    color: #000;
    &:hover {
      background-color: #cbd5e0;
    }
  `,
  outline: css`
    border: 1px solid #a0aec0;
    color: #000;
    &:hover {
      background-color: #edf2f7;
    }
  `,
};

const StyledButton = styled.button`
  display: inline-flex;
  transition: color 0.2s;
  outline: none;
  focus: ring-2;
  focus: ring-slate-400;
  focus: ring-offset-2;
  focus: ring-offset-slate-50;
  font-weight: medium;
  height: 48px; /* h-12 multiplied by 4 to match tailwindcss scale */
  padding: 24px; /* px-6 multiplied by 4 to match tailwindcss scale */
  border-radius: 0.375rem; /* rounded-md multiplied by 4 to match tailwindcss scale */
  align-items: center;
  justify-content: center;
  ${({ variant }) => buttonVariantStyles[variant]};
};`

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant: 'primary' | 'secondary' | 'outline';
};

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  className,
  ...props
}) => {
  return (
    <StyledButton variant={variant} className={className} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;
