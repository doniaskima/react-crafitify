// CardRoot.jsx

import React, { forwardRef, useMemo } from 'react';
import styles from './Card.module.scss';
import { CardComponent, CardContext, CardProps } from './Card.types';
import { useComponentTheme } from '../themes/theme.context';
import { usePropId } from '../utils/usePropId';
import { CardContextProvider } from './Card.context';
import CardImage from './CardImage/CardImage';
 
import { CardBody } from './CardBody';
import { CardHeader } from './CadHeader/CardHeader';
import { CardFooter } from './CardFooter/CardFooter';
 
 

const defaultProps: Partial<CardProps> = {
  bordered: true,
  color: 'white',
  radius: 'base',
  shadow: 'sm',
  size: 'base',
  withDivider: true,
};

const CardRoot: CardComponent = forwardRef<HTMLDivElement, CardProps>(
  (props: CardProps, ref?) => {
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
      return `
        ${styles.card} ${styles['color-' + color]} ${styles['radius-' + radius]} ${styles['shadow-' + shadow]} ${
        withDivider ? styles.withDivider : ''
      } ${bordered ? styles.bordered : ''} ${className}
      `;
    }, [styles.card, styles['color-' + color], styles['radius-' + radius], styles['shadow-' + shadow], styles.withDivider, styles.bordered, className]);

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

