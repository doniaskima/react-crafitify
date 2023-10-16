 
import React from 'react';
import { AccordionItemContextProvider } from './AccordionItem.context';
import { AccordionItemComponent, AccordionItemContext, AccordionItemProps } from './AccordionItem.types';

const AccordionItem: AccordionItemComponent = (props: AccordionItemProps) => {
  const { anchor, children } = {
    ...props,
  };
  const headerId = `${anchor}-header`;
  const bodyId = `${anchor}-body`;

  const value: AccordionItemContext = {
    anchor,
    bodyId,
    headerId,
  };

  return <AccordionItemContextProvider value={value}>{children}</AccordionItemContextProvider>;
};

AccordionItem.displayName = 'AccordionItem';

export { AccordionItem };
