import * as React from "react";
import { BasePopupPosition } from "./BasePopup";
export interface PopupLayoutContainerProps extends React.ComponentPropsWithoutRef<"div"> {
    /**
     * If the Popup has an indicator
     */
    hasIndicator: boolean;
    /**
     * The position for the Popup
     */
    position: BasePopupPosition;
    /**
     * The trigger ref for the Popup
     */
    triggerRef: React.RefObject<HTMLElement>;
}
export declare const PopupLayoutContainer: React.FC<PopupLayoutContainerProps>;
