import { ReactNode } from 'react';
export declare function createIndependentContext<ContextValue>(): readonly [({ children, value }: {
    value: ContextValue;
    children: ReactNode;
}) => import("react").JSX.Element, () => ContextValue];
