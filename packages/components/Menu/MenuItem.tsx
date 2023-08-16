import classNames from "classnames";
import * as React from "react";
import { Typography } from "../Typography/Typography";
import styles from "./MenuItem.module.scss";

export interface MenuItemProps
  extends React.ComponentPropsWithoutRef<"div"> {
  /**
   * The content for the MenuItem
   */
  children: string;
}

/**
 * @public
 */
export const MenuItem: React.FC<MenuItemProps> = (props) => {
  const { className, children, ...rest } = props;

  return (
    <Typography
      className={classNames(className, styles.menuItemContainer)}
      role="menuitem"
      type="h2"
      variant="primary"
      {...rest}
    >
      {children}
    </Typography>
  );
};

MenuItem.displayName = "MenuItem";
