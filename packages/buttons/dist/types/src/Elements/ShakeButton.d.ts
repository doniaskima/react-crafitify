import React, { ReactNode, ButtonHTMLAttributes } from 'react';
interface ShakeButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}
declare const ShakeButton: React.FC<ShakeButtonProps>;
export default ShakeButton;
