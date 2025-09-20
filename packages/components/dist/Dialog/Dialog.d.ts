import * as React from "react";
import { BaseDialogProps } from "./BaseDialog";
export interface DialogProps extends BaseDialogProps {
    /**
     * If the Dialog has a backdrop
     *
     * @default true
     */
    hasBackdrop?: boolean;
    /**
     * If the Dialog is open
     *
     * @default false
     */
    isOpen?: boolean;
    /**
     * The callback fired when the Dialog opens
     */
    onOpen: () => void;
    /**
     * The trigger for the Dialog
     */
    trigger: React.ReactElement;
}
/**
 * @public
 *
 * @description
 *
 * The Dialog component gives attention to a task a user can take.
 */
export declare const Dialog: React.FC<DialogProps>;
