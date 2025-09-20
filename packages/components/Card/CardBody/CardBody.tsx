<<<<<<< HEAD
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
    
=======

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
>>>>>>> parent of 10bb73d (fix(Card): resolve styling issues and improve class composition and fixing issues :bug:)

    return (
      <div id={id} ref={ref} className={classes} {...additionalProps}>
        {children}
      </div>
    );
  }
);

CardBody.displayName = 'CardBody';

export { CardBody };
