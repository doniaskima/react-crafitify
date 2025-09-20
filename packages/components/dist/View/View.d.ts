import React, { ReactNode } from 'react';
interface ViewProps {
    prop: string;
    value?: string;
    direction?: 'row' | 'column';
    justify?: 'start' | 'evenly';
    children: ReactNode;
}
export declare const View: React.FC<ViewProps>;
interface EnhancedViewProps {
    prop: string;
    value?: string;
    children: ReactNode;
}
export declare const EnhancedView: React.FC<EnhancedViewProps>;
interface ViewGroupProps {
    children: ReactNode;
    direction?: 'column' | 'row';
}
export declare const ViewGroup: React.FC<ViewGroupProps>;
export {};
