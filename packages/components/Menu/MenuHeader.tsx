import classNames from "classnames";
import * as React from "react";
import { Typography } from "../Typography/Typography";
import styles from "./MenuHeader.module.scss";

export interface MenuHeaderProps
  extends React.ComponentPropsWithoutRef<"div"> {
  /**
   * The content for the MenuHeader
   */
  children: string;
}

/**
 * @public
 */
export const MenuHeader: React.FC<MenuHeaderProps> = (props) => {
  const { children, className, ...rest } = props;
  return (
    <Typography
      className={classNames(styles.menuHeader, className)}
      role="presentation"
      type="h3"
      variant="primary"
      {...rest}
    >
      {children.toUpperCase()}
    </Typography>
  );
};

MenuHeader.displayName = "MenuHeader";
