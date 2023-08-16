import * as React from "react";
import classNames from "classnames";
import styles from "./Checkbox.module.scss";
import { MdCheckBoxOutlineBlank, MdCheckBox } from "react-icons/md";
import { IconButton } from "../IconButton";
import { Typography } from "../Typography/Typography";

export interface CheckboxProps
  extends React.ComponentPropsWithoutRef<"button"> {
  /**
   * The label for the Checkbox
   */
  children: React.ReactNode;
  /**
   * If the Checkbox is disabled
   *
   * @default false
   */
  disabled?: boolean;
  /**
   * If the Checkbox is checked
   *
   * @default false
   */
  isChecked?: boolean;
  /**
   * The callback fired when requesting to change the Checkbox state
   */
  onChange: () => void;
}

/**
 * @public
 *
 * @description
 *
 * The Checkbox allows a user to select an item.
 */
export const Checkbox: React.FC<CheckboxProps> = (props) => {
  const {
    children,
    className,
    disabled = false,
    isChecked = false,
    onChange,
    ...rest
  } = props;

  return (
    <div className={styles.container}>
      <IconButton
        className={classNames(
          className,
          isChecked && styles.isChecked
        )}
        content={
          isChecked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />
        }
        onClick={onChange}
        disabled={disabled}
        role="checkbox"
        variant="secondary"
        {...rest}
      />
      <Typography
        className={classNames(
          disabled && styles.disabled,
          isChecked && styles.checked
        )}
        variant="secondary"
      >
        {children}
      </Typography>
    </div>
  );
};

Checkbox.displayName = "Checkbox";
