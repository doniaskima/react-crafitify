import * as React from "react";
export interface CheckboxProps extends React.ComponentPropsWithoutRef<"button"> {
    /**
     * The label for the Checkbox
     */
    children: React.ReactNode;
    /**
     * If the Checkbox is disabled
     *
     * @default false
     */
    disabled?: boolean;
    /**
     * If the Checkbox is checked
     *
     * @default false
     */
    isChecked?: boolean;
    /**
     * The callback fired when requesting to change the Checkbox state
     */
    onChange: () => void;
}
/**
 * @public
 *
 * @description
 *
 * The Checkbox allows a user to select an item.
 */
export declare const Checkbox: React.FC<CheckboxProps>;
