import React, { ReactNode } from 'react';
interface PaperButtonProps {
    children: ReactNode;
    backgroundColor?: string;
    textColor?: string;
    size?: 'small' | 'medium' | 'large';
}
declare const PaperButton: React.FC<PaperButtonProps>;
export default PaperButton;
