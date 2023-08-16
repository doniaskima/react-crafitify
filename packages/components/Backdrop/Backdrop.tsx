import classNames from "classnames";
import * as React from "react";
import styles from "./Backdrop.module.scss";

export interface BackdropProps
  extends React.ComponentPropsWithoutRef<"div"> {
  /**
   * The content for the Backdrop
   */
  children?: React.ReactNode;
  /**
   * If the Backdrop shows the background
   *
   * @default true
   */
  showBackground?: boolean;
}

/**
 * @public
 *
 * @description
 *
 * The Backdrop component will add a dimmed layer over the page
 * and is used to empahisize a particular element.
 */
export const Backdrop: React.FC<BackdropProps> = (props) => {
  const {
    className,
    children,
    showBackground = true,
    ...rest
  } = props;

  return (
    <div
      className={classNames(
        styles.backdrop,
        !showBackground && styles.noBackground,
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
};

Backdrop.displayName = "Backdrop";
