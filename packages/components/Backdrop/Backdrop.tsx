import classNames from "classnames";
import * as React from "react";
import styles from "./Backdrop.module.scss";

export interface BackdropProps extends React.ComponentPropsWithoutRef<"div"> {
  children?: React.ReactNode;
  showBackground?: boolean;
}

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
