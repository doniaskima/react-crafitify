import * as React from 'react';
export type SeparatorDirection = 'horizontal' | 'vertical';
export interface SeparatorProps extends React.ComponentPropsWithoutRef<'span'> {
  ariaLabel?: string;
  direction?: SeparatorDirection;
  stroke?: number;
}
export declare const Separator: React.FC<SeparatorProps>;
