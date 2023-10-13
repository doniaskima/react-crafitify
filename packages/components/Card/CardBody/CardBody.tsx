
import { forwardRef, Ref, useMemo } from 'react';
import React from 'react';
import { twMerge } from 'tailwind-merge';
import { CardBodyComponent, CardBodyProps } from './CardBody.types';
import { useComponentTheme } from '../../themes/theme.context';
import { useCardContext } from '../Card.context';
import { usePropId } from '../../utils/usePropId';

const CardBody: CardBodyComponent = forwardRef<HTMLDivElement, CardBodyProps>(
  (props: CardBodyProps, ref?: Ref<HTMLDivElement>) => {
    const theme = useComponentTheme('Card');
    const { children, className = '', ...additionalProps } = props;
    const { size, withDivider } = useCardContext();
    const id = usePropId(props.id);
    const classes = useMemo(() => {
      return twMerge(
        theme.body({
          className,
          size,
          withDivider,
        })
      );
    }, [theme, className, size, withDivider]);

    return (
      <div id={id} ref={ref} className={classes} {...additionalProps}>
        {children}
      </div>
    );
  }
);

CardBody.displayName = 'CardBody';

export { CardBody };
