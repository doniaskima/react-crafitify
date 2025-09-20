import * as React from "react";
export type LinkVariant = "primary" | "secondary";
export interface LinkProps extends React.ComponentPropsWithoutRef<"a"> {
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
export declare const Link: React.FC<LinkProps>;
