import * as React from "react";
export type CalculatePositionFn = (dimensions: {
    referrerHeight: number;
    referrerWidth: number;
    targetHeight: number;
    targetWidth: number;
}) => {
    left: number;
    top: number;
};
export declare const getLayoutStyle: ({ calculateLayout, referrerRef, targetRef, }: {
    calculateLayout: CalculatePositionFn;
    referrerRef: React.RefObject<HTMLElement>;
    targetRef: React.RefObject<HTMLElement>;
}) => {
    transform: string;
};
