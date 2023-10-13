import * as React from "react";
export type SeparatorDirection = "horizontal" | "vertical";
export interface SeparatorProps extends React.ComponentPropsWithoutRef<"span"> {
    /**
     * The accessible label for the Separator
     */
    ariaLabel?: string;
    /**
     * The direction of the Separator
     *
     * @default "horizontal"
     */
    direction?: SeparatorDirection;
    /**
     * The stroke width of the Separator
     *
     * @default 1
     */
    stroke?: number;
}
/**
 * @public
 *
 * @description
 *
 * The Separator component is used to divide some content.
 */
export declare const Separator: React.FC<SeparatorProps>;
