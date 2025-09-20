<<<<<<< HEAD
// CardRoot.jsx

import React, { forwardRef, useMemo } from 'react';
import styles from './Card.module.scss';
import { CardComponent, CardContext, CardProps } from './Card.types';
import { useComponentTheme } from '../themes/theme.context';
import { usePropId } from '../utils/usePropId';
import { CardContextProvider } from './Card.context';
 
import { CardBody } from './CardBody';
import { CardHeader } from './CadHeader/CardHeader';
import { CardFooter } from './CardFooter/CardFooter';
import { CardImage } from './CardImage/CardImage';
 
 
=======
import { forwardRef, Ref, useMemo } from 'react';
import { twMerge } from 'tailwind-merge';
import { CardContextProvider } from './Card.context';
import { CardComponent, CardContext, CardProps } from './Card.types';
import { useComponentTheme } from '../themes/theme.context';
import { usePropId } from '../utils/usePropId';
import { CardHeader } from './CardHeader';
import { CardImage } from './CardImage';
import { CardBody } from './CardBody';
import { CardFooter } from './CardFooter';
import React from 'react';
>>>>>>> parent of 10bb73d (fix(Card): resolve styling issues and improve class composition and fixing issues :bug:)

const defaultProps: Partial<CardProps> = {
  bordered: true,
  color: 'white',
  radius: 'base',
  shadow: 'sm',
  size: 'base',
  withDivider: true,
};

const CardRoot: CardComponent = forwardRef<HTMLDivElement, CardProps>(
<<<<<<< HEAD
  (props: CardProps, ref?) => {
=======
  (props: CardProps, ref?: Ref<HTMLDivElement>) => {
>>>>>>> parent of 10bb73d (fix(Card): resolve styling issues and improve class composition and fixing issues :bug:)
    const theme = useComponentTheme('Card');
    const {
      bordered,
      children,
      className = '',
      color,
      radius,
      shadow,
      size,
      withDivider,
      ...additionalProps
    } = {
      ...defaultProps,
      ...props,
    };
    const id = usePropId(props.id);
    const contextValue: CardContext = {
      radius,
      size,
      withDivider,
    };

    const classes = useMemo(() => {
<<<<<<< HEAD
      return `
        ${styles.card} ${styles['color-' + color]} ${styles['radius-' + radius]} ${styles['shadow-' + shadow]} ${
        withDivider ? styles.withDivider : ''
      } ${bordered ? styles.bordered : ''} ${className}
      `;
    }, [styles.card, styles['color-' + color], styles['radius-' + radius], styles['shadow-' + shadow], styles.withDivider, styles.bordered, className]);
=======
      return twMerge(
        theme.base({
          bordered,
          className,
          color,
          radius,
          shadow,
          withDivider,
        })
        
      );
    }, [bordered, className, color, radius, shadow, withDivider, theme]);
>>>>>>> parent of 10bb73d (fix(Card): resolve styling issues and improve class composition and fixing issues :bug:)

    return (
      <CardContextProvider value={contextValue}>
        <div id={id} ref={ref} className={classes} {...additionalProps}>
          {children}
        </div>
      </CardContextProvider>
    );
  }
);

CardRoot.displayName = 'Card';

const Card = Object.assign(CardRoot, {
  Header: CardHeader,
  Image: CardImage,
  Body: CardBody,
  Footer: CardFooter,
});

export default Card;
<<<<<<< HEAD

=======
>>>>>>> parent of 10bb73d (fix(Card): resolve styling issues and improve class composition and fixing issues :bug:)
