import classNames from "classnames";
import * as React from "react";
import { SelectProps } from "./Select";
import styles from "./SelectContainer.module.scss";
import itemStyles from "./SelectItem.module.scss";
import { useOnClickOutside, useOnKeyDown } from "../hooks";
import { SelectItem } from "./SelectItem";
import { useSelectFocus } from "../hooks/useSelectFocus";

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
export const SelectContainer: React.FC<SelectContainerProps> = (
  props
) => {
  const {
    children,
    selected,
    onClose,
    onSetSelectedIndex,
    selectRef,
    triggerRef,
  } = props;

  const selectContainerRef = React.useRef<HTMLDivElement>(null);

  const { focusNextItem, focusPreviousItem, focusedSelectItemIndex } =
    useSelectFocus(children, selectContainerRef, selected);

  useOnClickOutside(selectRef, onClose);
  useOnKeyDown(["Escape"], () => {
    onClose();
    triggerRef.current?.focus();
  });

  return (
    <div
      className={styles.selectOptionsMenu}
      ref={selectContainerRef}
      role="listbox"
    >
      {React.Children.map(children, (child, index) => {
        const selectItem = child as React.ReactElement;

        if (selectItem.type === SelectItem) {
          return React.cloneElement(selectItem, {
            className: classNames(
              itemStyles.selectItem,
              selected === index && itemStyles.selected
            ),
            key: index,
            onClick: () => {
              onClose();
              onSetSelectedIndex(index);
            },
            onKeyDown: (event: React.KeyboardEvent<HTMLElement>) => {
              if (event.code === "Space") {
                onClose();
                onSetSelectedIndex(index);
                triggerRef.current?.focus();
              }
              if (event.code === "ArrowUp") {
                focusPreviousItem();
              }
              if (event.code === "ArrowDown") {
                focusNextItem();
              }
            },
            role: "listitem",
            tabIndex:
              index === focusedSelectItemIndex ? 0 : undefined,
          });
        } else {
          return null;
        }
      })}
    </div>
  );
};

SelectContainer.displayName = "SelectContainer";
