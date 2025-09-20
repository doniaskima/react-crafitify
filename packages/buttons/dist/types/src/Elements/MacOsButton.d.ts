import React, { ReactNode } from 'react';
interface MacOsButtonProps {
    children: ReactNode;
    size?: 'small' | 'medium' | 'large';
    backgroundColor?: string;
    textColor?: string;
    borderColor?: string;
    borderWidth?: number;
    boxShadow?: string;
    width?: number | string;
    height?: number | string;
    className?: string;
}
declare const MacOsButton: React.FC<MacOsButtonProps>;
export default MacOsButton;
