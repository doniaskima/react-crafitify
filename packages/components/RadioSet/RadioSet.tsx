import classNames from "classnames";
import * as React from "react";
import styles from "./RadioSet.module.scss";
import { Radio } from "../Radio/Radio";

export interface RadioSetProps
  extends React.ComponentPropsWithoutRef<"ul"> {
  /**
   * The Radios in the Radios Set
   */
  children: React.ReactNode;
}

/**
 * @public
 *
 * @description
 *
 * The Radio Set is a set of options, as Radios, for the user.
 */
export const RadioSet: React.FC<RadioSetProps> = (props) => {
  const { children, className, ...rest } = props;

  return (
    <ul
      className={classNames(styles.radioSet, className)}
      role="list"
      {...rest}
    >
      {React.Children.map(children, (radio, index) => {
        if ((radio as React.ReactElement).type === Radio) {
          return (
            <li
              className={styles.radioSetItem}
              key={index}
              role="listitem"
            >
              {radio}
            </li>
          );
        } else {
          return null;
        }
      })}
    </ul>
  );
};

RadioSet.displayName = "RadioSet";
