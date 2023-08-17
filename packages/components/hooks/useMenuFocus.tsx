import * as React from "react";
import { MenuItem } from "../Menu/MenuItem";

const getNextMenuItem = (
  currentIndex: number,
  childrenArray: React.ReactNode[]
) => {
  let index =
    currentIndex + 1 > childrenArray.length - 1
      ? 0
      : currentIndex + 1;
  while (
    (childrenArray[index] as React.ReactElement).type !== MenuItem
  ) {
    if (index + 1 > childrenArray.length - 1) {
      index = 0;
    } else {
      index += 1;
    }
  }

  return index;
};

const getPreviousMenuItem = (
  currentIndex: number,
  childrenArray: React.ReactNode[]
) => {
  let index =
    currentIndex - 1 < 0
      ? childrenArray.length - 1
      : currentIndex - 1;
  while (
    (childrenArray[index] as React.ReactElement).type !== MenuItem
  ) {
    if (index - 1 < 0) {
      index = childrenArray.length - 1;
    } else {
      index -= 1;
    }
  }

  return index;
};

// Possible bug where no children will cause infinite loop??
export const useMenuFocus = (
  children: React.ReactNode,
  menuContainerRef: React.RefObject<HTMLElement>
) => {
  const childrenArray = React.Children.toArray(children);

  const [focusedMenuItemIndex, setFocusedMenuItemIndex] =
    React.useState<number>(getNextMenuItem(-1, childrenArray));

  const focusNextItem = () => {
    setFocusedMenuItemIndex((prevIndex) =>
      getNextMenuItem(prevIndex, childrenArray)
    );
  };

  const focusPreviousItem = () => {
    setFocusedMenuItemIndex((prevIndex) =>
      getPreviousMenuItem(prevIndex, childrenArray)
    );
  };

  // Initial render focus on first item
  React.useEffect(() => {
    const menuItem = menuContainerRef.current?.children[
      focusedMenuItemIndex
    ] as HTMLElement;
    setTimeout(() => menuItem?.focus(), 120);
  }, []);

  React.useEffect(() => {
    const menuItem = menuContainerRef.current?.children[
      focusedMenuItemIndex
    ] as HTMLElement;
    menuItem?.focus();
  }, [focusedMenuItemIndex]);

  return { focusNextItem, focusPreviousItem, focusedMenuItemIndex };
};
