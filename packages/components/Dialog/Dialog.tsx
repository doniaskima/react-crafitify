import * as React from "react";
import styles from "./Dialog.module.scss";
import { Backdrop } from "../Backdrop/Backdrop";
import { BaseDialog, BaseDialogProps } from "./BaseDialog";
import { useLockBodyScroll } from "../hooks/useLockBodyScroll";
import { CSSTransition } from "react-transition-group";
import classNames from "classnames";

export interface DialogProps extends BaseDialogProps {
  /**
   * If the Dialog has a backdrop
   *
   * @default true
   */
  hasBackdrop?: boolean;
  /**
   * If the Dialog is open
   *
   * @default false
   */
  isOpen?: boolean;
  /**
   * The callback fired when the Dialog opens
   */
  onOpen: () => void;
  /**
   * The trigger for the Dialog
   */
  trigger: React.ReactElement;
}

/**
 * @public
 *
 * @description
 *
 * The Dialog component gives attention to a task a user can take.
 */
export const Dialog: React.FC<DialogProps> = (props) => {
  const {
    ariaLabel,
    buttons,
    className,
    content,
    hasBackdrop = true,
    isOpen = false,
    onClose,
    onOpen,
    title,
    trigger,
    variant = "center",
    ...rest
  } = props;

  useLockBodyScroll(isOpen);

  return (
    <>
      {React.cloneElement(trigger, {
        onClick: onOpen,
        role: "button",
        tabIndex: 0,
      })}
      <CSSTransition
        in={isOpen}
        timeout={250}
        mountOnEnter
        unmountOnExit
        classNames={{
          enter: styles.enter,
          enterActive: styles.enterActive,
          exit: styles.exit,
          exitActive: styles.exitActive,
        }}
      >
        <Backdrop showBackground={hasBackdrop}>
          <div
            className={classNames(
              styles.dialogBackground,
              variant === "bottom" && styles.bottom,
              variant === "center" && styles.center,
              variant === "left" && styles.left,
              variant === "right" && styles.right
            )}
          >
            <BaseDialog
              ariaLabel={ariaLabel}
              buttons={buttons}
              className={className}
              content={content}
              onClose={onClose}
              title={title}
              variant={variant}
              {...rest}
            />
          </div>
        </Backdrop>
      </CSSTransition>
    </>
  );
};

Dialog.displayName = "Dialog";
