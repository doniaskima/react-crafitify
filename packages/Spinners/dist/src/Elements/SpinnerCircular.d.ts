import React from 'react';
import { SecondaryColorSpinnerProps } from '../helpers';
import { SpinnersProps } from '../withSharedProps';
export type SpinnerCircularProps = SpinnersProps & SecondaryColorSpinnerProps;
export declare const SpinnerCircular: {
  (props: SpinnerCircularProps): React.JSX.Element | null;
  defaultProps: {
    color: import('csstype').Property.Color | undefined;
    enabled: boolean;
    size: import('csstype').Property.Width<string | number> | undefined;
    style: React.CSSProperties;
  };
};
