import React, { ReactNode } from 'react';
interface GradientBorderButtonProps {
    children: ReactNode;
    borderColor?: string;
    color?: string;
    hoverBackgroundColor?: string;
    hoverBoxShadow?: string;
    className?: string;
}
declare const GradientBorderButton: React.FC<GradientBorderButtonProps>;
export default GradientBorderButton;
