import * as React from 'react';
export declare const useMenuFocus: (
  children: React.ReactNode,
  menuContainerRef: React.RefObject<HTMLElement>,
) => {
  focusNextItem: () => void;
  focusPreviousItem: () => void;
  focusedMenuItemIndex: number;
};
