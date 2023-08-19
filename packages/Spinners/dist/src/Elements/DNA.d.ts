import React from 'react';
import { BaseProps } from './type';
interface DNAProps extends Omit<BaseProps, 'color'> {
}
export default function DNA({ visible, width, height, className, wrapperStyle, ariaLabel, }: DNAProps): React.JSX.Element | null;
export {};
