import * as React from "react";
export type TextFieldSize = "small" | "medium" | "large";
export type TextFieldType = "email" | "number" | "password" | "search" | "tel" | "text" | "time" | "url";
export interface TextFieldProps extends React.ComponentPropsWithoutRef<"div"> {
    /**
     * The accessible label for the TextField
     */
    ariaLabel?: string;
    /**
     * If the TextField is disabled
     *
     * @default false
     */
    disabled?: boolean;
    /**
     * The accessible label for the TextField
     *
     * @default "textfield"
     */
    label?: string;
    /**
     * The callback fired when requested to change the value for the TextField
     */
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    /**
     * The size of the TextField
     *
     * @default "medium"
     */
    size?: TextFieldSize;
    /**
     * The trailing icon for the TextField
     */
    trailingIcon?: React.ReactNode;
    /**
     * The type for the input in the TextField
     *
     * @default "text"
     */
    type?: TextFieldType;
    /**
     * The value for the TextField
     */
    value?: string;
}
/**
 * @public
 *
 * @description
 *
 * The Text Field component is used to allow a user to
 * type in a textbox.
 */
export declare const TextField: React.ForwardRefExoticComponent<TextFieldProps & React.RefAttributes<HTMLDivElement>>;
