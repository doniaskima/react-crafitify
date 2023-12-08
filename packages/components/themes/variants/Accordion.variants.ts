import { AccordionProps, AccordionVariant } from '../../Accordion';
import { AsProp } from '../../types/polymorphic.types';

export const accordionVariants: Record<
  AccordionVariant,
  AccordionProps & AsProp<any>
> = {
  primary: {},
};
