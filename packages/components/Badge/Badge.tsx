import classNames from "classnames";
import * as React from "react";
import {
  IconButton,
  IconButtonProps,
} from "../IconButton/IconButton";
import styles from "./Badge.module.scss";

export type BadgeSize = "small" | "medium" | "large";

export interface BadgeProps extends IconButtonProps {
  /**
   * The title for the Badge
   */
  title: string;
}

/**
 * @public
 *
 * @description
 *
 * The Badge is a simple display icon with fun animations.
 */
export const Badge: React.FC<BadgeProps> = (props) => {
  const {
    ariaLabel = "Badge",
    className,
    content,
    title,
    ...rest
  } = props;

  return (
    <IconButton
      ariaLabel={ariaLabel}
      className={classNames(className, styles.icon)}
      content={content}
      tabIndex={-1}
      title={title}
      {...rest}
    />
  );
};

Badge.displayName = "Badge";
