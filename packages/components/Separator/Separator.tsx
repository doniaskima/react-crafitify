import * as React from "react";
import classNames from "classnames";
import styles from "./Separator.module.scss";

export type SeparatorDirection = "horizontal" | "vertical";

export interface SeparatorProps
  extends React.ComponentPropsWithoutRef<"span"> {
  ariaLabel?: string;
  direction?: SeparatorDirection;

  stroke?: number;
}

export const Separator: React.FC<SeparatorProps> = (props) => {
  const {
    className,
    direction = "horizontal",
    stroke = 1,
    ...rest
  } = props;
  return (
    <span
      aria-label=""
      className={classNames(className, styles.separator)}
      role="separator"
      style={
        direction === "horizontal"
          ? { borderTop: `${stroke}px solid #c8c8c8`, width: "100%" }
          : {
              borderLeft: `${stroke}px solid #c8c8c8`,
              height: "100%",
            }
      }
      {...rest}
    />
  );
};

Separator.displayName = "Separator";
