import React from 'react';
import { ButtonPropsWithAs, ButtonColor, TagsByButton } from './types';
type PrimaryButtonProps<T extends TagsByButton = 'button'> = {
    label: string;
    full?: boolean;
    size?: 'sm' | 'm' | 'lg';
    loading?: boolean;
    color?: ButtonColor;
    outline?: boolean;
} & ButtonPropsWithAs<T>;
declare const _default: React.ForwardRefExoticComponent<React.PropsWithChildren<PrimaryButtonProps<TagsByButton>> & React.RefAttributes<HTMLButtonElement>>;
export default _default;
