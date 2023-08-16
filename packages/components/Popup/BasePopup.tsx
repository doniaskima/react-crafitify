import classNames from "classnames";
import * as React from "react";
import { Typography } from "../Typography/Typography";

import styles from "./BasePopup.module.scss";

export type BasePopupPosition = "bottom" | "top" | "left" | "right";

export interface BasePopupProps
  extends React.ComponentPropsWithoutRef<"div"> {
  /**
   * If the Popup has an indicator
   */
  hasIndicator: boolean;
  /**
   * The position of the Popup
   */
  position: BasePopupPosition;
  /**
   * The text for the Popup
   */
  text: string;
}

export const BasePopup = React.forwardRef<
  HTMLDivElement,
  BasePopupProps
>((props, ref) => {
  const { className, hasIndicator, position, text, ...rest } = props;

  return (
    <div
      className={classNames(
        hasIndicator && styles.indicator,
        position === "bottom" && styles.bottom,
        position === "top" && styles.top,
        position === "left" && styles.left,
        position === "right" && styles.right,
        styles.basePopup,
        className
      )}
      ref={ref}
      role="tooltip"
      {...rest}
    >
      <Typography type="h2" variant="primary">
        {text}
      </Typography>
    </div>
  );
});

BasePopup.displayName = "BasePopup";
