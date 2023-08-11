import React from 'react';
interface FancyOutlineButtonProps {
    size?: 'small' | 'medium' | 'large';
    color?: string;
    hoverColor?: string;
    activeColor?: string;
    children: React.ReactNode;
}
declare const FancyOutlineButton: React.FC<FancyOutlineButtonProps>;
export default FancyOutlineButton;