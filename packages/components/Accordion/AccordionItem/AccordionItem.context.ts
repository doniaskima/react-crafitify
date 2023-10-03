import { createElementContext } from "../../hooks/use-element-context.hook";
import { AccordionItemContext } from "./AccordionItem.types";

 

export const [AccordionItemContextProvider, useAccordionItemContext] =
  createElementContext<AccordionItemContext>(
    'Accordion Item compound components cannot be rendered outside the Accordion Item component'
);
