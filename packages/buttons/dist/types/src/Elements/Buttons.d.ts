import React from 'react';
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant: 'primary' | 'secondary' | 'outline';
};
declare const Button: React.FC<ButtonProps>;
export default Button;
