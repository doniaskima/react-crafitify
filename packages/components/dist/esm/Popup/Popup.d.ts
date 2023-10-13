import * as React from "react";
import { BasePopupPosition as PopupPosition } from "./BasePopup";
export interface PopupProps extends React.ComponentPropsWithoutRef<"div"> {
    /**
     * The trigger for the Popup
     */
    children: React.ReactElement;
    /**
     * If the Popup has an indicator
     *
     * @default false
     */
    hasIndicator?: boolean;
    /**
     * If the Popup is open
     *
     * @default false
     */
    isOpen?: boolean;
    /**
     * The callback fired when the Popup closes
     */
    onClose: (itemValue?: string) => void;
    /**
     * The callback fired when the Popup opens
     */
    onOpen: () => void;
    /**
     * The position of the Popup
     *
     * @default "bottom"
     */
    position?: PopupPosition;
    /**
     * The text for the Popup
     */
    text: string;
}
/**
 * @public
 *
 * @description
 *
 * The Popup component is a display that shows when hovering
 * over an element.
 */
export declare const Popup: React.FC<PopupProps>;
