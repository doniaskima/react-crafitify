import React, { ButtonHTMLAttributes } from 'react';
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  bgColor?: string;
  textColor?: string;
  hoverColor?: string;
  shadowColor?: string;
  activeColor?: string;
  width?: string;
  height?: string;
  fontSize?: string;
  className?: string;
}
declare const AnimatedButton: React.FC<ButtonProps>;
export default AnimatedButton;
