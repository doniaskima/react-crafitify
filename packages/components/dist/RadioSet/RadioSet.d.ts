import * as React from 'react';
export interface RadioSetProps extends React.ComponentPropsWithoutRef<'ul'> {
  /**
   * The Radios in the Radios Set
   */
  children: React.ReactNode;
}
/**
 * @public
 *
 * @description
 *
 * The Radio Set is a set of options, as Radios, for the user.
 */
export declare const RadioSet: React.FC<RadioSetProps>;
