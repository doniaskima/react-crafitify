<<<<<<< HEAD
import React, { forwardRef, useMemo } from 'react';
import { CardFooterComponent, CardFooterProps } from './CardFooter.types';
import { useCardContext } from '../Card.context';
import { useComponentTheme } from '../../themes/theme.context';
import { usePropId } from '../../utils/usePropId';

// Import styles correctly
import * as CardStyles from '../Card.module.scss';

const CardFooter: CardFooterComponent = forwardRef<HTMLDivElement, CardFooterProps>(
  (props: CardFooterProps, ref?) => {
    const { children, className = '', ...additionalProps } = props;
    const { size, radius } = useCardContext();
    const id = usePropId(props.id);

    const classes = useMemo(() => {
      const themeClasses = [
        CardStyles.default.footer,
        CardStyles.default[className], // Use the correct property from SCSS module
      ];

      return `
        ${themeClasses.join(' ')} custom-class-1 custom-class-2
      `;
    }, [CardStyles, className, radius, size]);

=======
 
import { forwardRef, Ref, useMemo } from 'react';
import { twMerge } from 'tailwind-merge';
import React from 'react';
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

>>>>>>> parent of 10bb73d (fix(Card): resolve styling issues and improve class composition and fixing issues :bug:)
    return (
      <div id={id} ref={ref} className={classes} {...additionalProps}>
        {children}
      </div>
    );
  }
);

CardFooter.displayName = 'CardFooter';

export { CardFooter };
