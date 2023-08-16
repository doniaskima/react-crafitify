import classNames from "classnames";
import * as React from "react";
import styles from "./Typography.module.scss";

export type TypographyType = "h1" | "h2" | "h3";
export type TypographyVariant = "primary" | "secondary";
export type TypographyWeight = "light" | "normal" | "bold";

export interface TypographyProps
  extends React.ComponentPropsWithoutRef<"div"> {
  /**
   * The content for the Typography
   */
  children: React.ReactNode;
  /**
   * The variant for the Typography
   *
   * @default "h2"
   */
  type?: TypographyType;
  /**
   * The text color for the Typography
   *
   * @default "primary"
   */
  variant?: TypographyVariant;
  /**
   * The font weight for the Typography
   *
   * @default "normal"
   */
  weight?: TypographyWeight;
}

/**
 * @public
 *
 * @description
 *
 * The Typography component is used for consistent text
 * across an application.
 */
export const Typography: React.FC<TypographyProps> = (props) => {
  const {
    children,
    className,
    type = "h2",
    variant = "primary",
    weight = "normal",
    ...rest
  } = props;

  return (
    <div
      className={classNames(
        className,
        styles.typography,
        type === "h1" && styles.typographyh1,
        type === "h2" && styles.typographyh2,
        type === "h3" && styles.typographyh3,
        variant === "primary" && styles.primary,
        variant === "secondary" && styles.secondary,
        weight === "light" && styles.light,
        weight === "normal" && styles.normal,
        weight === "bold" && styles.bold
      )}
      {...rest}
    >
      {children}
    </div>
  );
};

Typography.displayName = "Typography";
