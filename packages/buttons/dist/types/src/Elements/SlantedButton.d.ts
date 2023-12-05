import React from 'react';
interface SlantedButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}
declare const SlantedButton: React.FC<SlantedButtonProps>;
export default SlantedButton;
