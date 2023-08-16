import classNames from "classnames";
import * as React from "react";
import styles from "./TextField.module.scss";

export type TextFieldSize = "small" | "medium" | "large";
export type TextFieldType =
  | "email"
  | "number"
  | "password"
  | "search"
  | "tel"
  | "text"
  | "time"
  | "url";

export interface TextFieldProps
  extends React.ComponentPropsWithoutRef<"div"> {
  /**
   * The accessible label for the TextField
   */
  ariaLabel?: string;
  /**
   * If the TextField is disabled
   *
   * @default false
   */
  disabled?: boolean;
  /**
   * The accessible label for the TextField
   *
   * @default "textfield"
   */
  label?: string;
  /**
   * The callback fired when requested to change the value for the TextField
   */
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /**
   * The size of the TextField
   *
   * @default "medium"
   */
  size?: TextFieldSize;
  /**
   * The trailing icon for the TextField
   */
  trailingIcon?: React.ReactNode;
  /**
   * The type for the input in the TextField
   *
   * @default "text"
   */
  type?: TextFieldType;
  /**
   * The value for the TextField
   */
  value?: string;
}

/**
 * @public
 *
 * @description
 *
 * The Text Field component is used to allow a user to
 * type in a textbox.
 */
export const TextField = React.forwardRef<
  HTMLDivElement,
  TextFieldProps
>((props, ref) => {
  const {
    ariaLabel = "textbox",
    className,
    size = "medium",
    trailingIcon,
    disabled = false,
    onChange,
    type = "text",
    label = "textfield",
    value,
    ...rest
  } = props;

  const inputContainer = classNames(
    styles.textFieldContainer,
    disabled && styles.disabled
  );

  const classes = classNames(
    styles.textField,
    size === "small" && styles.small,
    size === "medium" && styles.medium,
    size === "large" && styles.large,
    disabled && styles.disabled
  );

  const labelClasses = classNames(
    styles.label,
    size === "small" && styles.labelSmall,
    size === "medium" && styles.labelMedium,
    size === "large" && styles.labelLarge,
    disabled && styles.disabledLabel
  );

  return (
    <div
      aria-label={ariaLabel}
      className={styles.container}
      ref={ref}
      {...rest}
      role="textbox"
    >
      <div className={inputContainer}>
        <input
          aria-label={label}
          autoComplete="off"
          id="void_textfield"
          className={classNames(classes, className)}
          disabled={disabled}
          required
          onChange={onChange}
          spellCheck={false}
          type={type}
          value={value}
        />
        {label !== "textfield" && (
          <span className={labelClasses}>{label}</span>
        )}
      </div>
      {trailingIcon && trailingIcon}
    </div>
  );
});

TextField.displayName = "TextField";
