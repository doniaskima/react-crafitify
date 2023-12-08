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

    return (
      <div id={id} ref={ref} className={classes} {...additionalProps}>
        {children}
      </div>
    );
  }
);

CardFooter.displayName = 'CardFooter';

export { CardFooter };
