import React, { ReactNode } from 'react';
interface GoogleButtonProps {
    children: ReactNode;
    backgroundColor?: string;
    borderColor?: string;
    hoverBorderColor?: string;
    textColor?: string;
    size?: 'small' | 'medium' | 'large' | 'custom';
    customSize?: {
        fontSize?: string;
        height?: string;
        lineHeight?: string;
        minWidth?: string;
    };
    borderWidth?: number;
    className?: string;
}
declare const GoogleButton: React.FC<GoogleButtonProps>;
export default GoogleButton;
