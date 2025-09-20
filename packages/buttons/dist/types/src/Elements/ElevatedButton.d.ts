import React, { ReactNode } from 'react';
interface ElevatedButtonProps {
    children: ReactNode;
    backgroundColor?: string;
    textColor?: string;
    fontSize?: string;
    hoverEffect?: boolean;
    boxShadow?: string;
    hoverTransform?: string;
    boxShadowBase?: string;
}
declare const ElevatedButton: React.FC<ElevatedButtonProps>;
export default ElevatedButton;
