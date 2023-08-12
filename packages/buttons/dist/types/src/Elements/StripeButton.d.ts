import React, { ReactNode } from 'react';
interface StripeButtonProps {
    children: ReactNode;
    disabled?: boolean;
    backgroundColor?: string;
    boxShadow?: string;
    textColor?: string;
    fontSize?: number | string;
    height?: number;
    width?: number;
}
declare const StripeButton: React.FC<StripeButtonProps>;
export default StripeButton;
