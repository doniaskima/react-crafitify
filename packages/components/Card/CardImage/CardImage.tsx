 
import { forwardRef, Ref } from 'react';
import { CardImageComponent, CardImageProps } from './CardImage.types';
import { useComponentTheme } from '../../themes/theme.context';
import { useCardContext } from '../Card.context';
import { usePropId } from '../../utils/usePropId';
import { Image } from '../../Image/index';
import React from 'react';

const CardImage: CardImageComponent = forwardRef<HTMLDivElement, CardImageProps>(
  (props: CardImageProps, ref?: Ref<HTMLDivElement>) => {
    const theme = useComponentTheme('Card');
    const {
      caption,
      children,
      src,
      alt = '',
      className = '',
      mode = 'light',
      ...additionalProps
    } = props;
    const { radius } = useCardContext();
    const id = usePropId(props.id);
   

    return (
      <Image
        id={id}
        ref={ref}
 
        src={src}
        alt={alt}
        caption={caption}
        mode={mode}
        {...additionalProps}
      />
    );
  }
);

CardImage.displayName = 'CardImage';

export { CardImage };
