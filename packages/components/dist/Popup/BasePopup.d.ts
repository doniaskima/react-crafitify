import * as React from 'react';
export type BasePopupPosition = 'bottom' | 'top' | 'left' | 'right';
export interface BasePopupProps extends React.ComponentPropsWithoutRef<'div'> {
  /**
   * If the Popup has an indicator
   */
  hasIndicator: boolean;
  /**
   * The position of the Popup
   */
  position: BasePopupPosition;
  /**
   * The text for the Popup
   */
  text: string;
}
export declare const BasePopup: React.ForwardRefExoticComponent<
  BasePopupProps & React.RefAttributes<HTMLDivElement>
>;
