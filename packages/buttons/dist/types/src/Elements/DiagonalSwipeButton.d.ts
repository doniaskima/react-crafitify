import React, { ButtonHTMLAttributes } from 'react';
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    textColor?: string;
    borderColor?: string;
    borderRadius?: string;
    hoverColor?: string;
}
declare const DiagonalSwipeButton: React.FC<ButtonProps>;
export default DiagonalSwipeButton;
