import React, { ButtonHTMLAttributes } from 'react';
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  textColor?: string;
  borderColor?: string;
  borderRadius?: string;
  hoverColor?: string;
  width?: string;
  fontSize?: string;
  height?: string;
  className?: string;
}
declare const DiagonalSwipeButton: React.FC<ButtonProps>;
export default DiagonalSwipeButton;
