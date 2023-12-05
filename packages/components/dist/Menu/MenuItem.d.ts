import * as React from 'react';
export interface MenuItemProps extends React.ComponentPropsWithoutRef<'div'> {
  children: string;
}
export declare const MenuItem: React.FC<MenuItemProps>;
