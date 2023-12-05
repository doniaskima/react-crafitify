import { CardProps } from './Card.types';
import React from 'react';
declare const Card: React.ForwardRefExoticComponent<
  Omit<CardProps, 'ref'> & React.RefAttributes<HTMLDivElement>
> & {
  displayName?: string | undefined;
} & {
  Header: import('./CardHeader/CardHeader.types').CardHeaderComponent;
  Image: import('./CardImage/CardImage.types').CardImageComponent;
  Body: import('./CardBody/CardBody.types').CardBodyComponent;
  Footer: import('./CardFooter/CardFooter.types').CardFooterComponent;
};
export default Card;
