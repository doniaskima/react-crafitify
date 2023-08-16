import * as React from "react";
import { CSSTransition } from "react-transition-group";
import styles from "./Menu.module.scss";
import classNames from "classnames";
import { BaseMenu } from "./BaseMenu";
import { MenuLayoutContainer } from "./MenuLayoutContainer";

export type MenuAlignment =
  | "bottomLeft"
  | "bottomCenter"
  | "bottomRight"
  | "topLeft"
  | "topCenter"
  | "topRight";

export interface MenuProps {
  /**
   * The Menu's alignment relative to its trigger
   *
   * @default "bottomLeft"
   */
  alignment?: MenuAlignment;
  /**
   * The content for the Menu
   */
  children: React.ReactNode;
  /**
   * If the Menu is open
   *
   * @default false
   */
  isOpen?: boolean;
  /**
   * The callback fired when the Menu closes
   */
  onClose: (itemValue?: string) => void;
  /**
   * The callback fired when the Menu opens
   */
  onOpen: () => void;
  /**
   * The trigger for the Menu
   */
  trigger: React.ReactElement;
}

/**
 * @public
 *
 * @description
 *
 * The Menu component will display a list of items to a user.
 */
export const Menu: React.FC<MenuProps> = (props) => {
  const {
    alignment = "bottomLeft",
    children,
    isOpen = false,
    onClose,
    onOpen,
    trigger,
    ...rest
  } = props;

  const menuRef = React.useRef<HTMLDivElement>(null);

  const triggerRef = React.useRef<HTMLDivElement>(null);

  return (
    <span
      className={classNames(
        alignment.startsWith("bottom") && styles.bottom,
        alignment.startsWith("top") && styles.top,
        styles.container
      )}
      {...rest}
    >
      {React.cloneElement(trigger, {
        className: classNames(
          isOpen && styles.isOpen,
          styles.trigger
        ),
        onClick: () => {
          if (isOpen) {
            onClose();
          } else {
            onOpen();
          }
        },
        ref: triggerRef,
        role: "button",
        tabIndex: 0,
      })}
      <CSSTransition
        classNames={{
          enter: styles.enter,
          enterActive: styles.enterActive,
          exit: styles.exit,
          exitActive: styles.exitActive,
        }}
        in={isOpen}
        mountOnEnter
        nodeRef={menuRef}
        timeout={150}
        unmountOnExit
      >
        <MenuLayoutContainer
          alignment={alignment}
          triggerRef={triggerRef}
        >
          <BaseMenu
            onClose={onClose}
            ref={menuRef}
            triggerRef={triggerRef}
          >
            {children}
          </BaseMenu>
        </MenuLayoutContainer>
      </CSSTransition>
    </span>
  );
};

Menu.displayName = "Menu";
