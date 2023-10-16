import {
  ComponentPropsWithRef,
  ForwardRefExoticComponent,
  PropsWithoutRef,
  RefAttributes,
} from 'react';

export type AccordionActiveColor =
  | 'white'
  | 'blue'
  | 'red'
  | 'green'
  | 'yellow'
  | 'purple'
  | 'gray'
  | 'dark'
  | 'black';
export type AccordionColor = 'white' | 'gray' | 'slate' | 'zinc';
export type AccordionRadius = 'none' | 'sm' | 'base' | 'md' | 'lg';
export type AccordionShadow = 'none' | 'sm' | 'base' | 'md' | 'lg' | 'xl';
export type AccordionShadowColor = 'none' | 'gray' | 'slate' | 'zinc';
export type AccordionSize = 'sm' | 'md' | 'lg' | 'xl';
export type AccordionTone = 'solid' | 'light';
export type AccordionVariant = 'primary';

export interface AccordionContext {
  activeColor?: AccordionActiveColor;
  activeItemAnchor?: string;
  bordered?: boolean;
  color?: AccordionColor;
  radius?: AccordionRadius;
  setActiveItemAnchor(value: string): void;
  size?: AccordionSize;
  tone?: AccordionTone;
  withRing?: boolean;
}

export interface AccordionProps extends ComponentPropsWithRef<'div'> {
  activeColor?: AccordionActiveColor;
  bordered?: boolean;
  color?: AccordionColor;
  defaultItem?: string;
  radius?: AccordionRadius;
  shadow?: AccordionShadow;
  shadowColor?: AccordionShadowColor;
  size?: AccordionSize;
  tone?: AccordionTone;
  variant?: AccordionVariant;
  withRing?: boolean;
}

export type AccordionComponent = ForwardRefExoticComponent<
  PropsWithoutRef<AccordionProps> & RefAttributes<HTMLDivElement>
> & {
  displayName?: string;
};
