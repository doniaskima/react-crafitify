import styled from '@emotion/styled';

import { ICRAFTSize } from '../interfaces';
import { convertHexToRGBA } from '../utils';
import { colors } from '../constants';

import {
  CRAFT_TAG_FONT_SIZES,
  CRAFT_TAG_MARGIN_SIZES,
  CRAFT_TAG_PADDING_Y_SIZES,
  CRAFT_TAG_PADDING_X_SIZES,
} from './types';

export const TagContainer = styled.span<{
  size: keyof ICRAFTSize;
  color: 'primary' | 'secondary' | 'error';
}>(({ size, color }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: `${CRAFT_TAG_PADDING_Y_SIZES[size]} ${CRAFT_TAG_PADDING_X_SIZES[size]}`,
  fontSize: CRAFT_TAG_FONT_SIZES[size],
  border: `1px solid ${colors[color]}`,
  backgroundColor: convertHexToRGBA(colors[`${color}-lighter`], 0.2),
  color: colors[`${color}-darker`],
  margin: CRAFT_TAG_MARGIN_SIZES[size],
  borderRadius: '3px',
  height: 'fit-content',
  '& >:first-of-type': {
    marginRight: '3px',
  },
  '& >:last-of-type': {
    cursor: 'pointer',
  },
}));

export const TagLable = styled.span(() => ({
  display: 'inline-block',
  marginBottom: '2px',
}));
