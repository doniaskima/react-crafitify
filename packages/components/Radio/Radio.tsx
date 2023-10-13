import React from "react";
import classNames from "classnames";
import styles from "./Radio.module.scss";
import {
  MdRadioButtonUnchecked,
  MdRadioButtonChecked,
} from "react-icons/md";
import { IconButton } from "../IconButton";
import { Typography } from "../Typography/Typography";

export interface RadioProps
  extends React.ComponentPropsWithoutRef<"button"> {
  children: React.ReactNode;
  disabled?: boolean;
  isSelected?: boolean;
  onChange: () => void;
}

 
export const Radio: React.FC<RadioProps> = ({
  children,
  className,
  disabled = false,
  isSelected = false,
  onChange,
  ...rest
}) => {
  const icon = isSelected ? (
    <MdRadioButtonChecked />
  ) : (
    <MdRadioButtonUnchecked />
  );

  return (
    <div className={styles.container}>
      <IconButton
        className={classNames(
          className,
          isSelected && styles.isSelected
        )}
        content={icon}
        disabled={disabled}
        onClick={onChange}
        role="radio"
        variant="secondary"
        {...rest}
      />
      <Typography
        className={classNames(
          disabled && styles.disabled,
          isSelected && styles.selected
        )}
        variant="secondary"
      >
        {children}
      </Typography>
    </div>
  );
};

Radio.displayName = "Radio";
