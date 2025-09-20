<<<<<<< HEAD
<<<<<<<< HEAD:packages/components/Card/CardBody/CardBody.types.ts
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

export interface CardBodyProps extends ComponentPropsWithRef<'div'> {}

export type CardBodyComponent = ForwardRefExoticComponent<
  PropsWithoutRef<CardBodyProps> & RefAttributes<HTMLDivElement>
> & {
  displayName?: string;
<<<<<<< HEAD
========
import { ComponentPropsWithRef, ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react';
export interface CardBodyProps extends ComponentPropsWithRef<'div'> {
}
export type CardBodyComponent = ForwardRefExoticComponent<PropsWithoutRef<CardBodyProps> & RefAttributes<HTMLDivElement>> & {
    displayName?: string;
>>>>>>>> parent of 10bb73d (fix(Card): resolve styling issues and improve class composition and fixing issues :bug:):packages/components/dist/esm/Card/CardBody/CardBody.types.d.ts
=======
>>>>>>> parent of 10bb73d (fix(Card): resolve styling issues and improve class composition and fixing issues :bug:)
};
