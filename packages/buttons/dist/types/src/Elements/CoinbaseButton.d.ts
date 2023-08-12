import React, { ReactNode } from 'react';
interface CoinbaseButtonProps {
    children: ReactNode;
    backgroundColor?: string;
    borderColor?: string;
    textColor?: string;
    fontSize?: number | string;
    width?: number | string;
    className?: string;
    height?: number | string;
    disabled?: boolean;
}
declare const CoinbaseButton: React.FC<CoinbaseButtonProps>;
export default CoinbaseButton;
