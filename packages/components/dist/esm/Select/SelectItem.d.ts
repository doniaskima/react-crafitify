import * as React from "react";
interface SelectItemProps extends React.ComponentPropsWithoutRef<"div"> {
    /**
     * The content for the SelectItem
     */
    children: string;
}
/**
 * @public
 */
export declare const SelectItem: React.FC<SelectItemProps>;
export {};
