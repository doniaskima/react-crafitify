import * as React from 'react';
export interface ButtonSetProps extends React.ComponentPropsWithoutRef<'ul'> {
  /**
   * The Buttons in the Button Set
   */
  children: React.ReactNode;
  /**
   * The flex direction of the Button Set
   *
   * @default "row"
   */
  flexDirection?: 'row' | 'column';
}
/**
 * @public
 *
 * @description
 *
 * The Button Set is a group Buttons with related actions.
 */
export declare const ButtonSet: React.FC<ButtonSetProps>;
