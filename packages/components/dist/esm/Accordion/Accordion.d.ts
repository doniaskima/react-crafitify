/// <reference types="react" />
import { AccordionProps } from './Accordion.types';
declare const Accordion: import("react").ForwardRefExoticComponent<Omit<AccordionProps, "ref"> & import("react").RefAttributes<HTMLDivElement>> & {
    displayName?: string | undefined;
} & {
    Item: import("./AccordionItem/AccordionItem.types").AccordionItemComponent;
    Header: import("./AccordionHeader/AccordionHeader.types").AccordionHeaderComponent;
    Body: import("./AccordionBody/AccordionBody.types").AccordionBodyComponent;
};
export default Accordion;
