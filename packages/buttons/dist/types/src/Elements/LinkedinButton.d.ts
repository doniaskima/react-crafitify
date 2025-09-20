import React, { ReactNode } from 'react';
interface LinkedinButtonProps {
    children: ReactNode;
    disabled?: boolean;
    backgroundColor?: string;
    hoverBackgroundColor?: string;
    activeBackgroundColor?: string;
    textColor?: string;
    fontSize?: number;
    height?: number;
    minWidth?: number;
    className?: string;
}
declare const LinkedinButton: React.FC<LinkedinButtonProps>;
export default LinkedinButton;
