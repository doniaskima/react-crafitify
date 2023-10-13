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

const defaultProps: Partial<CardProps> = {
  bordered: true,
  color: 'white',
  radius: 'base',
  shadow: 'sm',
  size: 'base',
  withDivider: true,
};

const CardRoot: CardComponent = forwardRef<HTMLDivElement, CardProps>(
  (props: CardProps, ref?: Ref<HTMLDivElement>) => {
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
