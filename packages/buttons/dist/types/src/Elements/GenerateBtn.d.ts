import React from 'react';
interface GenerateBtnProps {
    children: React.ReactNode;
    onClick: () => void;
    disabled: boolean;
    loading?: boolean;
    width?: string;
    height?: string;
    backgroundColor?: string;
    hoverGradient?: string;
    className?: string;
}
declare const GenerateBtn: React.FC<GenerateBtnProps>;
export default GenerateBtn;
