import React, { ButtonHTMLAttributes } from 'react';
interface TertiaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  textColor?: string;
  borderColor?: string;
  bgColor?: string;
  shadowColor?: string;
  className?: string;
}
declare const TertiaryButton: React.FC<TertiaryButtonProps>;
export default TertiaryButton;
