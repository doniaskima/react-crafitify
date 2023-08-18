import React from 'react';
import { SpinnerProps } from '../helpers';
import { SpinnersProps } from '../withSharedProps';
export type SpinnerDottedProps = SpinnersProps & SpinnerProps;
export declare const SpinnerDotted: {
    (props: SpinnerDottedProps): React.JSX.Element | null;
    defaultProps: {
        color: import("csstype").Property.Color | undefined;
        enabled: boolean;
        size: import("csstype").Property.Width<string | number> | undefined;
        style: React.CSSProperties;
    };
};
