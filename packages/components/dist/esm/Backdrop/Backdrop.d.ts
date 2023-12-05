import * as React from 'react';
export interface BackdropProps extends React.ComponentPropsWithoutRef<'div'> {
  children?: React.ReactNode;
  showBackground?: boolean;
}
export declare const Backdrop: React.FC<BackdropProps>;
