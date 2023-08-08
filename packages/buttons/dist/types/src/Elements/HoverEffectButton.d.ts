import React, { ReactNode } from 'react';
interface HoverEffectButtonProps {
    size?: 'small' | 'medium' | 'large';
    textColor?: string;
    backgroundColor?: string;
    hoverColor?: string;
    children: ReactNode;
}
declare const HoverEffectButton: React.FC<HoverEffectButtonProps>;
export default HoverEffectButton;
