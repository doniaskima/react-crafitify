 
import { forwardRef, Ref, useMemo } from 'react';
import { twMerge } from 'tailwind-merge';
import { CardFooterComponent, CardFooterProps } from './CardFooter.types';
import { useComponentTheme } from '../../themes/theme.context';
import { useCardContext } from '../Card.context';
import { usePropId } from '../../utils/usePropId';

const CardFooter: CardFooterComponent = forwardRef<HTMLDivElement, CardFooterProps>(
  (props: CardFooterProps, ref?: Ref<HTMLDivElement>) => {
    const theme = useComponentTheme('Card');
    const { children, className = '', ...additionalProps } = props;
    const { size, radius } = useCardContext();
    const id = usePropId(props.id);
    const classes = useMemo(() => {
      return twMerge(
        theme.footer({
          className,
          radius,
          size,
        })
      );
    }, [theme, className, radius, size]);

    return (
      <div id={id} ref={ref} className={classes} {...additionalProps}>
        {children}
      </div>
    );
  }
);

CardFooter.displayName = 'CardFooter';

export { CardFooter };
