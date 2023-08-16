import * as React from "react";

export const useSelectFocus = (
  children: React.ReactNode,
  selectContainerRef: React.RefObject<HTMLElement>,
  selected?: number
) => {
  const [focusedSelectItemIndex, setFocusedSelectItemIndex] =
    React.useState<number>(selected ?? 0);

  const lastIndex = React.Children.count(children) - 1;

  const focusNextItem = () => {
    setFocusedSelectItemIndex((prevIndex) =>
      prevIndex + 1 > lastIndex ? 0 : prevIndex + 1
    );
  };

  const focusPreviousItem = () => {
    setFocusedSelectItemIndex((prevIndex) =>
      prevIndex - 1 < 0 ? lastIndex : prevIndex - 1
    );
  };

  React.useEffect(() => {
    const selectItem = selectContainerRef.current?.children[
      focusedSelectItemIndex
    ] as HTMLElement;
    selectItem?.focus();
  }, [focusedSelectItemIndex]);

  return { focusNextItem, focusPreviousItem, focusedSelectItemIndex };
};
