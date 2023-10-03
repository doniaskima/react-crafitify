
import { forwardRef, Ref, useMemo } from 'react';
import { twMerge } from 'tailwind-merge';
import { useComponentTheme } from '../../themes/theme.context';
import { AccordionBodyComponent, AccordionBodyProps } from './AccordionBody.types';
import { useAccordionContext } from '../Accordion.context';
import { useAccordionItemContext } from '../AccordionItem/AccordionItem.context';

const AccordionBody: AccordionBodyComponent = forwardRef<HTMLDivElement, AccordionBodyProps>(
  (props: AccordionBodyProps, ref?: Ref<HTMLDivElement>) => {
    const theme = useComponentTheme('Accordion');
    const {
      children,
      className = '',
      ...additionalProps
    } = {
      ...props,
    };
    const { activeItemAnchor, bordered, size } = useAccordionContext();
    const { anchor, bodyId, headerId } = useAccordionItemContext();

    const classes = useMemo(() => {
      return twMerge(
        theme.body({
          bordered,
          className,
          size,
        })
      );
    }, [bordered, className, size, theme]);

    return (
      <Collapse isOpen={anchor === activeItemAnchor}>
        <div
          id={bodyId}
          ref={ref}
          role="region"
          aria-labelledby={headerId}
          className={classes}
          {...additionalProps}
        >
          {children}
        </div>
      </Collapse>
    );
  }
);

AccordionBody.displayName = 'AccordionBody';

export { AccordionBody };
