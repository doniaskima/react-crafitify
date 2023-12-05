import React, { ReactNode } from 'react';
export interface AmazonButtonProps {
  children: ReactNode;
  backgroundColor?: string;
  borderColor?: string;
  textColor?: string;
  fontSize?: number;
  width?: string;
  className?: string;
}
declare const AmazonButton: React.FC<AmazonButtonProps>;
export default AmazonButton;
