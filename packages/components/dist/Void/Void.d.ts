import * as React from 'react';
export interface VoidProps extends React.ComponentPropsWithoutRef<'div'> {
  color?: string;
  loading?: boolean;
  size?: number;
  speedMultiplier?: number;
}
export declare const Void: React.FC<VoidProps>;
