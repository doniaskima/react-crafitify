import * as React from "react";
export type BaseMenuAlignment = "bottomLeft" | "bottomCenter" | "bottomRight" | "topLeft" | "topCenter" | "topRight";
export interface BaseMenuProps extends React.ComponentPropsWithoutRef<"div"> {
    children: React.ReactNode;
    onClose: (itemValue?: string) => void;
    triggerRef: React.RefObject<HTMLElement>;
}
export declare const BaseMenu: React.ForwardRefExoticComponent<BaseMenuProps & React.RefAttributes<HTMLDivElement>>;
