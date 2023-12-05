import * as React from 'react';
export type TypographyType = 'h1' | 'h2' | 'h3';
export type TypographyVariant = 'primary' | 'secondary';
export type TypographyWeight = 'light' | 'normal' | 'bold';
export interface TypographyProps extends React.ComponentPropsWithoutRef<'div'> {
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
export declare const Typography: React.FC<TypographyProps>;
