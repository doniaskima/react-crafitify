import * as React from "react";
import { CSSTransition } from "react-transition-group";
import styles from "./Popup.module.scss";
import classNames from "classnames";
import {
  useOnFocus,
  useOnFocusOut,
  useOnHover,
  useOnHoverOut,
} from "../hooks";
import {
  BasePopup,
  BasePopupPosition as PopupPosition,
} from "./BasePopup";
import { PopupLayoutContainer } from "./PopupLayoutContainer";

export interface PopupProps
  extends React.ComponentPropsWithoutRef<"div"> {
  /**
   * The trigger for the Popup
   */
  children: React.ReactElement;
  /**
   * If the Popup has an indicator
   *
   * @default false
   */
  hasIndicator?: boolean;
  /**
   * If the Popup is open
   *
   * @default false
   */
  isOpen?: boolean;
  /**
   * The callback fired when the Popup closes
   */
  onClose: (itemValue?: string) => void;
  /**
   * The callback fired when the Popup opens
   */
  onOpen: () => void;
  /**
   * The position of the Popup
   *
   * @default "bottom"
   */
  position?: PopupPosition;
  /**
   * The text for the Popup
   */
  text: string;
}

/**
 * @public
 *
 * @description
 *
 * The Popup component is a display that shows when hovering
 * over an element.
 */
export const Popup: React.FC<PopupProps> = (props) => {
  const {
    className,
    children,
    hasIndicator = false,
    isOpen = false,
    onClose,
    onOpen,
    position = "bottom",
    text,
    ...rest
  } = props;

  const popupRef = React.useRef<HTMLDivElement>(null);

  const triggerRef = React.useRef<HTMLDivElement>(null);

  // Show Popup on focus or hover
  useOnFocus(triggerRef, onOpen);
  useOnHover(triggerRef, onOpen);

  // Hide Popup on focus out or hover out
  useOnFocusOut(triggerRef, onClose);
  useOnHoverOut(triggerRef, onClose);

  return (
    <div
      className={classNames(
        position === "bottom" && styles.bottom,
        position === "top" && styles.top,
        position === "left" && styles.left,
        position === "right" && styles.right,
        styles.container
      )}
    >
      {React.cloneElement(React.Children.only(children), {
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
        nodeRef={popupRef}
        timeout={200}
        unmountOnExit
      >
        <PopupLayoutContainer
          hasIndicator={hasIndicator}
          position={position}
          triggerRef={triggerRef}
        >
          <BasePopup
            className={className}
            hasIndicator={hasIndicator}
            position={position}
            ref={popupRef}
            text={text}
            {...rest}
          />
        </PopupLayoutContainer>
      </CSSTransition>
    </div>
  );
};

Popup.displayName = "Popup";
