import React, { ButtonHTMLAttributes } from 'react';
interface FancyGradientButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    size?: 'small' | 'medium' | 'large';
    mainBgColor?: string;
    gradientBgColor1?: string;
    gradientBgColor2?: string;
    ringColor?: string;
    shadowColor?: string;
    hoverShadowColor?: string;
    mainFgColor?: string;
    hoverFgColor?: string;
    className?: string;
}
declare const FancyGradientButton: React.FC<FancyGradientButtonProps>;
export default FancyGradientButton;
