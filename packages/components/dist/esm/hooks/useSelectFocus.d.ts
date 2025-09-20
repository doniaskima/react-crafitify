import * as React from "react";
export declare const useSelectFocus: (children: React.ReactNode, selectContainerRef: React.RefObject<HTMLElement>, selected?: number) => {
    focusNextItem: () => void;
    focusPreviousItem: () => void;
    focusedSelectItemIndex: number;
};
