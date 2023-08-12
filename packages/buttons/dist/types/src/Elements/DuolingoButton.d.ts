import React, { ReactNode } from 'react';
interface DuolingoButtonProps {
    children: ReactNode;
    disabled?: boolean;
    backgroundColor?: string;
    borderColor?: string;
    hoverBackgroundColor?: string;
    textColor?: string;
    fontSize?: number;
    width?: string;
    height?: string;
}
declare const DuolingoButton: React.FC<DuolingoButtonProps>;
export default DuolingoButton;
