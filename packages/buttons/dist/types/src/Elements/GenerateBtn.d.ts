import React from 'react';
interface GenerateBtnProps {
    children: React.ReactNode;
    onClick: () => void;
    disabled: boolean;
    loading?: boolean;
}
declare const GenerateBtn: React.FC<GenerateBtnProps>;
export default GenerateBtn;
