import React from 'react';
interface SecondaryButtonProps {
    onClick?: () => void;
    disabled?: boolean;
    className?: string;
    children?: React.ReactNode;
}
declare const SecondaryButton: React.FC<SecondaryButtonProps>;
export default SecondaryButton;
