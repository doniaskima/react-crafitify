import React from 'react';
interface FancyShadowButtonProps {
  size?: 'small' | 'medium' | 'large';
  color?: string;
  hoverColor?: string;
  bgColor?: string;
  children: React.ReactNode;
  className?: string;
}
declare const FancyShadowButton: React.FC<FancyShadowButtonProps>;
export default FancyShadowButton;
