import React, { ReactNode } from 'react';
interface StyledButtonProps {
    backgroundColor?: string;
    borderColor?: string;
    textColor?: string;
    pseudoBackgroundColor?: string;
    fontSize?: string;
    height?: string;
    fontWeight?: number;
    hoverPseudoBackgroundColor?: string;
    className?: string;
}
interface Button51Props extends StyledButtonProps {
    children: ReactNode;
    hoverPseudoBackgroundColor?: string;
}
declare const Button51: React.FC<Button51Props>;
export default Button51;
