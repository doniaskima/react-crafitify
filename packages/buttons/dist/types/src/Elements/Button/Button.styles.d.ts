/// <reference types="react" />
import { ICRAFTSIZE } from '../../../interfaces';
import { ButtonColor } from './types';
type ContainerButtonType = {
  variant: ButtonColor;
  full?: boolean;
  size?: keyof ICRAFTSIZE;
  disabled?: boolean;
  outline?: boolean;
};
export declare const ContainerButton: import('@emotion/styled').StyledComponent<
  {
    theme?: import('@emotion/react').Theme | undefined;
    as?: import('react').ElementType<any> | undefined;
  } & ContainerButtonType,
  import('react').DetailedHTMLProps<
    import('react').ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
  {}
>;
export declare const ContainerLinkButton: import('@emotion/styled').StyledComponent<
  {
    theme?: import('@emotion/react').Theme | undefined;
    as?: import('react').ElementType<any> | undefined;
  } & ContainerButtonType,
  import('react').DetailedHTMLProps<
    import('react').AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  >,
  {}
>;
export {};
