import React from 'react';
interface ScottButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    altText: string;
    size?: 'small' | 'medium' | 'large';
    borderColor?: string;
    textColor?: string;
    hoverBgColor?: string;
    hoverTextColor?: string;
}
declare const ScottButton: React.FC<ScottButtonProps>;
export default ScottButton;
