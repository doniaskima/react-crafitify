import { AccordionContext } from "./Accordion.types";
import React from 'react';
export declare const AccordionContextProvider: ({ children, value }: {
    value: AccordionContext;
    children: React.ReactNode;
}) => React.JSX.Element, useAccordionContext: () => AccordionContext;
