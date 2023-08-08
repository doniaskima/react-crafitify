import React from 'react';
interface CustomStyledButtonProps {
    design?: 'primary' | 'secondary';
    size?: 'small' | 'medium' | 'large';
    backgroundColor?: string;
    textColor?: string;
    hoverColor?: string;
    activeColor?: string;
    children: React.ReactNode;
}
declare const CustomStyledButton: React.FC<CustomStyledButtonProps>;
export default CustomStyledButton;
