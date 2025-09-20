<<<<<<< HEAD
<<<<<<<< HEAD:packages/components/Card/CardFooter/CardFooter.types.ts
=======
>>>>>>> parent of 10bb73d (fix(Card): resolve styling issues and improve class composition and fixing issues :bug:)
import {
  ComponentPropsWithRef,
  ForwardRefExoticComponent,
  PropsWithoutRef,
  RefAttributes,
} from 'react';
<<<<<<< HEAD

=======
import React from 'react';
>>>>>>> parent of 10bb73d (fix(Card): resolve styling issues and improve class composition and fixing issues :bug:)
export interface CardFooterProps extends ComponentPropsWithRef<'div'> {}

export type CardFooterComponent = ForwardRefExoticComponent<
  PropsWithoutRef<CardFooterProps> & RefAttributes<HTMLDivElement>
> & {
  displayName?: string;
<<<<<<< HEAD
========
import { ComponentPropsWithRef, ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react';
export interface CardFooterProps extends ComponentPropsWithRef<'div'> {
}
export type CardFooterComponent = ForwardRefExoticComponent<PropsWithoutRef<CardFooterProps> & RefAttributes<HTMLDivElement>> & {
    displayName?: string;
>>>>>>>> parent of 10bb73d (fix(Card): resolve styling issues and improve class composition and fixing issues :bug:):packages/components/dist/esm/Card/CardFooter/CardFooter.types.d.ts
=======
>>>>>>> parent of 10bb73d (fix(Card): resolve styling issues and improve class composition and fixing issues :bug:)
};
