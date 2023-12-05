import * as React from 'react';
import { SelectProps } from './Select';
export interface SelectContainerProps extends SelectProps {
  /**
   * The callback fired when requesting to change selected index
   */
  onSetSelectedIndex: (index: number) => void;
  /**
   * The ref for the Select
   */
  selectRef: React.RefObject<HTMLDivElement>;
  /**
   * The trigger ref for the Select
   */
  triggerRef: React.RefObject<HTMLButtonElement>;
}
/**
 * @private
 */
export declare const SelectContainer: React.FC<SelectContainerProps>;
