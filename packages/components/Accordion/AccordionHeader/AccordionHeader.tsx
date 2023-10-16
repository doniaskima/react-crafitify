 
import { forwardRef, Ref, useMemo } from 'react';
import { twMerge } from 'tailwind-merge';
import { AccordionHeaderComponent, AccordionHeaderProps } from './AccordionHeader.types';
import { useComponentTheme } from '../../themes/theme.context';
import { useAccordionContext } from '../Accordion.context';
import { useAccordionItemContext } from '../AccordionItem/AccordionItem.context';

const AccordionHeader: AccordionHeaderComponent = forwardRef<
  HTMLButtonElement,
  AccordionHeaderProps
>((props: AccordionHeaderProps, ref?: Ref<HTMLButtonElement>) => {
  const theme = useComponentTheme('Accordion');
  const {
    children,
    className = '',
    ...additionalProps
  } = {
    ...props,
  };
  const {
    activeColor,
    activeItemAnchor,
    bordered,
    radius,
    setActiveItemAnchor,
    size,
    tone,
    withRing,
  } = useAccordionContext();
  const { anchor, headerId, bodyId } = useAccordionItemContext();
  const expanded = anchor === activeItemAnchor;
  const handleClick = () => {
    const activeAnchor = expanded ? '' : anchor;
    setActiveItemAnchor(activeAnchor);
  };
  const state = expanded ? 'active' : 'inactive';

  const classes = useMemo(() => {
    return twMerge(
      theme.header({
        bordered,
        className,
        size,
        activeColor,
        radius,
        state,
        tone,
        withRing,
      })
    );
  }, [bordered, className, radius, activeColor, size, state, theme, tone, withRing]);

  const iconClasses = theme.icon({ size, state });

  return (
    <button
      id={headerId}
      ref={ref}
      type="button"
      onClick={handleClick}
      className={classes}
      aria-expanded={expanded}
      aria-controls={bodyId}
      {...additionalProps}
    >
      {children}
      {/* <ChevronDownIcon className={iconClasses} /> */}
    </button>
  );
});

AccordionHeader.displayName = 'AccordionHeader';

export { AccordionHeader };
