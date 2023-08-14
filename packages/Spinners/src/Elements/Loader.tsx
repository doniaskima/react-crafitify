import { colors } from '../../constants/colors';

import {
  LoaderDotsContainder,
  LoaderRingContainer,
  LoaderRotateContainer,
} from './Loader.styles';
import { LoaderProps } from './types';

const { black } = colors;

const Loader: React.FC<LoaderProps> = ({
  color = black,
  size = 64,
  borderSize = 8,
  type = 'ring',
}) => {
  const RenderLoader: Record<typeof type, JSX.Element> = {
    ring: (
      <LoaderRingContainer color={color} size={size} borderSize={borderSize}>
        <div />
        <div />
        <div />
        <div />
      </LoaderRingContainer>
    ),
    dots: <LoaderDotsContainder color={color} size={size} />,
    rotate: (
      <LoaderRotateContainer
        color={color}
        size={size}
        borderSize={borderSize}
      />
    ),
  };
  return RenderLoader[type];
};

export default Loader;
