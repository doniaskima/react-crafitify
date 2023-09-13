import classNames from "classnames";
import * as React from "react";
import { Separator } from "../Separator/Separator";
import styles from "./MenuSeparator.module.scss";

export interface MenuSeparatorProps
  extends React.ComponentPropsWithoutRef<"span"> {
  ariaLabel?: string;
}


export const MenuSeparator: React.FC<MenuSeparatorProps> = (
  props
) => {
  const { ariaLabel, className, ...rest } = props;
  return (
    <Separator
      ariaLabel={ariaLabel}
      className={classNames(className, styles.menuSeparator)}
      direction="horizontal"
      stroke={1}
      {...rest}
    />
  );
};

MenuSeparator.displayName = "MenuSeparator";
