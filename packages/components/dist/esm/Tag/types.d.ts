import React from 'react';
import { ICRAFTSize } from '../interfaces';
export interface TagProps {
    children: React.ReactNode;
    unremovable?: boolean;
    size?: keyof ICRAFTSize;
    color?: 'primary' | 'secondary' | 'error';
    onClose?: (e: React.MouseEvent<HTMLElement>) => void;
}
export declare const CRAFT_TAG_PADDING_Y_SIZES: ICRAFTSize;
export declare const CRAFT_TAG_PADDING_X_SIZES: ICRAFTSize;
export declare const CRAFT_TAG_FONT_SIZES: ICRAFTSize;
export declare const CRAFT_TAG_MARGIN_SIZES: ICRAFTSize;
