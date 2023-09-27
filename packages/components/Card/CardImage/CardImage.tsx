
import { forwardRef, Ref } from 'react';
import { CardImageComponent, CardImageProps } from './CardImage.types';
import { useComponentTheme } from '../../themes/theme.context';
import { useCardContext } from '../Card.context';
import { usePropId } from '../../utils/usePropId';

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
    const classes = theme.image({ radius });

    return (
      <Image
        id={id}
        ref={ref}
        className={classes}
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
