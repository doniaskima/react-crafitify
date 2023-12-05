import React, { forwardRef, useMemo } from 'react';
import { useCardContext } from '../Card.context';
import * as CardStyles from '../Card.module.scss';
import { usePropId } from '../../utils/usePropId';
import { CardHeaderComponent, CardHeaderProps } from './CardHeader.types';

const CardHeader: CardHeaderComponent = forwardRef<HTMLDivElement, CardHeaderProps>(
  (props: CardHeaderProps, ref?) => {
    const { children, actions, className = '', ...additionalProps } = props;
    const { size, radius } = useCardContext();
    const id = usePropId(props.id);

    const classes = useMemo(() => {
      const themeClasses = [
        CardStyles.default.header,
        CardStyles.default[className],  
      ];

      return `
        ${themeClasses.join(' ')} custom-class-1 custom-class-2
      `;
    }, [CardStyles, className, radius, size]);

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