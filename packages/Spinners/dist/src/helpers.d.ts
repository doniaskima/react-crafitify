import { HTMLAttributes } from 'react';
export declare const defaultProps: {
    speed: number;
    still: boolean;
    thickness: number;
};
export declare const secondaryColorDefaultProps: {
    secondaryColor: import("csstype").Property.Color | undefined;
    speed: number;
    still: boolean;
    thickness: number;
};
export type SpinnerProps = HTMLAttributes<SVGElement> & Partial<typeof defaultProps>;
export type SecondaryColorSpinnerProps = SpinnerProps & Partial<typeof secondaryColorDefaultProps>;
