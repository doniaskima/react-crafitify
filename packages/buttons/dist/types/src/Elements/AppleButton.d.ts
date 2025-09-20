import React, { ReactNode } from 'react';
interface AppleButtonProps {
    children: ReactNode;
    disabled?: boolean;
    backgroundColor?: string;
    borderColor?: string;
    hoverBackgroundColor?: string;
    hoverBorderColor?: string;
    activeBackgroundColor?: string;
    activeBorderColor?: string;
    textColor?: string;
    fontSize?: number;
    height?: number | string;
    borderWidth?: number;
    size?: 'small' | 'medium' | 'large';
    className?: string;
}
declare const AppleButton: React.FC<AppleButtonProps>;
export default AppleButton;
