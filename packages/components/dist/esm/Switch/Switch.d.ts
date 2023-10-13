import * as React from "react";
export interface SwitchProps extends React.ComponentPropsWithoutRef<"button"> {
    /**
     * If the Switch is on
     *
     * @default false
     */
    isOn?: boolean;
    /**
     * The label for the Switch
     */
    label?: string;
}
/**
 * @public
 *
 * @description
 *
 * The Switch component is used to toggle states.
 */
export declare const Switch: React.FC<SwitchProps>;
