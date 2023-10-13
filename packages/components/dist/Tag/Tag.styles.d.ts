/// <reference types="react" />
import { ICRAFTSize } from '../interfaces';
export declare const TagContainer: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any> | undefined;
} & {
    size: keyof ICRAFTSize;
    color: 'primary' | 'secondary' | 'error';
}, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, {}>;
export declare const TagLable: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any> | undefined;
}, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, {}>;
