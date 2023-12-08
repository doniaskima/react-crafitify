// CardBody.tsx

import React, { forwardRef, useMemo } from 'react';
import { CardBodyComponent, CardBodyProps } from './CardBody.types';
import { useCardContext } from '../Card.context';
import { usePropId } from '../../utils/usePropId';

// Import styles correctly
import * as CardStyles from '../Card.module.scss';

const CardBody: CardBodyComponent = forwardRef<HTMLDivElement, CardBodyProps>(
  (props: CardBodyProps, ref?) => {
    const { children, className = '', ...additionalProps } = props;
    const { size, withDivider } = useCardContext();
    const id = usePropId(props.id);

    const classes = useMemo(() => {
      return `
        ${CardStyles.default.body} custom-class-1 custom-class-2
      `;
    }, [CardStyles, className, size, withDivider]);
    

    return (
      <div id={id} ref={ref} className={classes} {...additionalProps}>
        {children}
      </div>
    );
  }
);

CardBody.displayName = 'CardBody';

export { CardBody };
