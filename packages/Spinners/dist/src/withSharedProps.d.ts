import React, { ComponentType } from 'react';
declare const defaultProps: {
    color: import("csstype").Property.Color | undefined;
    enabled: boolean;
    size: import("csstype").Property.Width<string | number> | undefined;
    style: React.CSSProperties;
};
export type SpinnersProps = Partial<typeof defaultProps>;
export declare const withSharedProps: <P extends Partial<{
    color: import("csstype").Property.Color | undefined;
    enabled: boolean;
    size: import("csstype").Property.Width<string | number> | undefined;
    style: React.CSSProperties;
}>>(Component: React.ComponentType<P>) => {
    (props: P): React.JSX.Element | null;
    defaultProps: {
        color: import("csstype").Property.Color | undefined;
        enabled: boolean;
        size: import("csstype").Property.Width<string | number> | undefined;
        style: React.CSSProperties;
    };
};
export {};
