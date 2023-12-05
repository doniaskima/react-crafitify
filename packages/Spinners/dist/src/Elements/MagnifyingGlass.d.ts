import React from 'react';
import { BaseProps } from './type';
export interface MagnifyingGlassProps extends BaseProps {
  glassColor?: string;
}
export default function MagnifyingGlass({
  visible,
  height,
  width,
  className,
  wrapperStyle,
  ariaLabel,
  glassColor,
  color,
}: MagnifyingGlassProps): React.JSX.Element | null;
