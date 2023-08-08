import React, { ButtonHTMLAttributes } from 'react';
interface FancyArrowButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    size?: 'small' | 'medium' | 'large';
    mainBgColor?: string;
    arrowColor?: string;
}
declare const FancyArrowButton: React.FC<FancyArrowButtonProps>;
export default FancyArrowButton;
