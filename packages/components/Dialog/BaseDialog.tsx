import * as React from "react";
import styles from "./BaseDialog.module.scss";
import { IconButton } from "../IconButton/IconButton";
import { useOnClickOutside, useOnKeyDown } from "../../hooks";
import { TbX } from "react-icons/tb";
import { FocusTrap } from "../FocusTrap/FocusTrap";
import { Separator } from "../Separator/Separator";
import classNames from "classnames";
import { Typography } from "../Typography/Typography";

export type BaseDialogVariant =
  | "bottom"
  | "center"
  | "left"
  | "right";

export interface BaseDialogProps
  extends React.ComponentPropsWithoutRef<"div"> {
  /**
   * The accessible label for the Dialog
   */
  ariaLabel?: string;
  /**
   * The buttons for the Dialog
   */
  buttons?: React.ReactNode;
  /**
   * The content for the Dialog
   */
  content: string;
  /**
   * The callback fired when the Dialog closes
   */
  onClose: () => void;
  /**
   * The title for the Dialog
   */
  title: string;
  /**
   * The variant of the Dialog
   */
  variant?: BaseDialogVariant;
}

/**
 * @private
 */
export const BaseDialog: React.FC<BaseDialogProps> = (props) => {
  const {
    ariaLabel,
    buttons,
    className,
    content,
    onClose,
    title,
    variant,
    ...rest
  } = props;

  const dialogRef = React.useRef<HTMLDivElement>(null);

  useOnClickOutside(dialogRef, onClose);

  useOnKeyDown(["Escape"], onClose);

  return (
    <FocusTrap>
      <div
        aria-label={ariaLabel ?? "dialog"}
        className={classNames(
          className,
          styles.dialogContainer,
          variant === "bottom" && styles.bottom,
          variant === "center" && styles.center,
          variant === "left" && styles.left,
          variant === "right" && styles.right
        )}
        ref={dialogRef}
        role="dialog"
        {...rest}
      >
        <div className={styles.dialogHeader}>
          <Typography
            className={styles.dialogTitle}
            type="h1"
            variant="primary"
          >
            {title}
          </Typography>
          <IconButton
            className={styles.dialogIcon}
            content={<TbX />}
            onClick={onClose}
          />
        </div>
        {(variant === "left" || variant === "right") && (
          <Separator direction="horizontal" stroke={1} />
        )}
        <Typography
          className={styles.dialogContent}
          type="h2"
          variant="primary"
        >
          {content}
        </Typography>
        {buttons && (
          <div
            className={classNames(
              variant === "left" && styles.dialogButtonsContainer,
              variant === "right" && styles.dialogButtonsContainer
            )}
          >
            <Separator direction="horizontal" stroke={1} />
            <div className={styles.dialogButtons}>{buttons}</div>
          </div>
        )}
      </div>
    </FocusTrap>
  );
};

BaseDialog.displayName = "BaseDialog";
