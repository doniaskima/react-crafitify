import React from 'react';
export interface RadioProps extends React.ComponentPropsWithoutRef<'button'> {
  children: React.ReactNode;
  disabled?: boolean;
  isSelected?: boolean;
  onChange: () => void;
}
export declare const Radio: React.FC<RadioProps>;
