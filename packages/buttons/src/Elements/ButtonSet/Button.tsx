import * as React from "react";
import styled, { css } from "styled-components";

export interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
}

const buttonVariantStyles = {
  primary: css`
    background-color: ${({ bgColor }) => bgColor || "#1a202c"};
    color: ${({ textColor }) => textColor || "#fff"};
    &:hover {
      background-color: ${({ hoverColor }) => hoverColor || "#4a5568"};
    }
  `,
  secondary: css`
    background-color: ${({ bgColor }) => bgColor || "#a0aec0"};
    color: ${({ textColor }) => textColor || "#000"};
    &:hover {
      background-color: ${({ hoverColor }) => hoverColor || "#cbd5e0"};
    }
  `,
  outline: css`
    border: 1px solid ${({ bgColor }) => bgColor || "#a0aec0"};
    color: ${({ textColor }) => textColor || "#000"};
    &:hover {
      background-color: ${({ hoverColor }) => hoverColor || "#edf2f7"};
    }
  `,
};

const StyledButton = styled.button<ButtonProps>`
  display: inline-flex;
  transition: color 0.2s;
  outline: none;
  font-weight: medium;
  height: 48px; /* h-12 multiplied by 4 to match tailwindcss scale */
  padding: 24px; /* px-6 multiplied by 4 to match tailwindcss scale */
  border-radius: 0.375rem; /* rounded-md multiplied by 4 to match tailwindcss scale */
  align-items: center;
  justify-content: center;
  ${({ variant, ...props }) => buttonVariantStyles[variant](props)};
`;

export default StyledButton;
