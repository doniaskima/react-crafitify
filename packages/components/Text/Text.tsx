
import { ElementType, forwardRef, useMemo } from 'react';
import { TextComponent, TextProps } from './Text.types';
import { useComponentTheme } from '../themes/theme.context';
import { PolymorphicComponentProp, PolymorphicRef } from '../types/polymorphic.types';
import { useComponentVariant } from '../themes/variant.context';
import { usePropId } from '../utils/usePropId';

const defaultProps: Partial<TextProps> = {
  color: 'dark',
  leading: 'normal',
  size: 'base',
  tracking: 'normal',
  weight: 'normal',
};

const Text: TextComponent = forwardRef(
  <C extends ElementType = 'span'>(
    props: PolymorphicComponentProp<C, TextProps>,
    ref?: PolymorphicRef<C>
  ) => {
    const variantProps = useComponentVariant('Text', props.variant) as Partial<TextProps>;
    const theme = useComponentTheme('Text');
    const {
      as,
      children,
      className = '',
      color,
      leading,
      size,
      tracking,
      variant,
      weight,
      ...additionalProps
    } = {
      ...defaultProps,
      ...variantProps,
      ...props,
    };

    const classes = useMemo(() => {
      return theme({
        className,
        color,
        leading,
        size,
        tracking,
        weight,
      });
    }, [className, color, leading, size, theme, tracking, weight]);

    const Component = as || 'span';
    const id = usePropId(props.id);

    return (
      <Component id={id} ref={ref} className={classes} {...additionalProps}>
        {children}
      </Component>
    );
  }
);

Text.displayName = 'Text';

export default Text;
