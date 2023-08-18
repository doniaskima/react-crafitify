import React from 'react';
import { ICRAFTSize } from '../interfaces';

export interface TagProps {
  children: React.ReactNode;
  unremovable?: boolean;
  size?: keyof ICRAFTSize;
  color?: 'primary' | 'secondary' | 'error';
  onClose?: (e: React.MouseEvent<HTMLElement>) => void;
}

export const CRAFT_TAG_PADDING_Y_SIZES: ICRAFTSize = {
  sm: '4px',
  m: '6px',
  lg: '8px',
};

export const CRAFT_TAG_PADDING_X_SIZES: ICRAFTSize = {
  sm: '7px',
  m: '9px',
  lg: '11px',
};

export const CRAFT_TAG_FONT_SIZES: ICRAFTSize = {
  sm: '12px',
  m: '14px',
  lg: '16px',
};

export const CRAFT_TAG_MARGIN_SIZES: ICRAFTSize = {
  sm: '2px',
  m: '3px',
  lg: '4px',
};
