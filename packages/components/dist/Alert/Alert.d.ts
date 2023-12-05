import React from 'react';
export type AlertVariant = 'error' | 'info' | 'success' | 'warning';
export interface AlertProps extends React.ComponentPropsWithoutRef<'div'> {
  children: string;
  closeable?: boolean;
  variant?: AlertVariant;
  iconColor?: string;
  backgroundColor?: string;
}
export declare const Alert: React.FC<AlertProps>;
