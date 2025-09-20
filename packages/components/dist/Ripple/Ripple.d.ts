import * as React from "react";
export interface RippleInstanceCoordinates {
    x?: number;
    y?: number;
    size?: number;
}
export type RipplePosition = "center" | "cursor";
export interface RippleProps extends React.ComponentPropsWithoutRef<"div"> {
    color?: string;
    duration?: number;
    position?: RipplePosition;
}
export declare const Ripple: React.FC<RippleProps>;
