import React from 'react';
interface CustomIconButtonProps {
    size?: 'small' | 'medium' | 'large';
    textColor?: string;
    backgroundColor?: string;
    hoverColor?: string;
    activeColor?: string;
    width?: string;
    height?: string;
}
declare const CustomIconButton: React.FC<CustomIconButtonProps>;
export default CustomIconButton;
