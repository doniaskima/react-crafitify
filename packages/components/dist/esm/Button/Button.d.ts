import * as React from "react";
export type ButtonVariant = "primary" | "secondary";
export type ButtonSize = "small" | "medium" | "large";
export type ButtonType = "button" | "submit" | "reset";
export interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
    children: string;
    disabled?: boolean;
    leadingIcon?: React.ReactNode;
    onClick?: () => void;
    size?: ButtonSize;
    trailingIcon?: React.ReactNode;
    type?: ButtonType;
    variant?: ButtonVariant;
}
export declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
