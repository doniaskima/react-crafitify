import * as React from "react";
import styles from "./IconButton.module.scss";
import classNames from "classnames";
import { Ripple } from "../Ripple";

export type IconButtonSize = "small" | "medium" | "large";
export type IconButtonVariant = "primary" | "secondary";

export interface IconButtonProps
  extends React.ComponentPropsWithRef<"button"> {

  ariaLabel?: string;
  children?: React.ReactNode;
  content?: React.ReactElement;
  disabled?: boolean;
  size?: IconButtonSize;
  variant?: IconButtonVariant;
}

export const IconButton = React.forwardRef<
  HTMLButtonElement,
  IconButtonProps
>((props, ref) => {
  const {
    ariaLabel = "Icon Button",
    children,
    className,
    content,
    disabled = false,
    size = "medium",
    variant = "primary",
    ...rest
  } = props;

  const iconSizeNumber =
    size === "medium" ? 22 : size === "small" ? 18 : 26;

  return (
    <button
      aria-label={ariaLabel}
      className={classNames(
        className,
        children && styles.children,
        disabled && styles.disabled,
        styles.iconButton,
        size === "small" && styles.small,
        size === "medium" && styles.medium,
        size === "large" && styles.large,
        variant === "primary" && styles.primary,
        variant === "secondary" && styles.secondary
      )}
      disabled={disabled}
      ref={ref}
      {...rest}
    >
      {!disabled && <Ripple duration={1000} position="center" />}
      {content
        ? React.cloneElement(content, {
            size: iconSizeNumber,
          })
        : children}
    </button>
  );
});

IconButton.displayName = "IconButton";
