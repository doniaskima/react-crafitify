import React, { ReactNode } from 'react';
interface RefreshButtonProps {
    children: ReactNode;
    backgroundColor?: string;
    iconColor?: string;
    fontSize?: string;
}
declare const RefreshButton: React.FC<RefreshButtonProps>;
export default RefreshButton;
