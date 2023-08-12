import React, { ReactNode } from 'react';
interface AirbnbButtonProps {
    children: ReactNode;
    disabled?: boolean;
    backgroundColor?: string;
    borderColor?: string;
    hoverBackgroundColor?: string;
    hoverBorderColor?: string;
    textColor?: string;
    fontSize?: number;
    width?: number;
    height?: number;
    borderRadius?: number;
    borderWidth?: number;
    className?: string;
}
declare const AirbnbButton: React.FC<AirbnbButtonProps>;
export default AirbnbButton;
