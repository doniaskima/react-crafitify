import * as React from "react";
import {
  useMenuFocus,
  useOnClickOutside,
  useOnKeyDown,
} from "../../hooks";
import styles from "./BaseMenu.module.scss";

export type BaseMenuAlignment =
  | "bottomLeft"
  | "bottomCenter"
  | "bottomRight"
  | "topLeft"
  | "topCenter"
  | "topRight";

export interface BaseMenuProps
  extends React.ComponentPropsWithoutRef<"div"> {
  /**
   * The content for the Menu
   */
  children: React.ReactNode;
  /**
   * The callback fired when the Menu closes
   */
  onClose: (itemValue?: string) => void;
  /**
   * The trigger ref for the Menu
   */
  triggerRef: React.RefObject<HTMLElement>;
}

export const BaseMenu = React.forwardRef<
  HTMLDivElement,
  BaseMenuProps
>((props, ref) => {
  const { children, onClose, triggerRef } = props;

  const menuContainerRef = React.useRef<HTMLDivElement>(null);

  const { focusNextItem, focusPreviousItem, focusedMenuItemIndex } =
    useMenuFocus(children, menuContainerRef);

  useOnClickOutside([menuContainerRef, triggerRef], onClose);
  useOnKeyDown(["Escape"], () => {
    onClose();
    triggerRef.current?.focus();
  });

  return (
    <div className={styles.baseMenu} ref={ref}>
      <div ref={menuContainerRef} role="menu">
        {React.Children.map(children, (child, index) => {
          const menuItem = child as React.ReactElement;
          return React.cloneElement(menuItem, {
            key: index,
            onClick: onClose,
            onKeyDown: (event: React.KeyboardEvent<HTMLElement>) => {
              if (event.code === "Space") {
                onClose();
                triggerRef.current?.focus();
              }
              if (event.code === "ArrowUp") {
                focusPreviousItem();
              }
              if (event.code === "ArrowDown") {
                focusNextItem();
              }
            },
            tabIndex: index === focusedMenuItemIndex ? 0 : undefined,
          });
        })}
      </div>
    </div>
  );
});

BaseMenu.displayName = "BaseMenu";
