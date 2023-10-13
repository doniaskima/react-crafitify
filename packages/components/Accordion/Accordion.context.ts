import { createElementContext } from "../hooks/use-element-context.hook";
import { AccordionContext } from "./Accordion.types";
import React from 'react';

 

export const [AccordionContextProvider, useAccordionContext] =
  createElementContext<AccordionContext>(
    'Accordion compound components cannot be rendered outside the Accordion component'
  );
