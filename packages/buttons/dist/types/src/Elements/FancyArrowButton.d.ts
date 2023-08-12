import React, { ButtonHTMLAttributes } from 'react';
interface FancyArrowButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    size?: 'small' | 'medium' | 'large';
    mainBgColor?: string;
    arrowColor?: string;
    height?: string;
    width?: string;
    className?: string;
}
declare const FancyArrowButton: React.FC<FancyArrowButtonProps>;
export default FancyArrowButton;
