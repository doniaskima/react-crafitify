import classNames from "classnames";
import * as React from "react";
import { Typography } from "../Typography/Typography";
import styles from "./Link.module.scss";

export type LinkVariant = "primary" | "secondary";

export interface LinkProps
  extends React.ComponentPropsWithoutRef<"a"> {
  /**
   * The content for the Link
   */
  children: string;
  /**
   * The href for the Link
   */
  href: string;
  /**
   * The variant for the Link
   *
   * @default "primary"
   */
  variant?: LinkVariant;
}

/**
 * @public
 *
 * @description
 *
 * The Link component allows a user to navigate to a new page.
 */
export const Link: React.FC<LinkProps> = (props) => {
  const {
    className,
    children,
    href,
    variant = "primary",
    ...rest
  } = props;

  return (
    <a
      className={classNames(
        className,
        styles.linkContainer,
        variant === "primary" ? styles.primary : styles.secondary
      )}
      href={href}
      {...rest}
    >
      <Typography type="h2" variant={variant}>
        {children}
      </Typography>
    </a>
  );
};

Link.displayName = "Link";
