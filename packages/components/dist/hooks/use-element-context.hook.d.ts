import { ReactNode } from 'react';
export declare function createElementContext<ContextValue>(
  errorMessage: string,
): readonly [
  ({
    children,
    value,
  }: {
    value: ContextValue;
    children: ReactNode;
  }) => import('react').JSX.Element,
  () => ContextValue & ({} | undefined),
];
