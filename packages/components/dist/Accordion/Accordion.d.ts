import React from 'react';
import { AccordionProps } from './Accordion.types';
declare const Accordion: React.ForwardRefExoticComponent<
  Omit<AccordionProps, 'ref'> & React.RefAttributes<HTMLDivElement>
> & {
  displayName?: string | undefined;
} & {
  Item: import('./AccordionItem/AccordionItem.types').AccordionItemComponent;
  Header: import('./AccordionHeader/AccordionHeader.types').AccordionHeaderComponent;
  Body: import('./AccordionBody/AccordionBody.types').AccordionBodyComponent;
};
export default Accordion;
