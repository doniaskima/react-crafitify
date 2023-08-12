import React, { ReactNode } from 'react';
interface PinturaButtonProps {
    children: ReactNode;
    background?: string;
    hoverBackground?: string;
    borderColor?: string;
    textColor?: string;
    fontSize?: string | number;
    width?: string | number;
    height?: string | number;
    boxShadow?: string;
    boxShadowColor?: string;
    disabled?: boolean;
}
declare const PinturaButton: React.FC<PinturaButtonProps>;
export default PinturaButton;
