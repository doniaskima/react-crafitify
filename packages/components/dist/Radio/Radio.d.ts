import * as React from "react";
export interface RadioProps extends React.ComponentPropsWithoutRef<"button"> {
    /**
     * The label for the Radio
     */
    children: React.ReactNode;
    /**
     * If the Radio is disabled
     *
     * @default false
     */
    disabled?: boolean;
    /**
     * If the Radio is selected
     *
     * @default false
     */
    isSelected?: boolean;
    /**
     * The callback fired when requesting to change the Radio state
     */
    onChange: () => void;
}
/**
 * @public
 *
 * @description
 *
 * The Radio allows a user to select an item.
 */
export declare const Radio: React.FC<RadioProps>;
