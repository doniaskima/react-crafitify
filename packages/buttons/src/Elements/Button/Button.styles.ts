import styled from '@emotion/styled';
import {ICRAFTSIZE} from "../../../interfaces"

import { colors, CRAFT_FONT_SIZES, CRAFT_PADDING_SIZES } from '../../../constants';
import { ButtonColor } from './types';

type ContainerButtonType = {
  variant: ButtonColor;
  full?: boolean;
  size?: keyof ICRAFTSIZE;
  disabled?: boolean;
  outline?: boolean;
};

export const ContainerButton = styled.button<ContainerButtonType>(
  ({ variant = 'primary', disabled, full = false, size = 'm', outline }) => ({
    background: disabled
      ? outline
        ? 'none'
        : colors[`${variant}-lighter`]
      : outline
      ? 'none'
      : colors[variant],
    color: outline ? colors[variant] : 'white',
    width: full ? '100%' : 'fit-content',
    outline: 'none',
    fontWeight: 'bold',
    height: 'fit-content',
    fontSize:CRAFT_FONT_SIZES[size],
    border: outline
      ? `2.8px solid ${
          disabled ? colors[`${variant}-lighter`] : colors[variant]
        } `
      : 'none',
    padding: outline
      ? `${CRAFT_PADDING_SIZES[size] - 2.8}px 30px`
      : `${CRAFT_PADDING_SIZES[size]}px 30px`,
    borderRadius: '10px',
    cursor: disabled ? 'not-allowed' : 'pointer',
    letterSpacing: '.3px',
    transition: 'all .1s ease-in-out',
    '&:hover': {
      background: disabled
        ? outline
          ? 'none'
          : colors[`${variant}-lighter`]
        : outline
        ? 'none'
        : colors[`${variant}-darker`],
      opacity: outline ? (disabled ? 1 : '.7') : 1,
    },
    '&:focus': {
      outlineStyle: 'none',
    },
  })
);

export const ContainerLinkButton = styled.a<ContainerButtonType>(
  ({ variant = 'primary', size = 'm' }) => ({
    color: colors[variant],
    fontWeight: 'bold',
    cursor: 'pointer',
    fontSize:CRAFT_FONT_SIZES[size],
    textDecoration: 'none',
    '&:hover': {
      color: colors[`${variant}-darker`],
      textDecoration: 'underline',
    },
  })
);