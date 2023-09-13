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
  alignment?: MenuAlignment;
  children: React.ReactNode;
  isOpen?: boolean;
  onClose: (itemValue?: string) => void;
  onOpen: () => void;
  trigger: React.ReactElement;
}


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
