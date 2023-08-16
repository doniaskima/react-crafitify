import classNames from "classnames";
import * as React from "react";
import styles from "./Status.module.scss";

export type StatusVariant = "online" | "away" | "busy" | "offline";

export interface StatusProps
  extends React.ComponentPropsWithoutRef<"div"> {
  /**
   * The state of the Status
   *
   * @default "offline"
   */
  variant?: StatusVariant;
  /**
   * The label for the Status
   */
  label?: string;
}

/**
 *
 * @public
 *
 * @description
 *
 * The Status component gives the condition of a thing or user.
 */
export const Status: React.FC<StatusProps> = (props) => {
  const { className, label, variant = "offline", ...rest } = props;

  const title = variant.charAt(0).toUpperCase() + variant.slice(1);

  return (
    <div
      className={classNames(className, styles.statusContainer)}
      role="status"
      title={title}
      {...rest}
    >
      <span
        className={classNames(
          styles.status,
          variant === "online" && styles.online,
          variant === "away" && styles.away,
          variant === "busy" && styles.busy,
          variant === "offline" && styles.offline
        )}
      />
      {label && (
        <span
          className={classNames(
            styles.label,
            variant === "online" && styles.online,
            variant === "away" && styles.away,
            variant === "busy" && styles.busy,
            variant === "offline" && styles.offline
          )}
        >
          {label}
        </span>
      )}
    </div>
  );
};

Status.displayName = "Status";
