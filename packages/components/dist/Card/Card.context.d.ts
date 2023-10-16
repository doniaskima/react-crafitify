import { CardContext } from "./Card.types";
import React from 'react';
export declare const CardContextProvider: ({ children, value }: {
    value: CardContext;
    children: React.ReactNode;
}) => React.JSX.Element, useCardContext: () => CardContext;
