 
import { forwardRef, Ref, useMemo } from 'react';
import { twMerge } from 'tailwind-merge';
import React from 'react';
import { CardHeaderComponent, CardHeaderProps } from './CardHeader.types';
import { useComponentTheme } from '../../themes/theme.context';
import { useCardContext } from '../Card.context';
import { usePropId } from '../../utils/usePropId';

const CardHeader: CardHeaderComponent = forwardRef<HTMLDivElement, CardHeaderProps>(
  (props: CardHeaderProps, ref?: Ref<HTMLDivElement>) => {
    const theme = useComponentTheme('Card');
    const { children, actions, className = '', ...additionalProps } = props;
    const { size, radius } = useCardContext();
    const id = usePropId(props.id);
    const classes = useMemo(() => {
      return twMerge(
        theme.header({
          className,
          radius,
          size,
        })
      );
    }, [theme, className, radius, size]);

    return (
      <div id={id} ref={ref} className={classes} {...additionalProps}>
        {children}
        {actions && <div className="flex">{actions}</div>}
      </div>
    );
  }
);

CardHeader.displayName = 'CardHeader';

export { CardHeader };
