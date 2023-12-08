import {
  Ref,
  HTMLAttributes,
  ButtonHTMLAttributes,
  MouseEventHandler,
} from 'react';

export type TagsByButton = 'button' | 'a';

export type ButtonColor = 'primary' | 'secondary' | 'error' | 'dismiss';

export type BaseButtonProps = {
  className?: string;
  id?: string;
  disabled?: boolean;
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  htmlFor?: string;
};

export type ButtonRefsByTag = {
  button: Ref<HTMLButtonElement>;
  a: Ref<HTMLAnchorElement>;
};

export type ButtonPropsByTag = {
  button: {
    onClick?: MouseEventHandler<HTMLButtonElement>;
    htmlProps?: ButtonHTMLAttributes<HTMLButtonElement>;
  };
  a: {
    onClick?: MouseEventHandler<HTMLAnchorElement>;
    htmlProps?: HTMLAttributes<HTMLAnchorElement>;
  };
};

export type ButtonPropsWithAs<As extends TagsByButton> = BaseButtonProps & {
  as?: As;
  href?: string;
  target?: string;
  rel?: string;
} & ButtonPropsByTag[As];
