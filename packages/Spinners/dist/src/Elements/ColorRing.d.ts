import React from 'react';
import { BaseProps } from './type';
export interface ColorRingProps extends Omit<BaseProps, 'color'> {
  colors?: [string, string, string, string, string];
}
export default function ColorRing({
  visible,
  width,
  height,
  colors,
  className,
  wrapperStyle,
  ariaLabel,
}: ColorRingProps): React.JSX.Element | null;
