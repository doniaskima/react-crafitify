import * as React from 'react';
export type StatusVariant = 'online' | 'away' | 'busy' | 'offline';
export interface StatusProps extends React.ComponentPropsWithoutRef<'div'> {
  variant?: StatusVariant;
  label?: string;
}
export declare const Status: React.FC<StatusProps>;
