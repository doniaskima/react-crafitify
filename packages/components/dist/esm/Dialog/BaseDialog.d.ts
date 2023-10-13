import * as React from "react";
export type BaseDialogVariant = "bottom" | "center" | "left" | "right";
export interface BaseDialogProps extends React.ComponentPropsWithoutRef<"div"> {
    /**
     * The accessible label for the Dialog
     */
    ariaLabel?: string;
    /**
     * The buttons for the Dialog
     */
    buttons?: React.ReactNode;
    /**
     * The content for the Dialog
     */
    content: string;
    /**
     * The callback fired when the Dialog closes
     */
    onClose: () => void;
    /**
     * The title for the Dialog
     */
    title: string;
    /**
     * The variant of the Dialog
     */
    variant?: BaseDialogVariant;
}
/**
 * @private
 */
export declare const BaseDialog: React.FC<BaseDialogProps>;
