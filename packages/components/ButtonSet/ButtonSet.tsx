import * as React from "react";
import classNames from "classnames";
import styles from "./ButtonSet.module.scss";
import { Button } from "../Button/Button";

export interface ButtonSetProps
  extends React.ComponentPropsWithoutRef<"ul"> {
  /**
   * The Buttons in the Button Set
   */
  children: React.ReactNode;
  /**
   * The flex direction of the Button Set
   *
   * @default "row"
   */
  flexDirection?: "row" | "column";
}

/**
 * @public
 *
 * @description
 *
 * The Button Set is a group Buttons with related actions.
 */
export const ButtonSet: React.FC<ButtonSetProps> = (props) => {
  const {
    children,
    className,
    flexDirection = "row",
    ...rest
  } = props;

  return (
    <ul
      className={classNames(
        styles.buttonSet,
        flexDirection === "column" && styles.buttonSetColumn,
        className
      )}
      role="list"
      {...rest}
    >
      {React.Children.map(children, (button, index) => {
        if ((button as React.ReactElement).type === Button) {
          return (
            <li
              className={styles.buttonSetItem}
              key={index}
              role="listitem"
            >
              {button}
            </li>
          );
        } else {
          return null;
        }
      })}
    </ul>
  );
};

ButtonSet.displayName = "ButtonSet";
