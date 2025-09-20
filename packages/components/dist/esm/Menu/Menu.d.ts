import * as React from "react";
export type MenuAlignment = "bottomLeft" | "bottomCenter" | "bottomRight" | "topLeft" | "topCenter" | "topRight";
export interface MenuProps {
    alignment?: MenuAlignment;
    children: React.ReactNode;
    isOpen?: boolean;
    onClose: (itemValue?: string) => void;
    onOpen: () => void;
    trigger: React.ReactElement;
}
export declare const Menu: React.FC<MenuProps>;
