import React, { ReactNode } from 'react';
export interface ThreeDButtonProps {
    children: ReactNode;
    backgroundColor?: string;
    borderColor?: string;
    textColor?: string;
}
declare const ThreeDButton: React.FC<ThreeDButtonProps>;
export default ThreeDButton;
