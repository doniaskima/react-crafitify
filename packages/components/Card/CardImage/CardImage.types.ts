import {
<<<<<<< HEAD
    ComponentPropsWithRef,
    ForwardRefExoticComponent,
    PropsWithoutRef,
    RefAttributes,
  } from 'react';
  
  export interface CardImageProps extends ComponentPropsWithRef<'div'> {
    src: string;
    alt?: string;
    caption?: string;
    mode?: 'dark' | 'light';
  }
  
  export type CardImageComponent = ForwardRefExoticComponent<
    PropsWithoutRef<CardImageProps> & RefAttributes<HTMLDivElement>
  > & {
    displayName?: string;
  };
  
=======
  ComponentPropsWithRef,
  ForwardRefExoticComponent,
  PropsWithoutRef,
  RefAttributes,
} from 'react';
import React from 'react';

export interface CardImageProps extends ComponentPropsWithRef<'div'> {
  src: string;
  alt?: string;
  caption?: string;
  mode?: 'dark' | 'light';
}

export type CardImageComponent = ForwardRefExoticComponent<
  PropsWithoutRef<CardImageProps> & RefAttributes<HTMLDivElement>
> & {
  displayName?: string;
};
>>>>>>> parent of 10bb73d (fix(Card): resolve styling issues and improve class composition and fixing issues :bug:)
