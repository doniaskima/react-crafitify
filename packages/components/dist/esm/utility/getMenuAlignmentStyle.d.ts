import { BaseMenuAlignment } from "../components/Menu/BaseMenu";
export declare const getMenuAlignmentStyle: ({ alignment, referrerRef, targetRef, }: {
    alignment: BaseMenuAlignment;
    referrerRef: React.RefObject<HTMLElement>;
    targetRef: React.RefObject<HTMLElement>;
}) => {
    transform: string;
};
