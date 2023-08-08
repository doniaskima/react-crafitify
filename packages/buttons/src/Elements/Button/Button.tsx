import React, { forwardRef, PropsWithChildren } from 'react';
import {
  ButtonPropsWithAs,
  ButtonColor,
  ButtonRefsByTag,
  TagsByButton,
} from './types';
import { ContainerButton, ContainerLinkButton } from './Button.styles';

type PrimaryButtonProps<T extends TagsByButton = 'button'> = {
  label: string;
  full?: boolean;
  size?: 'sm' | 'm' | 'lg';
  loading?: boolean;
  color?: ButtonColor;
  outline?: boolean;
} & ButtonPropsWithAs<T>;

function Button<T extends TagsByButton = 'button'>(
  {
    as,
    className = '',
    loading,
    size = 'm',
    label,
    full,
    href,
    disabled,
    color = 'primary',
    ...otherPrimaryButtonProps
  }: PropsWithChildren<PrimaryButtonProps<T>>,
  ref: ButtonRefsByTag[T]
) {
  const renderChildren = () => (
    <span className="break-words w-full">{label}</span>
  );

  if (as === 'a' || href) {
    const { htmlProps, ...aProps } =
      otherPrimaryButtonProps as PrimaryButtonProps<'a'>;

    return (
      <ContainerLinkButton
        size={size}
        variant={color}
        ref={ref as ButtonRefsByTag['a']}
        href={href}
        className={className}
        {...htmlProps}
        {...aProps}
      >
        {renderChildren()}
      </ContainerLinkButton>
    );
  }

  const { htmlProps, ...buttonProps } =
    otherPrimaryButtonProps as PrimaryButtonProps<'button'>;

  return (
    <ContainerButton
      size={size}
      variant={color}
      full={full}
      ref={ref as ButtonRefsByTag['button']}
      type="button"
      disabled={!!(disabled || loading)}
      className={className}
      {...htmlProps}
      {...buttonProps}
    >
      {renderChildren()}
    </ContainerButton>
  );
}

export default forwardRef(Button);
