import * as React from "react";
import styles from "./Button.module.scss";
import classNames from "classnames";
import { Typography } from "../Typography/Typography";
import { Ripple } from "../Ripple";

export type ButtonVariant = "primary" | "secondary";
export type ButtonSize = "small" | "medium" | "large";
export type ButtonType = "button" | "submit" | "reset";

export interface ButtonProps
  extends React.ComponentPropsWithoutRef<"button"> {
  /**
   * The content for the Button
   */
  children: string;
  /**
   * If the Button is disabled
   *
   * @default false
   */
  disabled?: boolean;
  /**
   * The leading icon for the Button
   */
  leadingIcon?: React.ReactNode;
  /**
   * The callback fired when the Button is clicked
   */
  onClick?: () => void;
  /**
   * The size of the Button
   *
   * @default "medium"
   */
  size?: ButtonSize;
  /**
   * The trailing icon for the Button
   */
  trailingIcon?: React.ReactNode;
  /**
   * The type of the Button
   */
  type?: ButtonType;
  /**
   * The variant of the Button
   *
   * @default "primary"
   */
  variant?: ButtonVariant;
}

/**
 * @public
 *
 * @description
 *
 * The Button component is used to allows user to take an action.
 */
export const Button = React.forwardRef<
  HTMLButtonElement,
  ButtonProps
>((props, ref) => {
  const {
    className,
    children,
    disabled = false,
    leadingIcon,
    onClick,
    size = "medium",
    trailingIcon,
    type,
    variant = "primary",
    ...rest
  } = props;

  return (
    <button
      className={classNames(
        className,
        styles.button,
        disabled && styles.disabled,
        size === "small"
          ? styles.small
          : size === "large"
          ? styles.large
          : styles.medium,
        variant === "secondary" ? styles.secondary : styles.primary
      )}
      disabled={disabled}
      onClick={onClick}
      ref={ref}
      type={
        type === "reset"
          ? "reset"
          : type === "submit"
          ? "submit"
          : "button"
      }
      {...rest}
    >
      {!disabled && <Ripple position="cursor" />}
      <Typography
        className={styles.typography}
        type={
          size === "large" ? "h1" : size === "medium" ? "h2" : "h3"
        }
        variant={variant}
      >
        {leadingIcon && (
          <span className={styles.leadingIcon}>{leadingIcon}</span>
        )}
        {children}
        {trailingIcon && (
          <span className={styles.trailingIcon}>{trailingIcon}</span>
        )}
      </Typography>
    </button>
  );
});

Button.displayName = "Button";
