import classNames from "classnames";
import * as React from "react";
import { Ripple } from "../Ripple";
import { Typography } from "../Typography/Typography";
import styles from "./Switch.module.scss";

export interface SwitchProps
  extends React.ComponentPropsWithoutRef<"button"> {
  /**
   * If the Switch is on
   *
   * @default false
   */
  isOn?: boolean;
  /**
   * The label for the Switch
   */
  label?: string;
}

/**
 * @public
 *
 * @description
 *
 * The Switch component is used to toggle states.
 */
export const Switch: React.FC<SwitchProps> = (props) => {
  const { className, isOn = false, label, ...rest } = props;

  return (
    <button
      aria-checked={isOn}
      className={classNames(
        className,
        styles.switchContainer,
        isOn && styles.on
      )}
      role="switch"
      type="button"
      {...rest}
    >
      <span
        className={classNames(styles.switchPill, isOn && styles.on)}
      >
        <span
          className={classNames(
            styles.switchIndicator,
            isOn && styles.on
          )}
        />
        <span
          className={classNames(
            styles.switchRipple,
            isOn && styles.on
          )}
        >
          <Ripple duration={800} position="center" />
        </span>
      </span>
      {label && (
        <Typography
          className={classNames(
            styles.switchLabel,
            isOn && styles.on
          )}
        >
          {label}
        </Typography>
      )}
    </button>
  );
};

Switch.displayName = "Switch";
