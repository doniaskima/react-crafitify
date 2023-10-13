import * as React from "react";
export interface SelectProps extends React.ComponentPropsWithoutRef<"div"> {
    /**
     * The content for the Select
     */
    children: React.ReactNode;
    /**
     * If the Select is open
     *
     * @default false
     */
    isOpen?: boolean;
    /**
     * The callback fired when the Select closes
     */
    onClose: () => void;
    /**
     * The callback fired when the Select opens
     */
    onOpen: () => void;
    /**
     * The placeholder for the Select
     */
    placeholder?: string;
    /**
     * The initial selected item's index for the Select
     */
    selected?: number;
}
/**
 * @public
 *
 * @description
 *
 * The Select component displays a dropdown of selectable options.
 */
export declare const Select: React.FC<SelectProps>;
