import * as React from "react";
import FocusLock from "react-focus-lock";
export interface FocusTrapProps extends React.ComponentProps<typeof FocusLock> {
    children: React.ReactNode;
    returnFocus?: boolean;
}
export declare const FocusTrap: React.FC<FocusTrapProps>;
