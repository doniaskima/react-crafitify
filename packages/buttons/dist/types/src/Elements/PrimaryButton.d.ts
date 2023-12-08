import React from 'react';
interface PrimaryButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
  disabled?: boolean;
}
declare const PrimaryButton: React.FC<PrimaryButtonProps>;
export { PrimaryButton, PrimaryButtonProps };
