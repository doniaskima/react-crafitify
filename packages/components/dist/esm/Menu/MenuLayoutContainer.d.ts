import * as React from "react";
import { BaseMenuAlignment } from "./BaseMenu";
export interface MenuLayoutContainerProps extends React.ComponentPropsWithoutRef<"div"> {
    /**
     * The alignment for the Menu
     */
    alignment: BaseMenuAlignment;
    /**
     * The trigger ref for the Menu
     */
    triggerRef: React.RefObject<HTMLElement>;
}
/**
 * @private
 */
export declare const MenuLayoutContainer: React.FC<MenuLayoutContainerProps>;
