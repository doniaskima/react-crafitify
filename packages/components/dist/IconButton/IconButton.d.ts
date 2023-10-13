import * as React from "react";
export type IconButtonSize = "small" | "medium" | "large";
export type IconButtonVariant = "primary" | "secondary";
export interface IconButtonProps extends React.ComponentPropsWithRef<"button"> {
    ariaLabel?: string;
    children?: React.ReactNode;
    content?: React.ReactElement;
    disabled?: boolean;
    size?: IconButtonSize;
    variant?: IconButtonVariant;
}
export declare const IconButton: React.ForwardRefExoticComponent<Omit<IconButtonProps, "ref"> & React.RefAttributes<HTMLButtonElement>>;
