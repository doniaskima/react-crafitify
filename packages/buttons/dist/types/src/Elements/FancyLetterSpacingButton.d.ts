import React, { ButtonHTMLAttributes } from 'react';
interface FancyLetterSpacingButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'small' | 'medium' | 'large';
  color?: string;
  hoverColor?: string;
  activeColor?: string;
  letterSpacing?: string;
  backgroundColor?: string;
  hoverBackgroundColor?: string;
  hoverLetterSpacing?: string;
  activeLetterSpacing?: string;
  className?: string;
}
declare const FancyLetterSpacingButton: React.FC<FancyLetterSpacingButtonProps>;
export default FancyLetterSpacingButton;
